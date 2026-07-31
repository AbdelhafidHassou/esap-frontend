import { Card, CardContent } from "../ui/card";

export default function StatCard({ label, value, subtitle, icon: Icon, accent, progress }) {
    return (
        <Card className="rounded-sm bg-card shadow-lg min-w-0">
            <CardContent className="flex flex-col gap-4 p-5">
                <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${accent}`}>
                        <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex flex-1 flex-col min-w-0">
                        <p className="text-muted-foreground text-xs">{label}</p>
                        <p className="text-2xl font-bold text-foreground">{value}</p>
                    </div>
                </div>

                {progress != null && (
                    <div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                            <div
                                className={`h-full rounded-full ${accent}`}
                                style={{ width: `${Math.min(progress, 100)}%` }}
                            />
                        </div>
                        {subtitle && <p className="text-muted-foreground text-xs mt-2">{subtitle}</p>}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}