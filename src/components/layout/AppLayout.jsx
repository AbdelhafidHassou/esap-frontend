import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import AppSidebar from "./AppSidebar";
import UserMenu from "./UserMenu";
import { useAppData } from "@/context/AppDataContext";

export default function AppLayout() {
    const { employee } = useAppData()
    return (
        <SidebarProvider>
            <AppSidebar />
                <div className="flex flex-1 flex-col">
                    <header className="flex h-14 items-center gap-2 border-b px-4">
                        <SidebarTrigger />
                        <div className="ml-auto">
                            {employee && (
                                <UserMenu firstName={employee.firstName} lastName={employee.lastName} email={employee.email}/>
                            )}
                        </div>
                    </header>
                    <main className="flex-1 p-6">
                        <Outlet />
                    </main>
                </div>
        </SidebarProvider>
    )
}