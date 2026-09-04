import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { useThemeColors } from "@/hooks/useThemeColors";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default function ValidationsChart({ data }) {
  const { primary } = useThemeColors();

  const chartData = data.map((d) => ({
    label: format(new Date(d.month + "-01"), "MMM yy", { locale: fr }),
    count: d.count,
  }));

  return (
    <Card className="rounded-sm bg-card shadow-lg min-w-0">
      <CardContent className="flex flex-col p-6">
        <p className="text-foreground mb-1 text-lg font-semibold">
          Validations par mois
        </p>
        <p className="text-muted-foreground mb-4 text-sm">
          Formations validées sur l'ensemble des clients
        </p>
        <div className="h-64 w-full min-w-0 overflow-hidden">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
              <XAxis dataKey="label" tickLine={false} axisLine={false}
                tick={{ fontSize: 12, fill: "var(--text-muted)" }} />
              <YAxis tickLine={false} axisLine={false}
                tick={{ fontSize: 12, fill: "var(--text-muted)" }} />
              <Tooltip
                cursor={{ fill: "var(--primary-light)" }}
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid var(--border-color)",
                  background: "var(--bg-surface)",
                }}
              />
              <Bar dataKey="count" fill={primary} radius={[4, 4, 0, 0]} maxBarSize={48} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}