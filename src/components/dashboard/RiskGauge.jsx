import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { useThemeColors } from "@/hooks/useThemeColors"

const TIER_LABELS = {
    poor: "Faible", fair: "Moyen", good: "Bon", very_good: "Très bon", excellent: "Excellent",
}

export default function RiskGauge({ value = 0, tier }) {
    const { secondary, secondaryLight } = useThemeColors()
    const data = [{ value }]

    return (
        <Card className="rounded-sm bg-card shadow-lg">
            <CardContent className="flex flex-col items-center p-6">
                <p className="text-foreground mb-4 self-start text-lg font-semibold">Score de performance</p>
                <div className="relative h-50 w-full min-w-0 overflow-hidden">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart cx="50%" cy="70%" innerRadius="90%" outerRadius="130%"
                            startAngle={180} endAngle={0} barSize={18} data={data}>
                            <defs>
                                <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor={secondaryLight} />
                                    <stop offset="100%" stopColor={secondary} />
                                </linearGradient>
                            </defs>
                            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                            <RadialBar dataKey="value" cornerRadius={0} fill="url(#gaugeGrad)" background={{ fill: secondaryLight }} />
                        </RadialBarChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-x-0 bottom-6 flex flex-col items-center">
                        <p className="text-4xl font-bold text-foreground">{value}%</p>
                        <p className="text-sm text-muted-foreground">{TIER_LABELS[tier] ?? tier}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}