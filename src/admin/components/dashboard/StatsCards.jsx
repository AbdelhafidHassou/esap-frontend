import { Card, CardContent } from "@/components/ui/card";
import { Users, UserCheck, CheckCircle2, Target } from "lucide-react";

function StatCard({ label, value, subtitle, icon: Icon }) {
  return (
    <Card className="rounded-sm bg-card shadow-lg min-w-0">
      <CardContent className="flex items-start gap-4 p-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex flex-col min-w-0">
          <p className="text-foreground text-xs font-bold">{label}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          {subtitle && <p className="text-muted-foreground text-xs mt-1">{subtitle}</p>}
        </div>
      </CardContent>
    </Card>
  );
}

export default function StatsCards({ stats, statusSplit }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        label="Clients"
        value={stats.clientCount}
        subtitle={`${statusSplit.active} actifs · ${statusSplit.inactive} inactifs`}
        icon={Users}
      />
      <StatCard
        label="Employés (total)"
        value={stats.employeeTotal.toLocaleString("fr-FR")}
        subtitle="Tous clients confondus"
        icon={UserCheck}
      />
      <StatCard
        label="Formations validées"
        value={stats.validationsTotal.toLocaleString("fr-FR")}
        subtitle="Validations totales"
        icon={CheckCircle2}
      />
      <StatCard
        label="Taux de validation"
        value={`${stats.globalValidationRate} %`}
        subtitle="Taux global"
        icon={Target}
      />
    </div>
  );
}