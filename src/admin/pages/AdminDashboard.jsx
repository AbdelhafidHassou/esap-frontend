import { getAdminDashboard } from "@/admin/data/AdminApi";
import { useAsync } from "@/hooks/useAsync";
import { Skeleton } from "@/components/ui/skeleton";
import StatsCards from "@/admin/components/dashboard/StatsCards";
import ClientsTable from "../components/dashboard/ClientsTable";
import ValidationsChart from "../components/dashboard/ValidationsChart";
import ClientStatusDonut from "../components/dashboard/ClientStatusDonut";

export default function AdminDashboard() {
  const { data, loading } = useAsync(getAdminDashboard);

  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-24" />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      <StatsCards stats={data.stats} statusSplit={data.clientStatusSplit} />
      <ClientsTable clients={data.clients.slice(0, 5)} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ValidationsChart data={data.validationsPerMonth} />
        <ClientStatusDonut split={data.clientStatusSplit}/>
      </div>
    </div>
  );
}