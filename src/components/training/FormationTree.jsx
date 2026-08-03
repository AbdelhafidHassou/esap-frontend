import { CheckCircle2, CircleDot, Lock, Circle, ChevronDown, ChevronRight } from "lucide-react";

const NODE_ICON = {
    completed: { Icon: CheckCircle2, className: "text-success" },
    in_progress: { Icon: Circle, className: "text-gray-700" },
    unlocked: { Icon: Circle, className: "text-secondary-brand" },
    locked: { Icon: Lock, className: "text-muted-foreground" },
};

function NodeRow({ label, meta, status, selected, onSelect }) {
    const { Icon, className } = NODE_ICON[status] ?? NODE_ICON.locked;
    const isLocked = status === "locked";
    return (
        <button
            type="button"
            disabled={isLocked}
            onClick={onSelect}
            className={`flex w-full items-center gap-3 px-3 py-2.5 text-left transition-colors ${selected ? "bg-muted" : "hover:bg-muted/50"
                } ${isLocked ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
            <Icon className={`h-4 w-4 shrink-0 ${className}`} />
            <div className="min-w-0 flex-1">
                <p className={`truncate text-sm font-semibold ${isLocked ? "text-muted-foreground" : "text-foreground"}`}>
                    {label}
                </p>
                {meta && <p className="text-xs text-muted-foreground">{meta}</p>}
            </div>
        </button>
    );
}

export function FormationTree({ formation, selectedId, onSelect, openModuleId, onToggleModule }) {
    return (
        <div className="flex flex-col">
            <div className="border-b border-border px-4 py-4">
                <h2 className="font-semibold text-foreground">{formation.department.name}</h2>
                <p className="mt-0.5 text-xs text-muted-foreground">Parcours de formation SSI</p>
            </div>
            {formation.modules.map((mod, idx) => {
                const isOpen = openModuleId === mod.id;
                const isLocked = mod.status === "locked";
                const Chevron = isOpen ? ChevronDown : ChevronRight;
                const { Icon, className } = NODE_ICON[mod.status] ?? NODE_ICON.locked;

                return (
                    <div key={mod.id} className="border-b border-border">
                        <button
                            type="button"
                            disabled={isLocked}
                            onClick={() => onToggleModule(mod.id)}
                            className={`flex w-full items-center gap-3 px-3 py-3 text-left ${isLocked ? "cursor-not-allowed" : "cursor-pointer hover:bg-muted/50"
                                }`}
                        >
                            <Icon className={`h-4 w-4 shrink-0 ${className}`} />
                            <div className="min-w-0 flex-1">
                                <p className="text-xs font-bold text-muted-foreground">Module {idx + 1}</p>
                                <p className={`truncate text-sm font-bold ${isLocked ? "text-muted-foreground" : "text-foreground"}`}>
                                    {mod.title}
                                </p>
                            </div>
                            {!isLocked && <Chevron className="h-4 w-4 text-muted-foreground" />}
                        </button>

                        <div
                            className={`grid transition-all duration-300 ease-in-out ${isOpen && !isLocked ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                }`}
                        >
                            <div className="overflow-hidden">
                                <div className="bg-muted/30 pl-4">
                                    {mod.chapters.map((ch, chIdx) => (
                                        <NodeRow
                                            key={ch.id}
                                            overline={`Chapitre ${idx + 1}.${chIdx + 1}`}
                                            label={ch.title}
                                            meta={`${ch.contentType} · ${Math.ceil((ch.durationSeconds ?? 0) / 60)} min`}
                                            status={ch.status}
                                            selected={selectedId === ch.id}
                                            onSelect={() => onSelect(ch.id)}
                                        />
                                    ))}
                                    <NodeRow
                                        label="Quiz du module"
                                        meta={`${mod.quiz.questionCount} questions`}
                                        status={mod.quiz.status}
                                        selected={selectedId === mod.quiz.id}
                                        onSelect={() => onSelect(mod.quiz.id)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}


            <NodeRow
                label="Test final"
                status={formation.test.status}
                selected={selectedId === formation.test.id}
                onSelect={() => onSelect(formation.test.id)}
            />
            <NodeRow
                label="Conditions SSI"
                status={formation.ssi.status}
                selected={selectedId === "ssi"}
                onSelect={() => onSelect("ssi")}
            />
            <NodeRow
                label="Validation"
                status={formation.validation.status}
                selected={selectedId === "validation"}
                onSelect={() => onSelect("validation")}
            />
        </div>
    );
}