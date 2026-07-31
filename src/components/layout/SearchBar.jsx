import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Search, X } from "lucide-react"
import { getDepartments } from "@/data/api"

export default function SearchBar() {
    const navigate = useNavigate()
    const [query, setQuery] = useState("")
    const [items, setItems] = useState([])
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        getDepartments().then((departments) => {
            const flat = []
            departments.forEach((dep) => {
                dep.modules.forEach((mod) => {
                    flat.push({ type: "Module", title: mod.title, moduleId: mod.id, dep: dep.name })
                    mod.chapters.forEach((ch) => {
                        flat.push({ type: "Chapitre", title: ch.title, moduleId: mod.id, dep: dep.name })
                    })
                })
            })
            setItems(flat)
        })
    }, [])

    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false)
        }
        document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown", handler)
    }, [])

    const results = query.trim()
        ? items.filter((i) => i.title.toLowerCase().includes(query.toLowerCase())).slice(0, 6)
        : []

    return (
        <div ref={ref} className="relative w-full max-w-md">
            <div className="flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-2">
                <Search className="h-4 w-4 text-muted-foreground shrink-0" />
                <input
                    value={query}
                    onChange={(e) => { setQuery(e.target.value); setOpen(true) }}
                    onFocus={() => setOpen(true)}
                    placeholder="Rechercher un module ou chapitre…"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                {query && (
                    <button onClick={() => setQuery("")}>
                        <X className="h-4 w-4 text-muted-foreground" />
                    </button>
                )}
            </div>

            {open && query && (
                <div className="absolute mt-2 w-full rounded-md border bg-card shadow-lg z-50">
                    {results.length > 0 ? (
                        results.map((r, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    navigate(`/formation/${r.moduleId}`)
                                    setQuery(""); setOpen(false)
                                }}
                                className="flex w-full flex-col items-start px-4 py-2.5 text-left hover:bg-muted transition-colors"
                            >
                                <span className="text-sm font-medium">{r.title}</span>
                                <span className="text-muted-foreground text-xs">{r.type} · {r.dep}</span>
                            </button>
                        ))
                    ) : (
                        <p className="px-4 py-3 text-sm text-muted-foreground">Aucun résultat</p>
                    )}
                </div>
            )}
        </div>
    )
}