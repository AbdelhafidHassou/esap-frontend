import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { AppDataProvider, useAppData } from "./context/AppDataContext";
import { useEffect } from "react";
import { applyBranding } from "./lib/branding";

function BrandignApplier() {
  const {branding} = useAppData()
  useEffect(() => {applyBranding(branding)}, [branding])
  return null
}

export default function App() {
  return (
    <AppDataProvider>
      <BrandignApplier />
      <RouterProvider router={router}/>
    </AppDataProvider>
  )
}