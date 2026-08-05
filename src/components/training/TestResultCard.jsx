import { ClipboardCheck, Clock, BookOpen } from "lucide-react";

function formatTime(s) {
  if (s == null) return "—";
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export function TestResultCard({ result, elapsed }) {
  return (
    <div>
      <div className="flex flex-col items-center gap-6 sm:flex-row">
        <svg viewBox="0 0 120 120" className="h-32 w-32 shrink-0">
          <circle cx="60" cy="60" r="52" fill="none" stroke="var(--muted)" strokeWidth="10" />
          <circle
            cx="60" cy="60" r="52" fill="none"
            stroke={result.passed ? "var(--success)" : "var(--danger)"}
            strokeWidth="10" strokeLinecap="round"
            strokeDasharray={`${(result.score / 100) * 2 * Math.PI * 52} ${2 * Math.PI * 52}`}
            transform="rotate(-90 60 60)"
          />
          <text x="60" y="56" textAnchor="middle" className="fill-foreground text-2xl font-bold">{result.score}%</text>
          <text x="60" y="76" textAnchor="middle" className="fill-muted-foreground text-[10px]">Score obtenu</text>
        </svg>

        <div>
          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium ${result.passed ? "bg-success/10 text-success" : "bg-danger/10 text-danger"}`}>
            {result.passed ? "Test réussi" : "Test échoué"}
          </span>
          <p className="mt-2 text-lg font-bold text-foreground">
            {result.passed ? "Vous avez validé ce test." : "Vous n'avez pas validé ce test."}
          </p>
          <p className="text-sm text-muted-foreground">
            Vous devez obtenir au moins 80% pour valider cette formation.
          </p>

          <div className="mt-4 flex gap-3">
            <div className="flex items-center gap-2 rounded-sm bg-muted px-3 py-2">
              <ClipboardCheck className="h-5 w-5 text-platform-brand" />
              <div>
                <p className="text-sm font-semibold text-foreground">{result.totalCorrect} / {result.totalQuestions}</p>
                <p className="text-xs text-muted-foreground">Bonnes réponses</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-sm bg-muted px-3 py-2">
              <Clock className="h-5 w-5 text-warning" />
              <div>
                <p className="text-sm font-semibold text-foreground">{formatTime(elapsed)}</p>
                <p className="text-xs text-muted-foreground">Durée du test</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <p className="mb-3 text-sm font-semibold text-foreground">Résultats par module</p>
        <div className="space-y-1">
          {Object.entries(result.perModule).map(([mid, r]) => {
            const pct = Math.round((r.correct / r.total) * 100);
            const tone = pct === 0 ? "muted" : pct >= 80 ? "success" : "warning";
            return (
              <div key={mid} className="flex items-center gap-3 rounded-sm px-2 py-2">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-sm ${
                  tone === "success" ? "bg-success/10 text-success" : tone === "warning" ? "bg-warning/10 text-warning" : "bg-muted text-muted-foreground"
                }`}>
                  <BookOpen className="h-4 w-4" />
                </span>
                <span className="w-20 shrink-0 text-sm text-foreground">{mid.replace("mod_it_", "Module ")}</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                  <div className={`h-full rounded-full ${
                    tone === "success" ? "bg-success" : tone === "warning" ? "bg-warning" : "bg-muted-foreground/30"
                  }`} style={{ width: `${pct}%` }} />
                </div>
                <span className={`w-12 shrink-0 text-right text-sm font-medium ${
                  tone === "success" ? "text-success" : tone === "warning" ? "text-warning" : "text-muted-foreground"
                }`}>{pct}%</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}