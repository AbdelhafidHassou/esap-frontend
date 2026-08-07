export function PlaceholderPage({ icon: Icon, title, description, disabled = false }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className={`flex h-16 w-16 items-center justify-center rounded-full ${disabled ? "bg-muted" : "bg-primary/10"}`}>
        <Icon className={`h-8 w-8 ${disabled ? "text-muted-foreground" : "text-primary"}`} />
      </div>
      <h1 className="mt-5 text-xl font-semibold text-foreground">{title}</h1>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">{description}</p>
      {disabled && (
        <span className="mt-4 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          Bientôt disponible
        </span>
      )}
    </div>
  );
}