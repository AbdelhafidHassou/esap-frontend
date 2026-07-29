export function applyBranding(branding) {
    if (!branding?.primaryColor) return
    document.documentElement.style.setProperty("--primary", branding.primaryColor)
}