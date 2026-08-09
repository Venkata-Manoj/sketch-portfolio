import { useEffect, useState } from 'react'
import { ArrowUp, Sparkle } from 'lucide-react'
import { NAV_ITEMS } from '../data'

/* ═══════════════════════════════════════════════════════════════
   FOOTER — the last page
   ═══════════════════════════════════════════════════════════════ */

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  /* show the back-to-top button after a good scroll */
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer className="relative border-t-2 border-ink/15 bg-paper-deep py-10 text-center">
      <p className="note text-3xl text-ink/70">the end</p>
      <Sparkle size={20} stroke="#E8544D" className="mx-auto mt-1 inline-block" aria-hidden="true" />

      <nav aria-label="Footer" className="mt-6">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="font-hand mx-3 text-lg text-ink/60 transition-colors hover:text-ink"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <p className="note mt-6 text-xl text-pencil">sketched with ♥ by B V Manoj</p>
      <p className="font-body mt-2 text-sm text-pencil">
        © {new Date().getFullYear()} Ballani Venkata Manoj — all rights reserved
      </p>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 grid h-12 w-12 cursor-pointer place-items-center rounded-full border-2 border-ink bg-postit/90 backdrop-blur-sm sketch-shadow-sm transition-all hover:-translate-y-1 ${showTop ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
      >
        <ArrowUp size={20} aria-hidden="true" />
      </button>
    </footer>
  )
}
