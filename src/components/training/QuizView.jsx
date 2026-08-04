import { useEffect, useState, useRef } from "react";
import { getQuiz, submitQuiz } from "@/data/api";
import { CheckCircle2, XCircle, RotateCcw, ArrowRight, ArrowLeft, Clock, Check } from "lucide-react";

const LETTERS = ["A", "B", "C", "D", "E", "F"];
const QUIZ_DURATION = 300; 

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

function TimerRing({ remaining, total }) {
  const pct = remaining / total;
  const r = 34;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct);
  const low = remaining <= 30;
  return (
    <div className="relative flex h-24 w-24 items-center justify-center">
      <svg className="h-24 w-24 -rotate-90" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r={r} fill="none" stroke="currentColor" strokeWidth="6" className="text-muted" />
        <circle
          cx="40" cy="40" r={r} fill="none" strokeWidth="6" strokeLinecap="round"
          className={low ? "text-danger" : "text-platform-brand"}
          stroke="currentColor"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1s linear" }}
        />
      </svg>
      <span className={`absolute text-lg font-semibold ${low ? "text-danger" : "text-foreground"}`}>
        {formatTime(remaining)}
      </span>
    </div>
  );
}

export function QuizView({ quizId, isCompleted, onPassed }) {
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [phase, setPhase] = useState("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [remaining, setRemaining] = useState(QUIZ_DURATION);
  const answersRef = useRef(answers); 

  useEffect(() => { answersRef.current = answers; }, [answers]);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setPhase(isCompleted ? "result" : "intro");
    getQuiz(quizId).then((data) => {
      if (!alive) return;
      setQuiz(data);
      setLoading(false);
    });
    return () => { alive = false; };
  }, [quizId, isCompleted]);

  useEffect(() => {
    if (phase !== "answering") return;
    if (remaining <= 0) {
      doSubmit(answersRef.current); 
      return;
    }
    const t = setInterval(() => setRemaining((r) => (r <= 1 ? 0 : r - 1)), 1000);
    return () => clearInterval(t);
  }, [phase, remaining]);

  if (loading) return <p className="text-sm text-muted-foreground">Chargement du quiz…</p>;
  if (!quiz) return <p className="text-sm text-muted-foreground">Quiz introuvable.</p>;

  if (isCompleted && !result) {
    return (
      <div className="flex items-center gap-2 rounded-sm border border-success/30 bg-success/10 p-4 text-sm font-medium text-success">
        <CheckCircle2 className="h-5 w-5" /> Quiz déjà réussi
      </div>
    );
  }

  const questions = quiz.questions;
  const q = questions[current];

  const toggleOption = (optionId) => {
    setAnswers((prev) => {
      const given = prev[q.id] ?? [];
      if (q.type === "single") return { ...prev, [q.id]: [optionId] };
      return {
        ...prev,
        [q.id]: given.includes(optionId)
          ? given.filter((x) => x !== optionId)
          : [...given, optionId],
      };
    });
  };

  const isAnswered = (qq) => (answers[qq.id] ?? []).length > 0;
  const allAnswered = questions.every(isAnswered);

  async function doSubmit(finalAnswers) {
    const res = await submitQuiz(quizId, finalAnswers);
    setResult(res);
    setPhase("result");
    if (res.passed) onPassed?.();
  }

  const handleRetry = () => {
    setAnswers({});
    setResult(null);
    setCurrent(0);
    setRemaining(QUIZ_DURATION);
    setPhase("answering");
  };

  if (phase === "intro") {
    return (
      <div className="rounded-sm border border-border p-6">
        <p className="text-sm text-muted-foreground">
          {questions.length} questions · {Math.floor(QUIZ_DURATION / 60)} min · réussite à 100 % requise.
        </p>
        <button
          onClick={() => setPhase("answering")}
          className="mt-4 rounded-sm bg-platform-brand text-white px-5 py-2.5 text-sm font-medium  hover:opacity-90"
        >
          Commencer le quiz
        </button>
      </div>
    );
  }

  if (phase === "result" && result) {
    const byQuestion = Object.fromEntries(result.results.map((r) => [r.questionId, r]));
    return (
      <div className="space-y-6">
        <div className={`rounded-sm border p-5 ${result.passed ? "border-success/30 bg-success/10" : "border-danger/30 bg-danger/10"}`}>
          <p className={`text-lg font-semibold ${result.passed ? "text-success" : "text-danger"}`}>
            {result.passed ? "Quiz réussi !" : "Quiz échoué"}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Score : {result.score}% ({result.correctCount}/{result.total})
          </p>
        </div>
        <div className="space-y-4">
          {questions.map((qq, i) => {
            const r = byQuestion[qq.id];
            return (
              <div key={qq.id} className="rounded-sm border border-border p-4">
                <div className="flex items-start gap-2">
                  {r.correct
                    ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    : <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-danger" />}
                  <p className="text-md font-semibold">{i + 1}. {qq.text}</p>
                </div>
                {!r.correct && r.hint && (
                  <p className="mt-2 ml-7 text-sm text-muted-foreground">{r.hint}</p>
                )}
              </div>
            );
          })}
        </div>
        {!result.passed && (
          <button
            onClick={handleRetry}
            className="flex items-center gap-2 rounded-sm text-white bg-platform-brand px-5 py-2.5 text-sm font-medium  hover:opacity-90"
          >
            <RotateCcw className="h-4 w-4" /> Recommencer le quiz
          </button>
        )}
      </div>
    );
  }

  const given = answers[q.id] ?? [];
  const isLast = current === questions.length - 1;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_260px]">
      
      <div className="space-y-6">
        <p className="text-base font-medium text-foreground">{q.text}</p>
        {q.type === "multiple" && (
          <p className="text-xs text-muted-foreground">Plusieurs réponses possibles</p>
        )}

        <div className="flex flex-col gap-3">
          {q.options.map((o, i) => {
            const selected = given.includes(o.id);
            return (
              <button
                key={o.id}
                onClick={() => toggleOption(o.id)}
                className={`flex items-center gap-4 rounded-sm border p-4 text-left text-sm transition ${
                  selected ? "border-platform-brand bg-platform-brand/5" : "border-border hover:bg-muted/50"
                }`}
              >
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border text-sm font-semibold ${
                  selected ? "border-platform-brand bg-platform-brand text-white" : "border-border text-muted-foreground"
                }`}>
                  {LETTERS[i]}
                </span>
                <span className="flex-1">{o.text}</span>
                {selected && <CheckCircle2 className="h-5 w-5 shrink-0 text-platform-brand" />}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between border-t border-border pt-4">
          <button
            onClick={() => setCurrent((c) => c - 1)}
            disabled={current === 0}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" /> Précédent
          </button>
          {isLast ? (
            <button
              onClick={() => doSubmit(answers)}
              disabled={!allAnswered}
              className={`rounded-sm px-5 py-2.5 text-sm font-medium transition ${
                allAnswered ? "bg-platform-brand text-white  hover:opacity-90" : "cursor-not-allowed bg-muted text-muted-foreground"
              }`}
            >
              Terminer le quiz
            </button>
          ) : (
            <button
              onClick={() => setCurrent((c) => c + 1)}
              disabled={given.length === 0}
              className="flex items-center gap-1 rounded-sm bg-platform-brand text-white px-4 py-2 text-sm font-medium  hover:opacity-90 disabled:opacity-40"
            >
              Suivant <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <aside className="space-y-4">
        <div className="flex flex-col items-center rounded-sm border border-border p-4">
          <TimerRing remaining={remaining} total={QUIZ_DURATION} />
          <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" /> Temps restant
          </p>
        </div>

        <div className="rounded-sm border border-border p-3">
          <p className="mb-2 px-1 text-xs font-medium text-muted-foreground">Questions</p>
          <div className="flex flex-col gap-1">
            {questions.map((qq, i) => {
              const active = i === current;
              const done = isAnswered(qq);
              return (
                <button
                  key={qq.id}
                  onClick={() => setCurrent(i)}
                  className={`flex items-center justify-between rounded-sm px-3 py-2 text-left text-sm transition ${
                    active ? "bg-platform-brand/10 font-medium text-platform-brand" : "hover:bg-muted/50"
                  }`}
                >
                  <span>Question {i + 1}</span>
                  {done && <Check className={`h-4 w-4 ${active ? "text-platform-brand" : "text-success"}`} />}
                </button>
              );
            })}
          </div>
        </div>
      </aside>
    </div>
  );
}