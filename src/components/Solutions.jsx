export default function Solutions() {
  const solutions = [
    {
      title: "Gastronomie",
      points: [
        "Tischverwaltung & Splitten",
        "Küchen-/Thekenbons",
        "Digitales Trinkgeld & QR-Bestellung",
      ],
    },
    {
      title: "Einzelhandel",
      points: [
        "Varianten & Warengruppen",
        "Inventur & Rabattaktionen",
        "Etikettendruck & Barcodescanner",
      ],
    },
    {
      title: "Dienstleistungen",
      points: [
        "Terminplanung",
        "Leistungspakete & Abos",
        "Rechnungen & Angebote",
      ],
    },
  ]

  return (
    <section id="loesungen" className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="rounded-xl bg-white border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
              <ul className="mt-4 space-y-2 text-slate-600 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
