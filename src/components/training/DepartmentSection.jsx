import { ModuleCard } from "./ModuleCard";

export function DepartmentSection({ department, modules }) {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-foreground">
                {department.name}
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {modules.map((module) => (
                    <ModuleCard key={module.id} module={module} />
                ))}
            </div>
        </section>
    )
}