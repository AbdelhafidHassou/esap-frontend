import { CheckCircle2, CircleDot, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const STATUS_CONFIG = {
    completed: {
        icon: CheckCircle2,
        label: "Terminé",
        className: "text-primary",
    },
    in_progress: {
        icon: CircleDot,
        label: "En cours",
        className: "text-secondary-brand",
    },
    locked: {
        icon: Lock,
        label: "Verrouillé",
        className: "text-muted-foreground",
    },
}

export function ModuleCard({ module }) {
    const navigate = useNavigate();
    const isLocked = module.status === "locked";
    const status = STATUS_CONFIG[module.status] ?? STATUS_CONFIG.locked;
    const StatusIcon = status.icon;

    const handleClick = () => {
        if (isLocked) return;
        navigate(`/formation/${module.id}`);
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={isLocked}
            className={`
                flex flex-col overflow-hidden rounded-sm border border-border bg-card text-left transition
                ${isLocked ? "opacity-60 cursor-not-allowed" : "hover:border-primary cursor-pointer"}    
            `}
        >
            <img src={module.image} alt="" className="h-32 w-full object-cover"/>

            <div className="flex flex-1 flex-col gap-2 p-4">
                <h3 className="font-medium text-foreground">{module.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                    {module.description}
                </p>
                <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="text-xs text-muted-foreground">
                        {module.chapterCount} chapitres - {module.durationMinutes} min
                    </span>
                    <span className={`flex items-center gap-1 text-xs ${status.className}`}>
                        <StatusIcon className="h-4 w-4" />
                        {status.label}
                    </span>
                </div>
            </div>
        </button>
    )
}