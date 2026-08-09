import { useEffect, useState, Suspense } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'

import Projects from './components/Projects.jsx'
import Certificates from './components/Certificates.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function PageLoader() {
  return (
    <div className="min-h-[40vh] w-full grid place-items-center">
      <span className="note text-2xl text-pencil animate-pulse">sketching…</span>
    </div>
  )
}

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const onScroll = () => setShowBackToTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main id="main-content" className="relative w-full overflow-x-clip">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-5 focus:py-2 focus:bg-postit focus:text-ink focus:font-bold focus:rounded-md focus:border-2 focus:border-ink"
      >
        Skip to content
      </a>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Suspense fallback={<PageLoader />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<PageLoader />}>
        <Certificates />
      </Suspense>
      <Suspense fallback={<PageLoader />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<PageLoader />}>
        <Footer />
      </Suspense>
      <div
        className={`fixed bottom-6 right-6 z-40 transition-opacity duration-300 ${showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="w-12 h-12 rounded-full border-2 border-ink bg-postit grid place-items-center sketch-shadow-sm hover:-translate-y-1 transition-transform cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>
    </main>
  )
}
