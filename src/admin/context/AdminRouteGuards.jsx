import { useAdminAuth } from "./AdminAuthContext";
import { Outlet, Navigate } from "react-router-dom";
 
export function AdminProtectRoute() {
    const { isAuthenticated } = useAdminAuth();
    return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" replace />
}

export function AdminPublicRoute() {
    const { isAuthenticated } = useAdminAuth()
    return isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : <Outlet />;
}