import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }){
    const [token, setToken] = useState(null);
    const isAuthenticated = token !== null;

    const login = (newToken) => setToken(newToken);
    const logout = () => setToken(null);
    
    return (
        <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
} 

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside <AuthProvider");
    return ctx;
}