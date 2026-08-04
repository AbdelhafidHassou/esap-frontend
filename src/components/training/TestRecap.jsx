import { AlertCircle, CheckCircle2, Clock, RotateCcw, ArrowRight } from "lucide-react";

export function TestRecap({ test, onStart, onContinue }) {
  const { status, attemptsToday, maxAttemptsPerDay, lastScore, passed } = test;

  const attemptsLeft = maxAttemptsPerDay - attemptsToday;
  const noAttemptsLeft = attemptsLeft <= 0;

  // test verrouillé (quiz pas tous réussis)
  if (status === "locked") {
    return (
      <div className="flex items-center gap-3 rounded-sm border border-border bg-muted/30 p-5 text-sm text-muted-foreground">
        <AlertCircle className="h-5 w-5 shrink-0" />
        Terminez tous les modules et leurs quiz pour débloquer le test final.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Bloc infos */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-sm border border-border p-4">
          <p className="text-xs text-muted-foreground">Tentatives aujourd'hui</p>
          <p className="mt-1 text-2xl font-semibold text-foreground">
            {attemptsToday}/{maxAttemptsPerDay}
          </p>
        </div>
        <div className="rounded-sm border border-border p-4">
          <p className="text-xs text-muted-foreground">Dernier score</p>
          <p className="mt-1 text-2xl font-semibold text-foreground">
            {lastScore != null ? `${lastScore}%` : "- - -"}
          </p>
        </div>
        <div className="rounded-sm border border-border p-4">
          <p className="text-xs text-muted-foreground">Résultat</p>
          <p className={`mt-1 text-2xl font-semibold ${
            passed ? "text-success" : lastScore != null ? "text-danger" : "text-muted-foreground"
          }`}>
            {passed ? "Réussi" : lastScore != null ? "Échoué" : "- - -"}
          </p>
        </div>
      </div>

      {/* Règles */}
      <div className="rounded-sm border border-border bg-muted/20 p-4 text-sm text-muted-foreground">
        <p className="flex items-center gap-2">
          <Clock className="h-4 w-4" /> 15 questions · 30 minutes · seuil de réussite 80 % · 3 tentatives par jour
        </p>
      </div>

      {/* Bouton adapté à l'état */}
      <div>
        {passed ? (
          <button
            onClick={onContinue}
            className="flex items-center gap-2 rounded-sm bg-platform-brand px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            Continuer vers les conditions SSI <ArrowRight className="h-4 w-4" />
          </button>
        ) : noAttemptsLeft ? (
          <div className="space-y-2">
            <button
              disabled
              className="cursor-not-allowed rounded-sm bg-muted px-5 py-2.5 text-sm font-medium text-muted-foreground"
            >
              Passer le test
            </button>
            <p className="text-sm text-danger">
              Vous avez épuisé vos 3 tentatives du jour. Réessayez demain.
            </p>
          </div>
        ) : lastScore != null ? (
          <button
            onClick={onStart}
            className="flex items-center gap-2 rounded-sm bg-platform-brand px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            <RotateCcw className="h-4 w-4" /> Réessayer le test ({attemptsLeft} restante{attemptsLeft > 1 ? "s" : ""})
          </button>
        ) : (
          <button
            onClick={onStart}
            className="flex items-center gap-2 rounded-sm bg-platform-brand px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            Passer le test <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}