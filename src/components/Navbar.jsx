import { Menu, Phone } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#loesungen", label: "Lösungen" },
    { href: "#vorteile", label: "Vorteile" },
    { href: "#kontakt", label: "Kontakt" },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold grid place-items-center">D</div>
            <span className="font-semibold tracking-tight text-slate-900">DailyPOS</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#kontakt" className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white text-sm font-semibold px-4 py-2 shadow-sm hover:bg-blue-700 transition-colors">
              <Phone className="h-4 w-4" />
              Angebot anfordern
            </a>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Menü">
            <Menu className="h-6 w-6 text-slate-800" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-slate-700 py-2">
                {item.label}
              </a>
            ))}
            <a href="#kontakt" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white text-sm font-semibold px-4 py-2 shadow-sm">
              <Phone className="h-4 w-4" /> Angebot anfordern
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
