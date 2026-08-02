import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { AppDataProvider, useAppData } from "./context/AppDataContext";
import { useEffect } from "react";
import { applyBranding } from "./lib/branding";
import { AuthProvider } from "./context/AuthContext";

function BrandignApplier() {
  const { branding } = useAppData()
  useEffect(() => { applyBranding(branding) }, [branding])
  return null
}

export default function App() {
  return (
    <AuthProvider>
      <AppDataProvider>
        <BrandignApplier />
        <RouterProvider router={router} />
      </AppDataProvider>
    </AuthProvider>
  )
}