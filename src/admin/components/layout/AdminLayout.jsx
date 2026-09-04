import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "./AdminSidebar";
import AdminUserMenu from "./AdminUserMenu";
import { admin } from "@/admin/mocks/admin";
import { useTheme } from "@/context/ThemeContext";

export default function AdminLayout() {
    const { isDark } = useTheme();

    useEffect(() => {
        const root = document.documentElement;
        const sidebarTokens = isDark
            ? {
                "--sidebar": "#3a2775",
                "--sidebar-foreground": "#ede9fb",
                "--sidebar-accent": "#6d4bd8",
                "--sidebar-accent-foreground": "#ffffff",
                "--sidebar-border": "rgba(255,255,255,0.10)",
            }
            : {
                "--sidebar": "#2a1a5e",
                "--sidebar-foreground": "#e5e0f5",
                "--sidebar-accent": "#5832bb",
                "--sidebar-accent-foreground": "#ffffff",
                "--sidebar-border": "rgba(255,255,255,0.08)",
            };
        const tokens = {
            "--primary": "#5832bb",
            "--primary-light": "rgba(88,50,187,0.12)",
            "--secondary-brand": "#9d4edd",
            "--secondary-brand-light": "rgba(157,78,221,0.12)",
            ...sidebarTokens,
        };
        const prev = {};
        for (const [k, v] of Object.entries(tokens)) {
            prev[k] = root.style.getPropertyValue(k);
            root.style.setProperty(k, v);
        }
        return () => {
            for (const [k, v] of Object.entries(prev)) {
                if (v) root.style.setProperty(k, v);
                else root.style.removeProperty(k);
            }
        };
    }, [isDark]);

    return (
        <SidebarProvider>
            <AdminSidebar />
            <div className="flex flex-1 flex-col min-w-0">
                <header className="sticky top-0 z-50 flex h-18 items-center gap-4 border-b bg-card px-4">
                    <SidebarTrigger />
                    <div className="ml-auto flex items-center gap-4">
                        {admin && (
                            <AdminUserMenu
                                firstName={admin.firstName}
                                lastName={admin.lastName}
                                email={admin.email}
                            />
                        )}
                    </div>
                </header>
                <main className="flex-1 overflow-x-hidden bg-background p-4 md:p-8 lg:p-12">
                    <Outlet />
                </main>
            </div>
        </SidebarProvider>
    );
}