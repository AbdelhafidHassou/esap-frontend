import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { Card, CardContent } from "@/components/ui/card"

export default function ProgressDonut({ total = 0, validated = 0, inProgress = 0 }) {
  const remaining = Math.max(total - validated - inProgress, 0)
  const completion = total > 0 ? Math.round((validated / total) * 100) : 0

  const data = [
    { name: "Validés", value: validated, color: "#7b2cbf" },
    { name: "En cours", value: inProgress, color: "#c77dff" },
    { name: "Restants", value: remaining, color: "#f3e8ff" },
  ]

  return (
    <Card className="rounded-sm bg-white shadow-lg  ">
      <CardContent className="flex flex-col items-center p-6">
        <p className="text-[#7b2cbf] mb-4 self-start text-lg font-semibold">
          Progression des modules
        </p>

        <div className="relative h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={85}
                startAngle={90}
                endAngle={-270}
                paddingAngle={2}
                stroke="none"
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-4xl font-bold text-[#7b2cbf]">{completion}%</p>
            <p className="text-muted-foreground text-sm">complétés</p>
          </div>
        </div>

        <div className="mt-4 flex w-full justify-around text-sm">
          {data.map((entry) => (
            <div key={entry.name} className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="text-muted-foreground">{entry.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}