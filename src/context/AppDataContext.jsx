import { getBranding, getEmployee } from "@/data/api";
import { createContext, useContext, useEffect, useState } from "react";

const AppDataContext = createContext(null)

export function AppDataProvider({children}) {
    const [employee, setEmployee] = useState(null)
    const [branding, setBranding] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Promise.all([getEmployee(), getBranding()]).then(([emp, brand]) => {
            setEmployee(emp)
            setBranding(brand)
            setLoading(false)
        })
    }, [])

    return (
        <AppDataContext.Provider value={{employee, branding, loading }}>
            {children}
        </AppDataContext.Provider>    
    )
}

export function useAppData() {
    const ctx = useContext(AppDataContext)
    if (!ctx) throw new Error("useAppData must be used within AppDataProvider")
        return ctx
}