import {
    LayoutDashboard, Users, FileStack, BarChart3, UserCog, Settings,
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import {
    Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
    SidebarFooter,
} from "@/components/ui/sidebar";
import { platform } from "@/mocks/platform";

const items = [
    { title: "Dashboard", url: "/admin/dashboard", icon: LayoutDashboard },
    { title: "Clients", url: "/admin/clients", icon: Users },
    { title: "Contenu", url: "/admin/content", icon: FileStack },
    { title: "Rapports", url: "/admin/report", icon: BarChart3 },
    { title: "Compte", url: "/admin/account", icon: UserCog },
    { title: "Paramètres", url: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
    const { pathname } = useLocation();
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            render={<Link to="/admin/dashboard" />}
                            className="bg-sidebar hover:bg-sidebar active:bg-sidebar data-active:bg-sidebar data-open:bg-sidebar cursor-default"
                        >
                            <img
                                src="/logos/merlogo.png"
                                alt={platform?.name}
                                className="size-10 rounded-sm block group-data-[collapsible=icon]:size-8"
                            />
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium text-sidebar-foreground">{platform?.name}</span>
                                <span className="truncate text-xs text-sidebar-foreground">Administration</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent className="overflow-hidden">
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.url}>
                                    <SidebarMenuButton
                                        render={<Link to={item.url} />}
                                        isActive={pathname === item.url}
                                        className="mb-1 w-full min-w-0 transition-colors duration-300 ease-in-out text-md h-12"
                                    >
                                        <item.icon />
                                        <span className="truncate">{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="p-4 group-data-[collapsible=icon]:p-2">
                <div className="flex flex-col items-center border-t pt-4 group-data-[collapsible=icon]:hidden">
                    <p className="text-center text-xs text-white">
                        © {platform?.year} {platform?.name}
                    </p>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}