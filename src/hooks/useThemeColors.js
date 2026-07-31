import { useEffect, useState } from "react"

export function useThemeColors() {
  const [colors, setColors] = useState({
    primary: "#7b2cbf",
    primaryLight: "#f3e8ff",
    secondary: "#9d4edd",
    secondaryLight: "rgba(157,78,221,0.12)",
    success: "#10b981",
    warning: "#f59e0b",
  })

  useEffect(() => {
    const root = getComputedStyle(document.documentElement)
    setColors({
      primary: root.getPropertyValue("--primary").trim() || "#7b2cbf",
      primaryLight: root.getPropertyValue("--primary-light").trim() || "#f3e8ff",
      secondary: root.getPropertyValue("--secondary-brand").trim() || "#9d4edd",
      secondaryLight: root.getPropertyValue("--secondary-brand-light").trim() || "rgba(157,78,221,0.12)",
      success: root.getPropertyValue("--success").trim() || "#10b981",
      warning: root.getPropertyValue("--warning").trim() || "#f59e0b",
    })
  }, [])

  return colors
}