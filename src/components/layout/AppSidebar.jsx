import { LibraryBig, LayoutDashboard, Trophy } from "lucide-react";
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
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "Formations", url: "/formations", icon: LibraryBig },
    { title: "Certificats", url: "/certificats", icon: Trophy },
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
                            className="bg-sidebar hover:bg-sidebar active:bg-sidebar data-active:bg-sidebar data-open:bg-sidebar cursor-default"
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
                                <span className="truncate font-medium text-sidebar-foreground">{branding?.name}</span>
                                <span className="truncate text-xs text-sidebar-foreground">Formation SSI</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent className="overflow-hidden ">
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.url}>
                                    <SidebarMenuButton
                                        render={<Link to={item.url} />}
                                        isActive={pathname === item.url}
                                        className="mb-1 w-full min-w-0 transition-colors duration-300 ease-in-out text-md h-12 "
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
                <div className="flex flex-col items-center border-t pt-4">
                    <p className="text-center text-xs text-white/70 group-data-[collapsible=icon]:hidden">
                        © {platform?.year} {branding?.name} - Developed by <a href="https://www.linkedin.com/company/mercure-one" target="_blank" className="hover:text-secondary-brand transition duration-300 ease-in-out">{platform?.name}</a>
                    </p>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}
