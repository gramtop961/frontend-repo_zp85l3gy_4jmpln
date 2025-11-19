export default function CTA() {
  return (
    <section id="kontakt" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Kostenlose Beratung & individuelles Angebot</h3>
              <p className="mt-3 text-white/90">Hinterlassen Sie Ihre Kontaktdaten – wir melden uns kurzfristig per Telefon oder E‑Mail.</p>
              <p className="mt-4 text-sm text-white/70">Österreichweit verfügbar • Schnelle Einrichtung • Persönlicher Support</p>
            </div>
            <form className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input required placeholder="Vor- und Nachname" className="w-full rounded-md bg-white/10 border border-white/20 px-4 py-2.5 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"/>
                <input required type="tel" placeholder="Telefon" className="w-full rounded-md bg-white/10 border border-white/20 px-4 py-2.5 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"/>
              </div>
              <input required type="email" placeholder="E‑Mail" className="w-full rounded-md bg-white/10 border border-white/20 px-4 py-2.5 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"/>
              <textarea rows="3" placeholder="Ihr Anliegen (optional)" className="w-full rounded-md bg-white/10 border border-white/20 px-4 py-2.5 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"></textarea>
              <button type="submit" className="w-full md:w-auto inline-flex justify-center rounded-md bg-white text-blue-700 font-semibold px-5 py-2.5 hover:bg-blue-50 transition-colors">Beratung anfordern</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
