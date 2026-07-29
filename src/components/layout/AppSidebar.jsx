import { Award, GraduationCap, Home } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { 
    Sidebar, 
    SidebarContent, 
    SidebarGroup, 
    SidebarGroupContent, 
    SidebarHeader, 
    SidebarMenu, 
    SidebarMenuButton, 
    SidebarMenuItem 
} from "../ui/sidebar";
import { useAppData } from "@/context/AppDataContext";

const items = [
    { title: "Accueil", url: "/dashboard", icon: Home },
    { title: "Formations", url: "/formations", icon: GraduationCap },
    { title: "Certificats", url: "/certificats", icon: Award },
]

export default function AppSidebar() {
    const { pathname } = useLocation()
    const { branding } = useAppData() 

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="p-4">
                {branding?.logoUrl ? (
                    <div>
                        <img src={branding.logoUrl} alt={branding.name} className="h-10"/>
                    </div>
                ) : (
                    <p className="font-semibold">
                        {branding?.name ?? "..."}
                    </p>
                )}
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.url}>
                                    <SidebarMenuButton isActive={pathname === item.url}>
                                        <Link className="flex gap-3" to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}