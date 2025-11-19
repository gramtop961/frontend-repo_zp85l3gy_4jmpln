export default function Hero() {
  return (
    <section id="top" className="pt-24 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1">Kassensysteme & POS-Lösungen</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">DailyPOS Österreich – moderne Kassenlösungen für Ihr Business</h1>
            <p className="mt-4 text-slate-600 leading-relaxed">Wir bieten schlanke, zuverlässige POS-Systeme, die sich perfekt für Gastronomie, Handel und Dienstleistung eignen. Einfach in der Bedienung, schnell eingerichtet und rechtssicher.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#kontakt" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-blue-700 transition-colors">Beratung anfordern</a>
              <a href="#leistungen" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-slate-700 font-semibold hover:bg-white transition-colors">Unsere Leistungen</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
              <div>DSGVO-konform</div>
              <div>RKSV & GoBD</div>
              <div>Cloud-Backoffice</div>
            </div>
          </div>
          <div>
            <div className="relative rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 p-4">
              <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-blue-600/10 to-indigo-600/10 grid place-items-center text-slate-700">
                <div className="text-center p-6">
                  <div className="text-7xl">🧾</div>
                  <p className="mt-4 font-semibold">Kassensoftware + Hardware aus einer Hand</p>
                  <p className="text-slate-500 text-sm mt-1">Touchkassen, Bondrucker, Kartenleser und mehr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
