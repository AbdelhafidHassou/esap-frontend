import { useNavigate } from "react-router-dom";
import { Award } from "lucide-react";

export function ValidationView({ formation, employee }) {
    const navigate = useNavigate();
    const { department, modules, test } = formation;
    const modulesDone = modules.filter((m) => m.status === "completed").length;

    return (
        <div className="flex h-full w-full flex-1 flex-col">
            <div className="relative flex h-92 shrink-0 items-end justify-center overflow-visible bg-linear-to-br from-platform-brand/70 to-platform-brand">
                <div className="pointer-events-none absolute inset-1 overflow-hidden">
                    <img
                        src="/illustrations/confetti.png"
                        alt=""
                        className="h-200 w-full object-cover opacity-80"
                    />
                </div>
                <img
                    src="/illustrations/medal.png"
                    alt=""
                    className="relative z-10 -bottom-30 h-58 w-60 object-contain"
                />
            </div>

            <div className="flex flex-1 flex-col items-center px-4 pb-10 pt-16 mt-18">
                <h1 className="mb-3 text-3xl font-semibold text-foreground">
                    Félicitations, {employee?.firstName}
                </h1>
                <p className="mb-8 max-w-lg text-center text-base leading-relaxed text-muted-foreground">
                    Vous avez validé la formation {department.name}. Un e-mail de confirmation a été envoyé à {employee?.email}.
                </p>

                <div className="mb-8 flex gap-16 border-y border-border py-5">
                    <div className="text-center">
                        <p className="text-3xl font-semibold text-foreground">{modulesDone}/{modules.length}</p>
                        <p className="mt-1.5 text-xs uppercase tracking-wide text-muted-foreground">Modules</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-semibold text-success">{test.lastScore}%</p>
                        <p className="mt-1.5 text-xs uppercase tracking-wide text-muted-foreground">Score au test</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-semibold text-foreground">{test.attemptsToday}</p>
                        <p className="mt-1.5 text-xs uppercase tracking-wide text-muted-foreground">Tentative{test.attemptsToday > 1 ? "s" : ""}</p>
                    </div>
                </div>

                <button
                    onClick={() => navigate("/dashboard")}
                    className="rounded-sm bg-platform-brand px-8 py-3 text-sm font-medium text-white hover:opacity-90"
                >
                    Retour au tableau de bord
                </button>
            </div>
        </div>
    );
}