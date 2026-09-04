import { useEffect, useState } from "react";
import { getFormationsView } from "@/data/api";
import { ModuleRow } from "@/components/training/ModuleRow";
import { MonthCalendar } from "@/components/training/MonthCalendar";
import { StatusRecap } from "@/components/training/StatusRecap";
import { PageHero } from "@/components/layout/PageHero";

const TABS = [
  { key: "in_progress", label: "En cours" },
  { key: "completed", label: "Terminé" },
  { key: "locked", label: "Non commencé" },
];

export default function Formations() {
  const [sections, setSections] = useState([]);
  const [activeTab, setActiveTab] = useState("in_progress");

  useEffect(() => {
    setSections(getFormationsView());
  }, []);

  const filtered = sections
    .map((section) => ({
      ...section,
      modules: section.modules.filter((m) => m.status === activeTab),
    }))
    .filter((section) => section.modules.length > 0);

  return (
    <div className="flex flex-col gap-6 p-6">
      <PageHero
        title="Formations"
      />
      <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-10">
        <div className="min-w-0 lg:col-span-7">
          <div className="flex gap-6 border-b border-border">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`-mb-px border-b-2 pb-2 text-sm font-medium transition ${
                  activeTab === tab.key
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-sm text-muted-foreground mt-4">
              Aucune formation dans cette catégorie.
            </p>
          ) : (
            filtered.map((section) => (
              <section key={section.department.id} className="flex flex-col pt-5">
                <h2 className="mb-2 text-lg font-semibold text-foreground">
                  {section.department.name}
                </h2>
                {section.modules.map((module) => (
                  <ModuleRow key={module.id} module={module} />
                ))}
              </section>
            ))
          )}
        </div>
        <aside className="flex flex-col gap-4 lg:col-span-3">
          <MonthCalendar />
          <StatusRecap sections={sections} />
        </aside>
      </div>
    </div>
  );
}
