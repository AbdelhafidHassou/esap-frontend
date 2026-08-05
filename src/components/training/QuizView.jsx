import { useEffect, useState } from "react";
import { getQuiz, submitAnswer } from "@/data/api";
import { CheckCircle2, XCircle, RotateCcw, ArrowRight } from "lucide-react";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

export function QuizView({ quizId, isCompleted, onPassed }) {
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [phase, setPhase] = useState("intro");     // intro | answering | done
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState([]);    // réponses de la question courante
  const [feedback, setFeedback] = useState(null);  // {correct, correctIds, hint} après validation
  const [results, setResults] = useState([]);      // historique {correct} par question

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setPhase(isCompleted ? "done-passed" : "intro");
    getQuiz(quizId).then((data) => {
      if (!alive) return;
      setQuiz(data);
      setLoading(false);
    });
    return () => { alive = false; };
  }, [quizId, isCompleted]);

  if (loading) return <p className="text-sm text-muted-foreground">Chargement du quiz…</p>;
  if (!quiz) return <p className="text-sm text-muted-foreground">Quiz introuvable.</p>;

  // déjà réussi au chargement
  if (phase === "done-passed") {
    return (
      <div className="flex items-center gap-2 rounded-sm border border-success/30 bg-success/10 p-4 text-sm font-medium text-success">
        <CheckCircle2 className="h-5 w-5" /> Quiz déjà réussi
      </div>
    );
  }

  const questions = quiz.questions;
  const q = questions[current];

  const toggleOption = (optionId) => {
    if (feedback) return; // figé après validation
    setSelected((prev) => {
      if (q.type === "single") return [optionId];
      return prev.includes(optionId) ? prev.filter((x) => x !== optionId) : [...prev, optionId];
    });
  };

  const handleValidate = async () => {
    const fb = await submitAnswer(quizId, q.id, selected);
    setFeedback(fb);
    setResults((r) => [...r, { correct: fb.correct }]);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected([]);
      setFeedback(null);
    } else {
      setPhase("done");
    }
  };

  const handleRetry = () => {
    setCurrent(0);
    setSelected([]);
    setFeedback(null);
    setResults([]);
    setPhase("answering");
  };

  if (phase === "intro") {
    return (
      <div className="rounded-sm border border-border p-6">
        <p className="text-sm text-muted-foreground">
          {questions.length} questions · réussite à 100 % requise · pas de retour en arrière.
        </p>
        <button
          onClick={() => setPhase("answering")}
          className="mt-4 rounded-sm bg-platform-brand px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
        >
          Commencer le quiz
        </button>
      </div>
    );
  }

  if (phase === "done") {
    const correctCount = results.filter((r) => r.correct).length;
    const total = questions.length;
    const score = Math.round((correctCount / total) * 100);
    const passed = score === 100;
    return (
      <div className="space-y-6">
        <div className={`rounded-sm border p-5 ${passed ? "border-success/30 bg-success/10" : "border-danger/30 bg-danger/10"}`}>
          <p className={`text-lg font-semibold ${passed ? "text-success" : "text-danger"}`}>
            {passed ? "Quiz réussi !" : "Quiz échoué"}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Score : {score}% ({correctCount}/{total} bonnes réponses)
          </p>
        </div>

        {passed ? (
          <button
            onClick={() => onPassed?.()}
            className="flex items-center gap-2 rounded-sm bg-platform-brand px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            Passer au module suivant <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={handleRetry}
            className="flex items-center gap-2 rounded-sm bg-platform-brand px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            <RotateCcw className="h-4 w-4" /> Recommencer le quiz
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="shrink-0 text-xs text-muted-foreground">
          Question {current + 1} / {questions.length}
        </span>
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-platform-brand transition-all"
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <p className="text-base font-medium text-foreground">{q.text}</p>
      {q.type === "multiple" && (
        <p className="text-xs text-muted-foreground">Plusieurs réponses possibles</p>
      )}

      <div className="flex flex-col gap-3">
        {q.options.map((o, i) => {
          const isSel = selected.includes(o.id);
          const isCorrectOpt = feedback?.correctIds?.includes(o.id);
          const wasSelectedWrong = feedback && isSel && !isCorrectOpt;

          let cls = "border-border hover:bg-muted/50";
          if (feedback) {
            if (isCorrectOpt) cls = "border-success bg-success/10";
            else if (wasSelectedWrong) cls = "border-danger bg-danger/10";
            else cls = "border-border opacity-60";
          } else if (isSel) {
            cls = "border-platform-brand bg-platform-brand/5";
          }

          return (
            <button
              key={o.id}
              onClick={() => toggleOption(o.id)}
              disabled={!!feedback}
              className={`flex items-center gap-4 rounded-sm border p-4 text-left text-sm transition ${cls}`}
            >
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border text-sm font-semibold ${
                isSel && !feedback ? "border-platform-brand bg-platform-brand text-white" : "border-border text-muted-foreground"
              }`}>
                {LETTERS[i]}
              </span>
              <span className="flex-1">{o.text}</span>
              {feedback && isCorrectOpt && <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />}
              {wasSelectedWrong && <XCircle className="h-5 w-5 shrink-0 text-danger" />}
            </button>
          );
        })}
      </div>

      {feedback && !feedback.correct && feedback.hint && (
        <div className="rounded-sm border border-danger/30 bg-danger/5 p-4 text-sm text-foreground/80">
          <span className="font-medium text-danger">Réponse incorrecte. </span>
          {feedback.hint}
        </div>
      )}
      {feedback && feedback.correct && (
        <div className="rounded-sm border border-success/30 bg-success/5 p-4 text-sm font-medium text-success">
          Bonne réponse !
        </div>
      )}

      {/* action */}
      <div className="flex justify-end border-t border-border pt-4">
        {!feedback ? (
          <button
            onClick={handleValidate}
            disabled={selected.length === 0}
            className={`rounded-sm px-5 py-2.5 text-sm font-medium transition ${
              selected.length > 0 ? "bg-platform-brand text-white hover:opacity-90" : "cursor-not-allowed bg-muted text-muted-foreground"
            }`}
          >
            Valider
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex items-center gap-1 rounded-sm bg-platform-brand px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            {current < questions.length - 1 ? "Question suivante" : "Voir mes résultats"} <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}