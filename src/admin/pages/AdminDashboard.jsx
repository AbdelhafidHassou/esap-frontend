import { getAdminDashboard } from "@/admin/data/AdminApi";
import { useAsync } from "@/hooks/useAsync";
import { Skeleton } from "@/components/ui/skeleton";
import StatsCards from "@/admin/components/dashboard/StatsCards";

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
      {/* ClientsTable — data.clients */}
      {/* ValidationsChart — data.validationsPerMonth */}
      {/* ClientStatusDonut — data.clientStatusSplit */}
    </div>
  );
}