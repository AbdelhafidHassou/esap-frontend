import { useEffect, useState } from "react";
import { getChapterContent } from "@/data/api";
import { CheckCircle2, ExternalLink, FileText } from "lucide-react";

function ChapterBody({ contentType, body }) {
  if (!body) {
    return (
      <div className="rounded-sm border border-dashed border-border p-8 text-center text-muted-foreground">
        Contenu à venir.
      </div>
    );
  }

  switch (contentType) {
    case "article":
      return (
        <div className="space-y-4">
          {body.blocks.map((b, i) => {
            if (b.type === "heading")
              return <h2 key={i} className="text-lg font-semibold text-foreground">{b.text}</h2>;
            if (b.type === "paragraph")
              return <p key={i} className="text-sm leading-relaxed text-foreground/80">{b.text}</p>;
            if (b.type === "list")
              return (
                <ul key={i} className="ml-5 list-disc space-y-1 text-sm text-foreground/80">
                  {b.items.map((it, j) => <li key={j}>{it}</li>)}
                </ul>
              );
            return null;
          })}
        </div>
      );

    case "video":
      return (
        <div className="aspect-video w-full overflow-hidden rounded-sm bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${body.videoId}`}
            title="Vidéo du chapitre"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );

    case "infographic":
      return (
        <img
          src={body.imageUrl}
          alt={body.alt ?? "Infographie"}
          className="w-full rounded-sm border border-border"
        />
      );

    case "link":
      return (
        <a
          href={body.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-sm bg-platform-brand px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          <ExternalLink className="h-4 w-4" />
          {body.label ?? "Ouvrir le lien"}
        </a>
      );

    case "pdf":
      return (
        <div className="space-y-3">
          <div className="h-[70vh] w-full overflow-hidden rounded-sm border border-border">
            <iframe src={body.url} title="Document PDF" className="h-full w-full" />
          </div>
          <a
            href={body.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <FileText className="h-4 w-4" /> Ouvrir dans un nouvel onglet
          </a>
        </div>
      );

    default:
      return <p className="text-sm text-muted-foreground">Format non reconnu.</p>;
  }
}

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export function ChapterView({ chapterId, isCompleted, onComplete }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [remaining, setRemaining] = useState(null);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setContent(null);
    getChapterContent(chapterId).then((data) => {
      if (!alive) return;
      setContent(data);

      setRemaining(isCompleted ? 0 : 10); //data?.readingTimerSeconds ?? 180);
      setLoading(false);
    });
    return () => { alive = false; };
  }, [chapterId, isCompleted]);

  useEffect(() => {
    if (remaining === null || remaining <= 0) return;
    const t = setInterval(() => {
      setRemaining((r) => (r <= 1 ? 0 : r - 1));
    }, 1000);
    return () => clearInterval(t);
  }, [remaining]);

  if (loading) return <p className="text-sm text-muted-foreground">Chargement du chapitre…</p>;
  if (!content) return <p className="text-sm text-muted-foreground">Chapitre introuvable.</p>;

  const canComplete = remaining === 0;

  return (
    <div className="space-y-8">
      <ChapterBody contentType={content.contentType} body={content.body} />

      <div className="flex flex-col items-start gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        {isCompleted ? (
          <span className="flex items-center gap-2 text-sm font-medium text-success">
            <CheckCircle2 className="h-5 w-5" /> Chapitre terminé
          </span>
        ) : (
          <span className="text-sm text-muted-foreground">
            {canComplete
              ? "Vous pouvez marquer ce chapitre comme terminé."
              : `Temps de lecture restant : ${formatTime(remaining)}`}
          </span>
        )}

        {!isCompleted && (
          <button
            type="button"
            disabled={!canComplete}
            onClick={() => onComplete(chapterId)}
            className={`rounded-sm px-5 py-2.5 text-sm font-medium transition ${canComplete
                ? "bg-platform-brand text-white hover:opacity-90"
                : "cursor-not-allowed bg-muted text-muted-foreground"
              }`}
          >
            Marquer comme terminé
          </button>
        )}
      </div>
    </div>
  );
}