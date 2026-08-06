import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { startTest, submitTest } from "@/data/api";
import { useAppData } from "@/context/AppDataContext";
import { Clock, ArrowLeft, RotateCcw, X, ClipboardCheck, BookOpen } from "lucide-react";
import { ConfirmModal } from "@/components/training/ConfirmModal";
import { TestResultCard } from "@/components/training/TestResultCard";

function formatTime(s) {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
}

export default function TestFinal() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { employee } = useAppData();
    const testId = `test_${id.replace("dep_", "")}`;

    const [test, setTest] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [answers, setAnswers] = useState({});
    const [remaining, setRemaining] = useState(null);
    const [result, setResult] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [agreed, setAgreed] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [elapsed, setElapsed] = useState(0);
    const [showErrors, setShowErrors] = useState(false);

    const answersRef = useRef(answers);
    const submittedRef = useRef(false);

    useEffect(() => { answersRef.current = answers; }, [answers]);

    useEffect(() => {
        let alive = true;
        startTest(testId, id).then((data) => {
            if (!alive) return;
            if (!data || data.error) {
                setError(data?.error ?? "not_found");
                setLoading(false);
                return;
            }
            setTest(data);
            setRemaining(data.timerSeconds);
            setLoading(false);
        });
        return () => { alive = false; };
    }, [testId, id]);

    useEffect(() => {
        if (remaining === null || result) return;
        const t = setInterval(() => {
            setRemaining((r) => {
                if (r <= 1) { doSubmit(answersRef.current); return 0; }
                return r - 1;
            });
        }, 1000);
        return () => clearInterval(t);
    }, [result]);

    const toggleOption = (q, optionId) => {
        setAnswers((prev) => {
            const given = prev[q.id] ?? [];
            if (q.type === "single") return { ...prev, [q.id]: [optionId] };
            return {
                ...prev,
                [q.id]: given.includes(optionId) ? given.filter((x) => x !== optionId) : [...given, optionId],
            };
        });
    };

    const handleTrySubmit = () => {
        const allAnswered = test.questions.every((q) => (answers[q.id] ?? []).length > 0);
        if (!allAnswered) { setShowErrors(true); return; }
        setConfirmOpen(true);
    };

    async function doSubmit(finalAnswers) {
        if (submittedRef.current) return;
        setElapsed(test.timerSeconds - remaining);
        submittedRef.current = true;
        setSubmitting(true);
        const res = await submitTest(testId, id, test.attemptNumber, finalAnswers);
        setResult(res);
        setSubmitting(false);
    }

    function handleRetry() {
        submittedRef.current = false;
        setResult(null);
        setAnswers({});
        setAgreed(false);
        setShowErrors(false);
        setLoading(true);
        startTest(testId, id).then((data) => {
            if (!data || data.error) { setError(data?.error ?? "not_found"); setLoading(false); return; }
            setTest(data);
            setRemaining(data.timerSeconds);
            setLoading(false);
        });
    }

    const answeredCount = useMemo(
        () => (test ? test.questions.filter((q) => (answers[q.id] ?? []).length > 0).length : 0),
        [test, answers]
    );

    if (loading) return <div className="grid h-screen place-items-center">Chargement du test…</div>;

    if (error === "no_attempts_left") {
        return (
            <div className="grid h-screen place-items-center p-6 text-center">
                <div>
                    <p className="text-lg font-semibold text-danger">Tentatives épuisées</p>
                    <p className="mt-2 text-sm text-muted-foreground">Vous avez utilisé vos 3 tentatives du jour. Réessayez demain.</p>
                    <button onClick={() => navigate(`/formation/${id}`)} className="mt-4 rounded-sm bg-platform-brand px-5 py-2.5 text-sm font-medium text-white">
                        Retour à la formation
                    </button>
                </div>
            </div>
        );
    }

    if (error) return <div className="grid h-screen place-items-center p-6">Test introuvable.</div>;

    const lowTime = remaining <= 60;
    return (
        <div className="min-h-screen bg-background">
            <header className="sticky top-0 z-10 h-18 flex items-center justify-between border-b border-border bg-card px-4 py-3 md:px-8">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate(`/formation/${id}`)}
                        className="flex items-center gap-1 text-sm font-medium text-platform-brand hover:opacity-80"
                    >
                        <ArrowLeft className="h-4 w-4" /> Retour
                    </button>
                    <span className="h-6 w-px bg-border" />
                    <div>
                        <p className="text-sm font-semibold text-foreground">Test final</p>
                        <p className="text-xs text-muted-foreground">Évaluation notée · 30 min</p>
                    </div>
                </div>
                <div className={`flex items-center gap-2 rounded-sm px-3 py-1.5 text-sm font-semibold ${lowTime ? "bg-danger/10 text-danger" : "bg-muted text-foreground"}`}>
                    <Clock className="h-4 w-4" /> {formatTime(remaining)}
                </div>
            </header>

            <div className="mx-auto max-w-5xl p-4 md:p-8">
                <p className="mb-6 text-sm text-muted-foreground">
                    {test.questions.length} questions · répondez à toutes · un seul envoi · seuil de réussite 80%
                </p>

                <div className="space-y-10">
                    {test.questions.map((q, qi) => (
                        <div key={q.id}>
                            <div className="flex items-start justify-between gap-4 text-lg">
                                <p className="font-medium text-foreground">{qi + 1}. {q.text}</p>
                                <span className="shrink-0 rounded-full bg-muted px-4 py-1 text-sm font-semibold text-muted-foreground">1 point</span>
                            </div>
                            {q.type === "multiple" && (
                                <p className="mt-1 text-md text-muted-foreground">Plusieurs réponses possibles</p>
                            )}
                            <div className="mt-5 flex flex-col gap-1">
                                {q.options.map((o) => {
                                    const isSel = (answers[q.id] ?? []).includes(o.id);
                                    return (
                                        <label
                                            key={o.id}
                                            onClick={() => toggleOption(q, o.id)}
                                            className="flex cursor-pointer items-center gap-3 py-2 text-md"
                                        >
                                            <span className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border-2 ${isSel ? "border-platform-brand" : "border-border-strong"
                                                }`}>
                                                {isSel && <span className="h-2 w-2 rounded-full bg-platform-brand" />}
                                            </span>
                                            <span>{o.text}</span>
                                        </label>
                                    );
                                })}
                            </div>
                            {showErrors && (answers[q.id] ?? []).length === 0 && (
                                <p className="mt-2 text-sm text-danger">Cette question requiert une réponse.</p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-10 border-t border-border pt-6">
                    <p className="text-lg font-medium text-foreground">Engagement d'intégrité</p>
                    <p className="mt-1 text-md text-muted-foreground">
                        En validant, vous confirmez avoir répondu seul, sans aide extérieure.
                    </p>
                    <label className="mt-3 flex cursor-pointer items-center gap-2 text-md">
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="h-4 w-4 accent-platform-brand"
                        />
                        <span>Moi, <span className="font-bold">{employee?.firstName} {employee?.lastName}</span>, je comprends et j'accepte.</span>
                    </label>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
                    <span className="text-sm text-muted-foreground">
                        {answeredCount}/{test.questions.length} répondues
                    </span>
                    <button
                        onClick={handleTrySubmit}
                        disabled={submitting || !agreed}
                        className="rounded-sm bg-platform-brand px-6 py-2.5 text-sm font-medium text-white hover:opacity-90 disabled:opacity-60"
                    >
                        {submitting ? "Envoi…" : "Terminer le test"}
                    </button>
                </div>
                <ConfirmModal
                    open={confirmOpen}
                    title="Prêt à soumettre ?"
                    confirmLabel="Soumettre"
                    onConfirm={() => { setConfirmOpen(false); doSubmit(answers); }}
                    onCancel={() => setConfirmOpen(false)}
                >
                    <p className="text-sm text-muted-foreground">
                        Votre tentative sera enregistrée. Cette action est définitive.
                    </p>
                </ConfirmModal>
                <ConfirmModal
                    open={!!result}
                    title={null}
                    maxWidth="max-w-lg"
                    hideFooter
                >
                    {result && (
                        <div>
                            <button
                                onClick={() => navigate(`/formation/${id}`)}
                                className="absolute right-5 top-5 text-muted-foreground hover:text-foreground"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <TestResultCard result={result} elapsed={elapsed} />

                            <div className="mt-6 space-y-3">
                                {!result.passed && (
                                    <button
                                        onClick={handleRetry}
                                        className="flex w-full items-center justify-center gap-2 rounded-sm bg-platform-brand px-6 py-3 text-sm font-medium text-white hover:opacity-90 cursor-pointer"
                                    >
                                        <RotateCcw className="h-4 w-4" /> Recommencer le test
                                    </button>
                                )}
                                <button
                                    onClick={() => navigate(`/formation/${id}`)}
                                    className="w-full px-6 py-3 text-sm font-medium text-platform-brand hover:text-platform-brand/80 cursor-pointer"
                                >
                                    Retour à la formation
                                </button>
                            </div>
                        </div>
                    )}
                </ConfirmModal>
            </div>
        </div>
    );
}