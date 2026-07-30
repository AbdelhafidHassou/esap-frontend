import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import AppSidebar from "./AppSidebar";
import UserMenu from "./UserMenu";
import { useAppData } from "@/context/AppDataContext";

export default function AppLayout() {
    const { employee, branding } = useAppData()
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="flex flex-1 flex-col">
                <header className="sticky top-0 z-10 flex h-14 items-center gap-2 border-b bg-white px-4">
                    <SidebarTrigger />
                    {branding?.logoUrl && (
                        <img
                            src={branding.logoUrl}
                            alt={branding.name}
                            className="h-8 w-auto object-contain md:hidden rounded-sm"
                        />
                    )}
                    <div className="ml-auto">
                        {employee && (
                            <UserMenu firstName={employee.firstName} lastName={employee.lastName} email={employee.email} />
                        )}
                    </div>
                </header>
                <main className="flex-1 bg-gray-50 p-4 md:p-8 lg:p-12">
                    <Outlet />
                </main>
            </div>
        </SidebarProvider>
    )
}