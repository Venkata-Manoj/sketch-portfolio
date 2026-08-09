import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Squiggle, Sparkle } from './doodles'
import { PROFILE, NAV_ITEMS } from '../data'

/* ── NAV ── */

const scrollTo = (id, retries = 5) => {
  const element = document.getElementById(id)
  if (element) {
    const navOffset = 70
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const offsetPosition = Math.max(0, elementPosition - navOffset)
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  } else if (retries > 0) {
    setTimeout(() => scrollTo(id, retries - 1), 100)
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map(({ id }) => id)

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140
      const windowHeight = window.innerHeight
      const fullHeight = document.documentElement.scrollHeight

      if (window.scrollY + windowHeight >= fullHeight - 80) {
        setActive('contact')
        return
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const element = document.getElementById(id)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActive(id)
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const go = (id) => {
    setOpen(false)
    scrollTo(id)
  }

  const goTop = () => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled ? 'border-b-2 border-ink/80 bg-paper/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="flex h-16 items-center justify-between gap-6 px-4 md:px-8">
        {/* logo — hand-drawn monogram */}
        <button
          onClick={goTop}
          aria-label="Scroll to top"
          className="flex cursor-pointer items-center gap-1.5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-paper-light font-hand text-lg font-bold text-ink">
            M.
          </span>
          <Sparkle stroke="#E8544D" size={16} />
        </button>

        {/* desktop links */}
        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {NAV_ITEMS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`relative cursor-pointer font-hand text-lg lowercase transition-colors ${
                active === id ? 'text-ink' : 'text-ink/70 hover:text-ink'
              }`}
            >
              {label}
              {active === id && (
                <Squiggle
                  width={56}
                  stroke="#E8544D"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* resume — desktop */}
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noreferrer"
            className="marker-btn hidden rounded-md border-2 border-ink bg-paper-light px-4 py-1.5 font-hand text-sm uppercase tracking-wide sketch-shadow-sm transition hover:-translate-y-0.5 md:inline-block"
          >
            resume
          </a>

          {/* hamburger — mobile */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Menu"
            className="cursor-pointer p-1 text-ink md:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* mobile dropdown — post-it panel */}
      {open && (
        <div className="absolute inset-x-4 top-full mt-3 rounded-sm border-2 border-ink bg-postit p-4 sketch-shadow-lg md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="cursor-pointer text-left font-hand text-xl lowercase text-ink"
              >
                {label}
              </button>
            ))}
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noreferrer"
              className="marker-btn w-fit rounded-md border-2 border-ink bg-paper-light px-4 py-1.5 font-hand text-sm uppercase tracking-wide sketch-shadow-sm transition hover:-translate-y-0.5"
            >
              resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
