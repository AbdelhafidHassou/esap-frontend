import { User } from "lucide-react";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export default function Account() {
  return (
    <PlaceholderPage
      icon={User}
      title="Mon compte"
      description="La gestion de votre profil et de vos préférences sera bientôt disponible ici."
    />
  );
}