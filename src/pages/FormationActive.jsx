import { useEffect, useMemo, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getFormationDetails, markChapterRead } from "@/data/api";
import { computeFormationProgress, flattenTree } from "@/utils/flattenTree";
import { FormationTree } from "@/components/training/FormationTree";
import { ArrowLeft } from "lucide-react";
import { useAppData } from "@/context/AppDataContext";
import UserMenu from "@/components/layout/UserMenu";
import { ChapterView } from "@/components/training/ChapterView";

export default function FormationActive() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const focusModuleId = location.state?.focusModuleId;

    const [formation, setFormation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedId, setSelectedId] = useState(null);
    const [openModuleId, setOpenModuleId] = useState(null);
    const { employee, branding, platform } = useAppData();
    const progress = useMemo(
        () => (formation ? computeFormationProgress(formation) : { done: 0, total: 0, percent: 0 }),
        [formation]
    );

    useEffect(() => {
        let alive = true;
        setLoading(true);
        getFormationDetails(id).then((data) => {
            if (!alive) return;
            setFormation(data);
            setLoading(false);
        });
        return () => { alive = false; };
    }, [id]);

    const flat = useMemo(() => (formation ? flattenTree(formation) : []), [formation]);

    useEffect(() => {
        if (!formation || flat.length === 0) return;
        const isActionable = (e) => e.node.status !== "completed" && e.node.status !== "locked";

        let target;
        if (focusModuleId) {
            target = flat.find((e) => e.moduleId === focusModuleId && isActionable(e));
        }
        target = target ?? flat.find(isActionable) ?? flat[0];
        setSelectedId(target.id);
        if (target.moduleId) setOpenModuleId(target.moduleId);
    }, [formation, flat, focusModuleId]);

    const handleSelect = (nodeId) => {
        setSelectedId(nodeId);
        const entry = flat.find((e) => e.id === nodeId);
        if (entry?.moduleId) setOpenModuleId(entry.moduleId); // garde le module ouvert
    };

    const handleToggleModule = (moduleId) => {
        setOpenModuleId((cur) => (cur === moduleId ? null : moduleId)); // un seul ouvert
    };

    const handleCompleteChapter = async (chapterId) => {
        await markChapterRead(chapterId);
        const fresh = await getFormationDetails(id);
        setFormation(fresh);

        const freshFlat = flattenTree(fresh);
        const idx = freshFlat.findIndex((e) => e.id === chapterId);
        const next = freshFlat[idx + 1];
        if (next && next.node.status !== "locked") {
            setSelectedId(next.id);
            if (next.moduleId) setOpenModuleId(next.moduleId);
        }
    };

    if (loading) return <div className="p-6">Chargement…</div>;
    if (!formation) return <div className="p-6">Formation introuvable.</div>;

    const selected = flat.find((e) => e.id === selectedId);

    return (
        <div className="flex h-screen flex-col bg-background">
            <header className="flex h-14 shrink-0 items-center gap-4 border-b border-border bg-white px-4">
                <button
                    onClick={() => navigate("/formations")}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                >
                    <ArrowLeft className="h-4 w-4" />
                    <span className="hidden sm:inline">Retour</span>
                </button>

                <button
                    onClick={() => navigate("/dashboard")}
                    className="flex items-center gap-2 transition-opacity cursor-pointer"
                >
                    {platform?.logoUrl && (
                        <img src={platform.logoUrl} alt={platform.name} className="h-10 w-auto object-contain" />
                    )}
                    <span className="text-xl font-bold text-platform-brand">{platform?.name}</span>
                </button>

                <span className="h-6 w-px bg-border" />

                {branding?.logoUrl && (
                    <img src={branding.logoUrl} alt={branding.name} className="h-6 w-auto rounded-xs object-contain" />
                )}

                <div className="mx-auto hidden max-w-xs flex-1 items-center gap-3 md:flex">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                        <div
                            className="h-full rounded-full bg-platform-brand transition-all"
                            style={{ width: `${progress.percent}%` }}
                        />
                    </div>
                    <span className="shrink-0 text-xs font-medium text-muted-foreground">
                        {progress.done}/{progress.total}
                    </span>
                </div>

                <div className="ml-auto md:ml-0">
                    {employee && (
                        <UserMenu
                            firstName={employee.firstName}
                            lastName={employee.lastName}
                            email={employee.email}
                        />
                    )}
                </div>
            </header>

            <div className="flex min-h-0 flex-1">
                <aside className="hidden w-80 shrink-0 overflow-y-auto border-r border-border bg-white lg:block">
                    <FormationTree
                        formation={formation}
                        selectedId={selectedId}
                        onSelect={handleSelect}
                        openModuleId={openModuleId}
                        onToggleModule={handleToggleModule}
                    />
                </aside>

                <main className="min-w-0 flex-1 overflow-y-auto p-6 md:p-10">
                    <div className={selected?.type === "chapter" && ["video", "pdf", "infographic"].includes(selected?.node?.contentType)
                        ? "mx-auto max-w-7xl"
                        : "mx-auto max-w-3xl"
                    }>
                        <p className="text-xs uppercase tracking-wide text-muted-foreground">{selected?.type}</p>
                        <h1 className="mt-1 mb-6 text-2xl font-bold text-foreground">
                            {selected?.node.title ?? selected?.type}
                        </h1>

                        {selected?.type === "chapter" && (
                            <ChapterView
                                chapterId={selected.id}
                                isCompleted={selected.node.status === "completed"}
                                onComplete={handleCompleteChapter}
                            />
                        )}

                        {selected?.type !== "chapter" && (
                            <div className="rounded-sm border border-dashed border-border p-8 text-center text-muted-foreground">
                                Contenu « {selected?.type} » - à venir
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}