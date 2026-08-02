import { getBranding, getEmployee, getPlatform } from "@/data/api";
import { createContext, useContext, useEffect, useState } from "react";

const AppDataContext = createContext(null);

export function AppDataProvider({children}) {
    const [employee, setEmployee] = useState(null)
    const [branding, setBranding] = useState(null)
    const [platform, setPlatform] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Promise.all([getEmployee(), getBranding(), getPlatform()]).then(([emp, brand, platf]) => {
            setEmployee(emp)
            setBranding(brand)
            setPlatform(platf)
            setLoading(false)
        })
    }, [])

    return (
        <AppDataContext.Provider value={{employee, branding, platform, loading }}>
            {children}
        </AppDataContext.Provider>    
    )
}

export function useAppData() {
    const ctx = useContext(AppDataContext)
    if (!ctx) throw new Error("useAppData must be used within AppDataProvider")
        return ctx
}