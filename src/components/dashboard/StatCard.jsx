import { Card, CardContent } from "../ui/card";

export default function StatCard({ label, value, icon: Icon, accent = "" }) {
    return (
        <Card className="rounded-sm bg-white shadow-lg  ">
            <CardContent className="flex flex-col items-center gap-4">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${accent}`}>
                    <Icon className="h-6 w-6" />
                </div>
                <div className="flex flex-1 flex-col items-center gap-2">
                    <p className="text-muted-foreground text-base text-end">{label}</p>
                    <p className="text-4xl font-semibold text-end">{value}</p>
                </div>
            </CardContent>
        </Card>
    )
}