export default function Features() {
  const features = [
    {
      title: "Einfach & schnell",
      desc: "Intuitive Bedienung, kurze Einarbeitung – ideal für neue Mitarbeiter:innen.",
    },
    {
      title: "Rechtssicher",
      desc: "RKSV-konform in Österreich, GoBD in Deutschland, DSGVO-konform.",
    },
    {
      title: "Modular erweiterbar",
      desc: "Von der einfachen Kasse bis zum Filialsystem – jederzeit ausbaufähig.",
    },
    {
      title: "Cloud-Backoffice",
      desc: "Umsätze, Artikel, Berichte – jederzeit online im Blick.",
    },
    {
      title: "Gastronomie & Handel",
      desc: "Tischverwaltung, Küchenbons, Warengruppen, Varianten, Preislisten u.v.m.",
    },
    {
      title: "Persönlicher Support",
      desc: "Einrichtung, Schulung und Support aus einer Hand.",
    },
  ]

  return (
    <section id="leistungen" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Leistungen & Vorteile</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Alles, was Sie für einen reibungslosen Betrieb brauchen – von der Kasse über Zahlungsabwicklung bis zur Auswertung.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
