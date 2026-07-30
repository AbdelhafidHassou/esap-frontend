import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts"
import { Card, CardContent } from "@/components/ui/card"

const TIER_LABELS = {
    poor: "Faible",
    fair: "Moyen",
    good: "Bon",
    very_good: "Très bon",
    excellent: "Excellent",
}

export default function RiskGauge({ value = 0, tier }) {
    const data = [{ value }]

    return (
        <Card className="rounded-sm bg-white shadow-lg  ">
            <CardContent className="flex flex-col items-center p-6">
                <p className="text-[#7b2cbf] mb-4 self-start text-lg font-semibold">
                    Score de performance
                </p>

                <div className="relative h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart cx="50%" cy="70%" innerRadius="90%" outerRadius="130%"
                            startAngle={180} endAngle={0} barSize={18} data={data}>
                            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                            <RadialBar dataKey="value" cornerRadius={10} fill="#7b2cbf" background={{ fill: "#f3e8ff" }} />
                        </RadialBarChart>
                    </ResponsiveContainer>

                    <div className="absolute inset-x-0 bottom-6 flex flex-col items-center">
                        <p className="text-4xl font-bold text-[#7b2cbf]">{value}%</p>
                        <p className="text-sm text-[#7b2cbf]">{TIER_LABELS[tier] ?? tier}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}