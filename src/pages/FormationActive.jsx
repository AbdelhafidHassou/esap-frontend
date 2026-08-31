import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getFormationDetails, markChapterRead, markQuizPassed } from "@/data/api";
import { computeFormationProgress, flattenTree } from "@/utils/flattenTree";
import { FormationTree } from "@/components/training/FormationTree";
import { useAppData } from "@/context/AppDataContext";
import UserMenu from "@/components/layout/UserMenu";
import { ChapterView } from "@/components/training/ChapterView";
import { QuizView } from "@/components/training/QuizView";
import { ArrowLeft, ArrowRight, Eye, EyeClosed, Menu } from "lucide-react";
import {
    Sheet, SheetContent, SheetTrigger, SheetTitle,
} from "@/components/ui/sheet";
import { TestRecap } from "@/components/training/TestRecap";
import { SsiView } from "@/components/training/SsiView";
import { ValidationView } from "@/components/training/ValidationView";
import { useTheme } from "@/context/ThemeContext";

function formatTime(s) {
    if (s == null) return "";
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
}

export default function FormationActive() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [treeOpen, setTreeOpen] = useState(false);
    const focusModuleId = location.state?.focusModuleId;
    const [chapterState, setChapterState] = useState({ remaining: null, canAdvance: false, loading: true });
    const [initialized, setInitialized] = useState(false);
    const [formation, setFormation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedId, setSelectedId] = useState(null);
    const [openModuleId, setOpenModuleId] = useState(null);
    const { employee, branding, platform } = useAppData();
    const { isDark } = useTheme();
    const progress = useMemo(
        () => (formation ? computeFormationProgress(formation) : { done: 0, total: 0, percent: 0 }),
        [formation]
    );

    const handleChapterState = useCallback((state) => setChapterState(state), []);

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
        if (!formation || flat.length === 0 || initialized) return;
        const isActionable = (e) => e.node.status !== "completed" && e.node.status !== "locked";

        let target;
        if (focusModuleId) {
            target = flat.find((e) => e.moduleId === focusModuleId && isActionable(e));
        }
        target = target ?? flat.find(isActionable) ?? flat[0];
        setSelectedId(target.id);
        if (target.moduleId) setOpenModuleId(target.moduleId);
        setInitialized(true);
    }, [formation, flat, focusModuleId, initialized]);

    const handleSelect = (nodeId) => {
        setSelectedId(nodeId);
        const entry = flat.find((e) => e.id === nodeId);
        if (entry?.moduleId) setOpenModuleId(entry.moduleId);
    };

    const handleToggleModule = (moduleId) => {
        setOpenModuleId((cur) => (cur === moduleId ? null : moduleId));
    };

    const handleMarkRead = async (chapterId) => {
        await markChapterRead(chapterId);
        const fresh = await getFormationDetails(id);
        setFormation(fresh);
    };

    const handleNextChapter = (chapterId) => {
        const idx = flat.findIndex((e) => e.id === chapterId);
        const next = flat[idx + 1];
        if (next && next.node.status !== "locked") {
            setSelectedId(next.id);
            if (next.moduleId) setOpenModuleId(next.moduleId);
        }
    };

    const handleQuizPassed = async (quizId) => {
        await markQuizPassed(quizId);
        const fresh = await getFormationDetails(id);
        setFormation(fresh);

        const freshFlat = flattenTree(fresh);
        const currentIdx = freshFlat.findIndex((e) => e.id === quizId);
        const next = freshFlat[currentIdx + 1];
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
            <header className="flex h-18 shrink-0 items-center gap-4 border-b border-border bg-card px-4">
                <Sheet open={treeOpen} onOpenChange={setTreeOpen}>
                    <SheetTrigger className="lg:hidden">
                        <Menu className="h-5 w-5 text-muted-foreground" />
                    </SheetTrigger>
                    <SheetContent side="left" className="w-80 overflow-y-auto p-0">
                        <SheetTitle className="sr-only">Parcours de formation</SheetTitle>
                        <FormationTree
                            formation={formation}
                            selectedId={selectedId}
                            onSelect={(nodeId) => { handleSelect(nodeId); setTreeOpen(false); }}
                            openModuleId={openModuleId}
                            onToggleModule={handleToggleModule}
                        />
                    </SheetContent>
                </Sheet>
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
                    <img
                        src={isDark ? "/logos/mercure_logo_dark.png" : "/logos/mercure_logo_light.png"}
                        alt="Mercure"
                        className="h-10 w-auto object-contain"
                    />
                </button>

                <span className="h-6 w-px bg-muted-foreground" />

                {branding?.logoUrl && (
                    <img src={branding.logoUrl} alt={branding.name} className="h-10 w-auto rounded-xs object-contain" />
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
                <aside className="hidden w-100 shrink-0 overflow-y-auto border-r border-border bg-card lg:block">
                    <FormationTree
                        formation={formation}
                        selectedId={selectedId}
                        onSelect={handleSelect}
                        openModuleId={openModuleId}
                        onToggleModule={handleToggleModule}
                    />
                </aside>

                <main className="flex min-w-0 flex-1 flex-col bg-background">
                    {selected?.type === "ssi" || selected?.type === "validation" ? (
                        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
                            {selected?.type === "ssi" ? (
                                <SsiView
                                    deptId={id}
                                    ssi={formation.ssi}
                                    isCompleted={selected.node.status === "completed"}
                                    onAccepted={async () => {
                                        const fresh = await getFormationDetails(id);
                                        setFormation(fresh);
                                        handleSelect("validation");
                                    }}
                                />
                            ) : (
                                <ValidationView formation={formation} employee={employee} />
                            )}
                        </div>
                    ) : (
                        <div className="flex-1 overflow-y-auto">
                            <div className={
                                (selected?.type === "chapter" && ["video", "pdf", "infographic"].includes(selected?.node?.contentType))
                                    || selected?.type === "quiz" || selected?.type === "test"
                                    ? "mx-auto max-w-7xl px-6 py-6 md:px-10 md:py-10"
                                    : "mx-auto max-w-3xl px-6 py-6 md:px-10 md:py-10"
                            }>
                                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                                    {selected?.type === "quiz" ? "Évaluation" : selected?.type}
                                </p>
                                <h1 className="mt-1 mb-6 text-2xl font-bold text-foreground">
                                    {selected?.node.title ?? (
                                        selected?.type === "quiz" ? "Quiz du module"
                                            : selected?.type === "test" ? "Test final"
                                                : selected?.type
                                    )}
                                </h1>

                                {selected?.type === "chapter" && (
                                    <ChapterView
                                        key={selected.id}
                                        chapterId={selected.id}
                                        isCompleted={selected.node.status === "completed"}
                                        onMarkRead={handleMarkRead}
                                        onStateChange={handleChapterState}
                                    />
                                )}

                                {selected?.type === "quiz" && (
                                    <QuizView
                                        quizId={selected.id}
                                        isCompleted={selected.node.status === "completed"}
                                        onPassed={() => handleQuizPassed(selected.id)}
                                    />
                                )}

                                {selected?.type === "test" && (
                                    <TestRecap
                                        test={formation.test}
                                        onStart={() => navigate(`/test/${id}`)}
                                        onContinue={() => handleSelect("ssi")}
                                    />
                                )}

                                {!["chapter", "quiz", "test"].includes(selected?.type) && (
                                    <div className="rounded-sm border border-dashed border-border p-8 text-center text-muted-foreground">
                                        Contenu « {selected?.type} » - à venir
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {selected?.type === "chapter" && !chapterState.loading && (
                        <div className="flex shrink-0 items-center justify-between border-t border-border bg-card px-6 py-4 md:px-10">
                            {chapterState.canAdvance ? (
                                <span className="flex items-center gap-1 text-muted-foreground transition duration-500 ease-in-out"><Eye className="h-4 w-4" /> <span className="text-sm font-medium text-muted-foreground">0:00</span></span>
                            ) : (
                                <span className="flex items-center gap-1 text-muted-foreground transition duration-500 ease-in-out">
                                    <EyeClosed className="h-4 w-4" /> <span className="text-sm font-medium text-muted-foreground">{formatTime(chapterState.remaining)}</span>
                                </span>
                            )}
                            <button
                                type="button"
                                disabled={!chapterState.canAdvance}
                                onClick={() => handleNextChapter(selected.id)}
                                className={`flex items-center gap-1 rounded-sm px-5 py-2.5 text-sm font-medium transition ${chapterState.canAdvance
                                    ? "bg-platform-brand text-white hover:opacity-90"
                                    : "cursor-not-allowed bg-muted text-muted-foreground"
                                    }`}
                            >
                                Chapitre suivant <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}