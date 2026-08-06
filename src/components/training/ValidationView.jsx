import { useNavigate } from "react-router-dom";
import { Award } from "lucide-react";

export function ValidationView({ formation, employee }) {
    const navigate = useNavigate();
    const { department, modules, test } = formation;
    const modulesDone = modules.filter((m) => m.status === "completed").length;

    return (
        <div className="flex h-full w-full flex-1 flex-col">
            <div className="relative flex h-78 shrink-0 items-end justify-center overflow-visible bg-linear-to-br from-platform-brand/70 to-platform-brand">
                <img
                    src="/illustrations/medal.png"
                    alt=""
                    className="relative -bottom-30 h-60 w-60 object-contain"
                />
                <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
                    <circle cx="8%" cy="15%" r="4" fill="#FAC775" />
                    <rect x="15%" y="8%" width="7" height="7" fill="#F0997B" transform="rotate(20)" />
                    <circle cx="22%" cy="28%" r="3" fill="#FDE68A" />
                    <rect x="30%" y="12%" width="6" height="6" fill="#9FE1CB" transform="rotate(45)" />
                    <circle cx="40%" cy="10%" r="4" fill="#F4C0D1" />
                    <rect x="52%" y="20%" width="7" height="7" fill="#FAC775" transform="rotate(15)" />
                    <circle cx="63%" cy="9%" r="3" fill="#9FE1CB" />
                    <rect x="72%" y="25%" width="6" height="6" fill="#F0997B" transform="rotate(60)" />
                    <circle cx="82%" cy="14%" r="4" fill="#F4C0D1" />
                    <rect x="90%" y="10%" width="7" height="7" fill="#FDE68A" transform="rotate(30)" />
                    <circle cx="5%" cy="80%" r="3" fill="#9FE1CB" />
                    <rect x="18%" y="88%" width="6" height="6" fill="#FAC775" transform="rotate(50)" />
                    <circle cx="35%" cy="92%" r="4" fill="#F4C0D1" />
                    <rect x="60%" y="85%" width="7" height="7" fill="#9FE1CB" transform="rotate(10)" />
                    <circle cx="78%" cy="90%" r="3" fill="#FDE68A" />
                    <rect x="95%" y="82%" width="6" height="6" fill="#F0997B" transform="rotate(40)" />
                    <circle cx="8%" cy="15%" r="4" fill="#FAC775" />
                    <rect x="15%" y="8%" width="7" height="7" fill="#F0997B" transform="rotate(20)" />
                    <circle cx="22%" cy="28%" r="3" fill="#FDE68A" />
                    <rect x="30%" y="12%" width="6" height="6" fill="#9FE1CB" transform="rotate(45)" />
                    <circle cx="40%" cy="10%" r="4" fill="#F4C0D1" />
                    <rect x="52%" y="20%" width="7" height="7" fill="#FAC775" transform="rotate(15)" />
                    <circle cx="63%" cy="9%" r="3" fill="#9FE1CB" />
                    <rect x="72%" y="25%" width="6" height="6" fill="#F0997B" transform="rotate(60)" />
                    <circle cx="82%" cy="14%" r="4" fill="#F4C0D1" />
                    <rect x="90%" y="10%" width="7" height="7" fill="#FDE68A" transform="rotate(30)" />
                    <circle cx="5%" cy="80%" r="3" fill="#9FE1CB" />
                    <rect x="18%" y="88%" width="6" height="6" fill="#FAC775" transform="rotate(50)" />
                    <circle cx="35%" cy="92%" r="4" fill="#F4C0D1" />
                    <rect x="60%" y="85%" width="7" height="7" fill="#9FE1CB" transform="rotate(10)" />
                    <circle cx="78%" cy="90%" r="3" fill="#FDE68A" />
                    <rect x="95%" y="82%" width="6" height="6" fill="#F0997B" transform="rotate(40)" />
                </svg>
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

                <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
                    <circle cx="8%" cy="15%" r="4" fill="#FAC775" />
                    <rect x="15%" y="8%" width="7" height="7" fill="#F0997B" transform="rotate(20)" />
                    <circle cx="22%" cy="28%" r="3" fill="#FDE68A" />
                    <rect x="30%" y="12%" width="6" height="6" fill="#9FE1CB" transform="rotate(45)" />
                    <circle cx="40%" cy="10%" r="4" fill="#F4C0D1" />
                    <rect x="52%" y="20%" width="7" height="7" fill="#FAC775" transform="rotate(15)" />
                    <circle cx="63%" cy="9%" r="3" fill="#9FE1CB" />
                    <rect x="72%" y="25%" width="6" height="6" fill="#F0997B" transform="rotate(60)" />
                    <circle cx="82%" cy="14%" r="4" fill="#F4C0D1" />
                    <rect x="90%" y="10%" width="7" height="7" fill="#FDE68A" transform="rotate(30)" />
                    <circle cx="5%" cy="80%" r="3" fill="#9FE1CB" />
                    <rect x="18%" y="88%" width="6" height="6" fill="#FAC775" transform="rotate(50)" />
                    <circle cx="35%" cy="92%" r="4" fill="#F4C0D1" />
                    <rect x="60%" y="85%" width="7" height="7" fill="#9FE1CB" transform="rotate(10)" />
                    <circle cx="78%" cy="90%" r="3" fill="#FDE68A" />
                    <rect x="95%" y="82%" width="6" height="6" fill="#F0997B" transform="rotate(40)" />
                </svg>
            </div>
        </div>
    );
}