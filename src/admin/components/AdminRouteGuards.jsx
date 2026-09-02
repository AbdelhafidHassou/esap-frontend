import { useAdminAuth } from "../context/AdminAuthContext";
import { Outlet, Navigate } from "react-router-dom";
 
export function AdminProtectedRoute() {
    const { isAuthenticated } = useAdminAuth();
    return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" replace />
}

export function AdminPublicRoute() {
    const { isAuthenticated } = useAdminAuth()
    return isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : <Outlet />;
}