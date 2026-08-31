import { createContext, useContext, useState } from "react";

const AdminAuthContext = createContext(null)

export function AdminAuthProvider({children}){
    const [token, setToken] = useState(null)
    const isAuthenticated = token !== null

    const login = (newToken) => setToken(newToken)
    const logout = () => setToken(null)

    return (
        <AdminAuthContext.Provider value={{ isAuthenticated, token, login, logout}}>
            {children}
        </AdminAuthContext.Provider>
    );
}

export function useAdminAuth() {
    const ctx = useContext(AdminAuthContext);
    if (!ctx) throw new Error("useAdminAuth must be used inside <AdminAuthProvider>");
    return ctx
}