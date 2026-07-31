import { DepartmentSection } from "@/components/training/DepartmentSection";
import { getFormationsView } from "@/data/api";
import { useEffect, useState } from "react";

export default function Formations() {
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const data = getFormationsView();
        setSections(data);
        setLoading(false);
    }, []);
    
    if (loading) return <div className="p-6">Chargement...</div>;

    return (
        <div className="flex flex-col gap-8 p-6">
            <h1 className="text-2xl font-bold text-foreground">Formations</h1>
            {sections.map((section) => (
                <DepartmentSection 
                    key={section.department.id}
                    department={section.department}
                    modules={section.modules}
                />
            ))}
        </div>
    )
}