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
    SidebarMenuItem,
    SidebarFooter,
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
    const { platform } = useAppData()

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            render={<Link to="/dashboard" />}
                            className="bg-[#f3e8ff] hover:bg-[#f3e8ff]"
                            
                        >
                            {branding?.logoUrl ? (
                                <img
                                    src={branding.logoUrl}
                                    alt={branding.name}
                                    className="size-8 rounded-sm"
                                />
                            ) : (
                                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-sm">
                                    {branding?.name?.[0]}
                                </div>
                            )}
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium text-black">{branding?.name}</span>
                                <span className="text-muted-foreground truncate text-xs">Formation SSI</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.url}>
                                    <SidebarMenuButton
                                        render={<Link to={item.url} />}
                                        isActive={pathname === item.url}
                                        className="mb-1 transition-colors duration-300 ease-in-out"
                                    >
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="p-4 group-data-[collapsible=icon]:p-2">
                <div className="flex flex-col items-center gap-2 border-t  pt-4">
                    {platform?.logoUrl && (
                        <a href={platform?.websiteUrl} target="_blank">
                            <img
                                src={platform.logoUrl}
                                alt={platform.name}
                                className="h-12 w-auto object-contain"
                            />
                        </a>
                    )}
                    <p className="text-center text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">
                        © {platform?.year} {branding?.name} - Developed by {platform?.name}
                    </p>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}