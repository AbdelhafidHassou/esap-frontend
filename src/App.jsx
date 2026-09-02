import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { AppDataProvider, useAppData } from "./context/AppDataContext";
import { useEffect } from "react";
import { applyBranding } from "./lib/branding";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AdminAuthProvider } from "./admin/context/AdminAuthContext";

function BrandignApplier() {
  const { branding } = useAppData()
  useEffect(() => { applyBranding(branding) }, [branding])
  return null
}

export default function App() {
  return (
    <AuthProvider>
      <AdminAuthProvider>
        <AppDataProvider>
          <BrandignApplier />
          <ThemeProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </AppDataProvider>
      </AdminAuthProvider>
    </AuthProvider>
  )
}