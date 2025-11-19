import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Solutions from './components/Solutions'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Solutions />
        <CTA />
      </main>
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} DailyPOS Österreich</p>
            <div className="flex gap-4">
              <a href="#leistungen" className="hover:text-slate-700">Leistungen</a>
              <a href="#loesungen" className="hover:text-slate-700">Lösungen</a>
              <a href="#kontakt" className="hover:text-slate-700">Kontakt</a>
              <a href="/test" className="hover:text-slate-700">Systemtest</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
