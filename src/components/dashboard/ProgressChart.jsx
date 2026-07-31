import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { useThemeColors } from "@/hooks/useThemeColors"

export default function ProgressChart({ data = [] }) {
  const { secondary, secondaryLight } = useThemeColors()
  const { primary, primaryLight } = useThemeColors()
  return (
    <Card className="rounded-sm bg-card shadow-lg h-full">
      <CardContent className="flex flex-col p-6 h-full">
        <p className="text-primary mb-4 text-lg font-semibold">Progression dans le temps</p>
        <div className="flex-1 min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={secondary} stopOpacity={0.5} />
                  <stop offset="100%" stopColor={secondaryLight} stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={secondaryLight} />
              <XAxis dataKey="month" stroke={primary} fontSize={12} />
              <YAxis stroke={primary} fontSize={12} domain={[0, 100]} />
              <Tooltip />
              <Area type="monotone" dataKey="score" stroke={secondary} strokeWidth={2} fill="url(#scoreGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}