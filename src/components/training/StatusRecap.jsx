export function StatusRecap({ sections }) {
  const allModules = sections.flatMap((s) => s.modules);
  const counts = {
    in_progress: allModules.filter((m) => m.status === "in_progress").length,
    completed: allModules.filter((m) => m.status === "completed").length,
    locked: allModules.filter((m) => m.status === "locked").length,
  };

  const rows = [
    { label: "En cours", value: counts.in_progress },
    { label: "Terminé", value: counts.completed },
    { label: "À venir", value: counts.locked },
  ];

  return (
    <div className="rounded-sm border border-border">
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between border-b border-border px-4 py-3 last:border-b-0"
        >
          <span className="text-sm text-muted-foreground">{row.label}</span>
          <span className="text-sm font-medium text-foreground">
            {row.value}
          </span>
        </div>
      ))}
    </div>
  );
}
