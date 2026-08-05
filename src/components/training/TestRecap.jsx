import { useState } from "react";
import {
  AlertCircle,
  Calendar,
  Target,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { ConfirmModal } from "@/components/training/ConfirmModal";
import { TestResultCard } from "@/components/training/TestResultCard";

export function TestRecap({ test, onStart, onContinue }) {
  const [showResult, setShowResult] = useState(false);
  const {
    status,
    attemptsToday,
    maxAttemptsPerDay,
    lastScore,
    passed,
  } = test;

  const attemptsLeft = maxAttemptsPerDay - attemptsToday;

  if (status === "locked") {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/40 p-5 text-sm text-muted-foreground">
        <AlertCircle className="h-5 w-5" />
        Terminez tous les modules et leurs quiz pour débloquer le test final.
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-sm border border-gray-300">

      <div
        className="relative overflow-hidden px-8 py-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/vector-1783427992596-c5b4900384d9?q=80&w=1511&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-platform-brand/15" />
        <div className="relative z-10">
          <p className="text-sm text-black">
            Évaluation notée
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Test final
          </h1>

          <p className="mt-4 max-w-xl text-sm text-black">
            15 questions · seuil de réussite 80 % · réparties sur tous les modules.
          </p>

          {passed ? (
            <button
              onClick={onContinue}
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-platform-brand px-6 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Continuer
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : attemptsLeft <= 0 ? (
            <button
              disabled
              className="mt-8 rounded-sm bg-muted px-6 py-3 text-sm font-medium text-muted-foreground"
            >
              Tentatives épuisées
            </button>
          ) : lastScore != null ? (
            <button
              onClick={onStart}
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-platform-brand px-6 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              <RotateCcw className="h-4 w-4" />
              Réessayer
            </button>
          ) : (
            <button
              onClick={onStart}
              className="mt-8 rounded-sm bg-platform-brand px-6 py-3 text-sm font-medium text-white hover:opacity-90 cursor-pointer"
            >
              Commencer le test
            </button>
          )}
        </div>
      </div>

      <div className="grid gap-8 p-8 md:grid-cols-[1fr_280px]">

        <div className="space-y-4">
          {lastScore != null ? (
            <div
              className={`rounded-sm border p-5 ${passed
                ? "border-green-200  from-green-100 to-green-50"
                : "border-red-200 from-red-100 to-red-50 bg-danger/20"
                }`}
            >
              <h3
                className={`text-lg font-semibold text-black"
                  }`}
              >
                {passed ? "Vous avez réussi !" : "Vous avez échoué"}
              </h3>

              <p className="mt-1 text-sm text-black">
                Pour réussir, vous devez obtenir au moins 80%.
              </p>

              <div className="mt-4 flex items-center gap-4">
                <span
                  className={`text-4xl font-bold ${passed ? "text-green-700" : "text-red-700"
                    }`}
                >
                  {lastScore}%
                </span>

                <button
                  onClick={() => setShowResult(true)}
                  className="rounded-sm border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
                >
                  Voir les résultats
                </button>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                Dernière tentative
              </p>
            </div>
          ) : (
            <p className="text-sm text-black font-semibold">
              Vous devez réussir ce test pour valider votre formation.
            </p>
          )}
        </div>

        <div className="rounded-sm border border-gray-300 p-6">

          <h3 className="font-semibold text-black">
            À quoi s'attendre
          </h3>

          <div className="mt-5 space-y-4">

            <div className="flex items-center gap-3 text-sm text-black">
              <Target className="h-4 w-4" />
              {attemptsLeft}/{maxAttemptsPerDay} tentatives restantes
            </div>

            <div className="flex items-center gap-3 text-sm text-black">
              <Calendar className="h-4 w-4" />
              30 minutes chronométrées
            </div>

          </div>

        </div>

      </div>
      <ConfirmModal
        open={showResult}
        title={null}
        maxWidth="max-w-lg"
        hideFooter
      >
        {test.lastResult && (
          <div>
            <button
              onClick={() => setShowResult(false)}
              className="absolute right-5 top-5 text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
            <TestResultCard result={test.lastResult} elapsed={null} />
          </div>
        )}
      </ConfirmModal>
    </div >
  );
}