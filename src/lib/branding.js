export function applyBranding(branding) {
  if (!branding?.primaryColor) return
  const root = document.documentElement

  root.style.setProperty("--primary", branding.primaryColor)
  root.style.setProperty("--primary-light", hexToLight(branding.primaryColor))
  root.style.setProperty("--sidebar", branding.primaryColor)

  if (branding.secondaryColor) {
    root.style.setProperty("--secondary-brand", branding.secondaryColor)
    root.style.setProperty("--secondary-brand-light", hexToLight(branding.secondaryColor))
  }
}

function hexToLight(hex) {
  const h = hex.replace("#", "")
  const r = parseInt(h.substring(0, 2), 16)
  const g = parseInt(h.substring(2, 4), 16)
  const b = parseInt(h.substring(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, 0.12)`
}