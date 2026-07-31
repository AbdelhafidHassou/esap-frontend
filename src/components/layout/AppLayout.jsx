import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import AppSidebar from "./AppSidebar";
import UserMenu from "./UserMenu";
import { useAppData } from "@/context/AppDataContext";
import { Bell } from "lucide-react";
import SearchBar from "./SearchBar";

export default function AppLayout() {
    const { employee, branding } = useAppData()
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="flex flex-1 flex-col">
                <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-white px-4">
                    <SidebarTrigger />
                    <div className="hidden md:block flex-1 max-w-md">
                        <SearchBar />
                    </div>
                    {branding?.logoUrl && (
                        <img
                            src={branding.logoUrl}
                            alt={branding.name}
                            className="h-8 w-auto object-contain md:hidden rounded-sm"
                        />
                    )}
                    <div className="ml-auto flex items-center gap-4">
                        <button className="relative rounded-full p-2 hover:bg-muted transition-colors">
                            <Bell className="h-5 w-5 text-muted-foreground" />
                            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-danger" />
                        </button>
                        {employee && (
                            <UserMenu firstName={employee.firstName} lastName={employee.lastName} email={employee.email} />
                        )}
                    </div>
                </header>
                <main className="flex-1 overflow-x-hidden bg-[#f8fafc] p-4 md:p-8 lg:p-12">
                    <Outlet />
                </main>
            </div>
        </SidebarProvider>
    )
}