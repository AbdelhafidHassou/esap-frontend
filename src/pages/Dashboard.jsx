import FormationsTable from "@/components/dashboard/FormationsTable";
import ProgressChart from "@/components/dashboard/ProgressChart";
import ProgressDonut from "@/components/dashboard/ProgressDonut";
import RiskGauge from "@/components/dashboard/RiskGauge";
import StatCard from "@/components/dashboard/StatCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useAppData } from "@/context/AppDataContext";
import { getDashboard } from "@/data/api";
import { useAsync } from "@/hooks/useAsync";
import { BookOpen, Building2, CheckCircle2, Clock } from "lucide-react";

export default function Dashboard() {
    const { employee } = useAppData()
    const { data, loading } = useAsync(getDashboard)

    return (
        <div className="space-y-6">
            {employee ? (
                <div className="bg-white p-4 rounded-sm shadow-lg  " >
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Bonjour <span className="text-[#7b2cbf]">{employee.firstName} {employee.lastName}</span>
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Bienvenue sur votre profile ! <br /> Votre parcours de sensibilisation commence ici.
                    </p>
                </div>
            ) : (
                <Skeleton className="h-8 w-64" />
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
                        <StatCard label="Départements affectés" value={data.stats.departmentsAssigned} icon={Building2} accent="bg-[#7b2cbf] text-white" />
                        <StatCard label="Modules" value={data.stats.totalModules} icon={BookOpen} accent="bg-[#7b2cbf] text-white" />
                        <StatCard label="Modules validés" value={data.stats.modulesValidated} icon={CheckCircle2} accent="bg-[#7b2cbf] text-white" />
                        <StatCard label="Modules en cours" value={data.stats.modulesInProgress} icon={Clock} accent="bg-[#7b2cbf] text-white" />
                    </div>

                    <div className="grid gap-4 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <ProgressChart data={data.progressOverTime} />
                        </div>

                        <div className="flex flex-col gap-4">
                            <RiskGauge value={data.riskScore.value} tier={data.riskScore.tier} />
                            <ProgressDonut
                                total={data.stats.totalModules}
                                validated={data.stats.modulesValidated}
                                inProgress={data.stats.modulesInProgress}
                            />
                        </div>
                    </div>

                    <FormationsTable formations={data.formations} />
                </>
            )}
        </div>
    )
}