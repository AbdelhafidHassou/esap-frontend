import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { useThemeColors } from "@/hooks/useThemeColors";

export default function ClientStatusDonut({ split }) {
  const { primary, secondary } = useThemeColors();
  const total = split.active + split.inactive;

  const data = [
    { name: "Actifs", value: split.active, color: primary },
    { name: "Inactifs", value: split.inactive, color: secondary },
  ];

  const pct = (n) => (total > 0 ? Math.round((n / total) * 100) : 0);

  return (
    <Card className="rounded-sm bg-card shadow-lg min-w-0">
      <CardContent className="flex flex-col p-6">
        <p className="text-foreground mb-1 text-lg font-semibold">
          Répartition des clients par statut
        </p>
        <p className="text-muted-foreground mb-4 text-sm">Actifs vs inactifs</p>

        <div className="flex items-center gap-6">
          <div className="relative h-48 w-48 shrink-0 min-w-0 overflow-hidden">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%"
                  innerRadius={60} outerRadius={90} startAngle={90} endAngle={-270}
                  paddingAngle={0} stroke="none">
                  {data.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-3xl font-bold text-foreground">{total}</p>
              <p className="text-muted-foreground text-sm">Clients</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {data.map((entry) => (
              <div key={entry.name} className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: entry.color }} />
                <span className="text-muted-foreground text-sm">{entry.name}</span>
                <span className="text-foreground text-sm font-medium">
                  {entry.value} ({pct(entry.value)}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}