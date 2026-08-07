import { Trophy } from "lucide-react";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export default function Certificats() {
  return (
    <PlaceholderPage
      icon={Trophy}
      title="Certificats"
      description="Vos certificats de formation seront téléchargeables ici une fois cette fonctionnalité activée."
      disabled
    />
  );
}