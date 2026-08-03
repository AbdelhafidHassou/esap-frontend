import FormationsTable from "@/components/dashboard/FormationsTable";
import ProgressDonut from "@/components/dashboard/ProgressDonut";
import RiskGauge from "@/components/dashboard/RiskGauge";
import StatCard from "@/components/dashboard/StatCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useAppData } from "@/context/AppDataContext";
import { getDashboard } from "@/data/api";
import { useAsync } from "@/hooks/useAsync";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Clock,
  TrendingDown,
  Calendar,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { employee } = useAppData();
  const { data, loading } = useAsync(getDashboard);
  const navigate = useNavigate();

  return (
    <div className="w-full space-y-6">
      {employee ? (
        <div
          className="relative overflow-hidden rounded-sm p-8 md:p-10 text-white shadow-lg min-h-72"
          style={{
            background:
              "linear-gradient(135deg, var(--primary), var(--secondary-brand))",
          }}
        >
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="techGrid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
                <circle cx="0" cy="0" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#techGrid)" />
          </svg>

          <div className="flex items-center justify-between gap-8">
            <div className="max-w-sm">
              <h1 className="text-2xl md:text-3xl font-bold">
                Bonjour, {employee.firstName} {employee.lastName}
              </h1>
              <p className="mt-3 text-white/80 text-sm">
                Bienvenue sur votre espace de sensibilisation SSI. Continuez
                votre parcours pour renforcer la sécurité de notre entreprise.
              </p>
              <button
                onClick={() => navigate("/formation/dep_it", { state: { focusModuleId: "mod_it_2" } })}
                className="mt-6 inline-flex items-center gap-2 rounded-sm bg-white px-5 py-2.5 font-medium text-primary transition-colors hover:bg-white/ cursor-pointer"
              >
                Reprendre la formation <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {data && (
              <div className="hidden lg:block min-w-sm">
                <p className="text-white/70 text-xs">
                  Votre progression globale
                </p>
                <p className="text-4xl font-bold mt-1">
                  {Math.round(
                    (data.stats.modulesValidated / data.stats.totalModules) *
                      100,
                  )}
                  %
                </p>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-white"
                    style={{
                      width: `${(data.stats.modulesValidated / data.stats.totalModules) * 100}%`,
                    }}
                  />
                </div>
                <div className="mt-4 flex gap-8">
                  <div>
                    <p className="flex items-center gap-1 text-sm font-semibold">
                      <TrendingDown className="h-4 w-4" />{" "}
                      {data.stats.modulesValidated} / {data.stats.totalModules}
                    </p>
                    <p className="text-white/60 text-xs">Modules validés</p>
                  </div>
                  <div>
                    <p className="flex items-center gap-1 text-sm font-semibold">
                      <Calendar className="h-4 w-4" /> 31 Déc. 2026
                    </p>
                    <p className="text-white/60 text-xs">Prochaine échéance</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Skeleton className="h-72 w-full" />
      )}

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-20">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-24" />
          ))}
        </div>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="Départements"
              value={data.stats.departmentsAssigned}
              subtitle="2 actifs"
              icon={Building2}
              accent="bg-primary"
              progress={100}
            />
            <StatCard
              label="Modules"
              value={data.stats.totalModules}
              subtitle="Tous disponibles"
              icon={BookOpen}
              accent="bg-primary"
              progress={100}
            />
            <StatCard
              label="Modules validés"
              value={data.stats.modulesValidated}
              subtitle={`${data.stats.modulesValidated}/${data.stats.totalModules} complétés`}
              icon={CheckCircle2}
              accent="bg-success"
              progress={
                (data.stats.modulesValidated / data.stats.totalModules) * 100
              }
            />
            <StatCard
              label="Modules en cours"
              value={data.stats.modulesInProgress}
              subtitle="À poursuivre"
              icon={Clock}
              accent="bg-warning"
              progress={
                (data.stats.modulesInProgress / data.stats.totalModules) * 100
              }
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <RiskGauge
              value={data.riskScore.value}
              tier={data.riskScore.tier}
            />
            <ProgressDonut
              total={data.stats.totalModules}
              validated={data.stats.modulesValidated}
              inProgress={data.stats.modulesInProgress}
            />
          </div>

          <FormationsTable formations={data.formations} />
        </>
      )}
    </div>
  );
}
