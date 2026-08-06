export function ConfirmModal({
    open,
    title,
    children,
    onConfirm,
    confirmLabel = "Confirmer",
    onCancel,
    cancelLabel = "Annuler",
    confirmDisabled = false,
    dismissOnOverlay = false,
    maxWidth = "max-w-md",
    hideFooter = false,
}) {
    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
            onClick={dismissOnOverlay ? onCancel : undefined}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full ${maxWidth} rounded-sm border border-border bg-card p-6 shadow-xl`}
            >
                {title && <h2 className="text-lg font-bold text-foreground">{title}</h2>}

                <div className="mt-3">{children}</div>

                {!hideFooter && (
                    <div className="mt-6 flex justify-end gap-3">
                        {onCancel && (
                            <button
                                onClick={onCancel}
                                className="rounded-sm border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
                            >
                                {cancelLabel}
                            </button>
                        )}
                        <button
                            onClick={onConfirm}
                            disabled={confirmDisabled}
                            className="rounded-sm bg-platform-brand px-4 py-2 text-sm font-medium text-white hover:opacity-90 disabled:opacity-50"
                        >
                            {confirmLabel}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}