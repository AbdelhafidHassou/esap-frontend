import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "./AdminSidebar";
import AdminUserMenu from "./AdminUserMenu";
import { admin } from "@/admin/mocks/admin"

export default function AdminLayout() {
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