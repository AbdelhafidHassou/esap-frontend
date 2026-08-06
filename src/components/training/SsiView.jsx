import { useEffect, useState } from "react";
import { CircleCheck, ExternalLink } from "lucide-react";
import { openSsiDocument, acceptSsi } from "@/data/api";

export function SsiView({ deptId, ssi, isCompleted, onAccepted }) {
    const [documents, setDocuments] = useState(ssi.documents);
    const [activeId, setActiveId] = useState(ssi.documents[0]?.id ?? null);
    const [submitting, setSubmitting] = useState(false);
    const [agreed, setAgreed] = useState(isCompleted);

    const allOpened = documents.every((d) => d.opened);
    const active = documents.find((d) => d.id === activeId);

    useEffect(() => {
        if (active && !active.opened) {
            openSsiDocument(deptId, activeId);
            setDocuments((prev) => 
                prev.map((d) => (d.id === active.id ? {...d, opened: true} : d))
            );
        }
    });

    const handleSelect = async (doc) => {
        setActiveId(doc.id);
        if (!doc.opened) {
            await openSsiDocument(deptId, doc.id);
            setDocuments((prev) =>
                prev.map((d) => (d.id === doc.id ? { ...d, opened: true } : d))
            );
        }
    };

    const handleAccept = async () => {
        setSubmitting(true);
        await acceptSsi(deptId);
        setSubmitting(false);
        onAccepted();
    };


    return (
        <div className="flex h-full w-full flex-col overflow-hidden bg-card">
            <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
                <aside className="hidden w-72 shrink-0 flex-col overflow-y-auto border-r border-border px-6 py-5 lg:flex">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">SSI</p>
                    <h2 className="mt-1 text-lg font-semibold text-foreground">Conditions SSI</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Consultez les documents avant de pouvoir accepter les conditions.
                    </p>

                    <div className="mt-6 -mx-6">
                        {documents.map((doc, i) => (
                            <button
                                key={doc.id}
                                onClick={() => handleSelect(doc)}
                                className={`flex w-full items-center gap-3 border-l-2 px-6 py-3 text-left transition ${activeId === doc.id
                                    ? "border-platform-brand bg-muted/60"
                                    : "border-transparent hover:bg-muted/30"
                                    }`}
                            >
                                <span className={`text-sm font-medium ${activeId === doc.id ? "text-platform-brand" : "text-muted-foreground"}`}>
                                    {i + 1}.
                                </span>
                                <span className={`flex-1 text-sm ${activeId === doc.id ? "font-medium text-platform-brand" : "text-foreground"}`}>
                                    {doc.title}
                                </span>
                                {doc.opened ? (
                                    <CircleCheck className="h-5 w-5 shrink-0 fill-platform-brand text-white" />
                                ) : (
                                    <span className="h-5 w-5 shrink-0 rounded-full border-2 border-border" />
                                )}
                            </button>
                        ))}
                    </div>
                </aside>

                <div className="flex gap-1.5 overflow-x-auto border-b border-border px-4 py-2.5 lg:hidden">
                    {documents.map((doc) => (
                        <button
                            key={doc.id}
                            onClick={() => handleSelect(doc)}
                            className={`flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium ${doc.opened ? "bg-platform-brand/10 text-platform-brand" : "bg-muted text-muted-foreground"
                                }`}
                        >
                            {doc.opened && <CircleCheck className="h-3 w-3" />}
                            {doc.title.split(" ")[0]}
                        </button>
                    ))}
                </div>

                <div className="min-w-0 flex-1 overflow-y-auto px-4 py-5 md:px-8 md:py-6">
                    {active && (
                        <>
                            <h2 className="mb-3 text-lg font-bold text-foreground md:text-xl">{active.title}</h2>

                            {active.docType === "pdf" && active.url ? (
                                <iframe
                                    src={active.url}
                                    title={active.title}
                                    className="h-[calc(100vh-320px)] w-full rounded-sm border border-border"
                                />
                            ) : (
                                <div>
                                    <a
                                        href={active.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex gap-2 items-center justify-center sm:w-xs lg:w-sm text-sm rounded-sm border border-border p-4 bg-platform-brand hover:bg-platform-brand/90 font-medium text-white transition-all duration-300 ease-in-out"
                                    >
                                        Ouvrir le document dans un nouvel onglet <ExternalLink className="h-4 w-4 text-white"/>
                                    </a>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            <div className="flex shrink-0 flex-col gap-3 border-t border-border bg-card px-6 py-4 md:flex-row md:items-center md:justify-between md:px-8">
                <label className={`flex items-center gap-2 text-sm ${!isCompleted && allOpened ? "cursor-pointer text-foreground" : "cursor-not-allowed text-muted-foreground"}`}>
                    <input
                        type="checkbox"
                        disabled={isCompleted || !allOpened}
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="h-4 w-4"
                    />
                    J'ai lu et j'accepte les conditions SSI.
                </label>
                <button
                    onClick={handleAccept}
                    disabled={isCompleted || !agreed || submitting}
                    className="shrink-0 rounded-sm bg-platform-brand px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 disabled:opacity-50"
                >
                    {isCompleted ? "Condition acceptée" : submitting ? "Validation…" : "Valider ma formation"}
                </button>
            </div>
        </div >
    );
}