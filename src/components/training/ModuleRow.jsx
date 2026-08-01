import { CheckCircle2, CircleDot, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const STATUS_CONFIG = {
  completed:   { icon: CheckCircle2, className: "text-success",          action: "Revoir" },
  in_progress: { icon: CircleDot,    className: "text-secondary-brand",  action: "Reprendre" },
  locked:      { icon: Lock,         className: "text-muted-foreground", action: null },
};

export function ModuleRow({ module }) {
  const navigate = useNavigate();
  const isLocked = module.status === "locked";
  const status = STATUS_CONFIG[module.status] ?? STATUS_CONFIG.locked;
  const StatusIcon = status.icon;

  return (
    <div className="flex flex-col gap-4 rounded-sm border border-border p-4 mb-5 sm:flex-row sm:items-center">
      <div className="flex min-w-0 flex-1 items-start gap-4">
        <StatusIcon className={`h-5 w-5 shrink-0 mt-0.5 ${status.className}`} />

        <div className="min-w-0 flex-1">
          <h3 className="font-medium text-foreground">{module.title}</h3>
          <p className="line-clamp-2 text-sm text-muted-foreground sm:truncate">
            {module.description}
          </p>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <span className="text-xs text-muted-foreground">
              {module.chapterCount} chapitres · {module.durationMinutes} min
            </span>
            {!isLocked && (
              <div className="h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${module.progressPercent}%` }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {status.action && (
        <button
          type="button"
          onClick={() => navigate(`/formation/${module.id}`)}
          className="w-full shrink-0 rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 sm:w-auto"
        >
          {status.action}
        </button>
      )}
    </div>
  );
}
