export function PageHero({ title, subtitle, children }) {
  return (
    <div
      className="relative overflow-hidden rounded-sm p-8 md:p-10 text-white shadow-lg"
      style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary-brand))" }}
    >
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="techGridHero" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#techGridHero)" />
      </svg>

      <div className="relative">
        <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
        {subtitle && <p className="mt-3 text-white/80 text-sm">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}
