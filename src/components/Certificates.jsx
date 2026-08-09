import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { CERTS } from '../data'
import { PageNo, Squiggle, Tape, Sparkle } from './doodles'

/* ═══════════════════════════════════════════════════════════════
   CERTIFICATES — "the sticker page"
   ═══════════════════════════════════════════════════════════════ */

const TILTS = ['rotate-[-2deg]', 'rotate-[1.5deg]', 'rotate-[-1deg]', 'rotate-[2deg]']

const tileVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut', delay: (i % 4) * 0.12 },
  }),
}

export default function Certificates() {
  const [selected, setSelected] = useState(null)

  /* ESC closes the modal; lock body scroll while it's open */
  useEffect(() => {
    if (!selected) return
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <section id="certificates" aria-label="Certificates" className="relative overflow-hidden bg-paper-deep py-24 sm:py-28">
      {/* graph-paper backdrop + floating sparkles */}
      <div aria-hidden="true" className="graph pointer-events-none absolute inset-0 opacity-50" />
      <Sparkle className="animate-float-doodle absolute left-[8%] top-24" stroke="#E8913A" size={28} />
      <Sparkle className="animate-float-doodle absolute right-[10%] top-40" stroke="#2E8B8B" size={22} />
      <Sparkle className="animate-float-doodle absolute bottom-24 left-[12%]" stroke="#E8544D" size={20} />
      <Sparkle className="animate-float-doodle absolute bottom-32 right-[6%]" stroke="#3D6FB4" size={26} />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* header */}
        <header className="mb-14 text-center">
          <PageNo n="04" />
          <h2 className="hand-title leading-none text-ink" style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)' }}>
            Certificates
          </h2>
          <Squiggle stroke="#2E8B8B" width={140} className="mx-auto mt-3" />
          <p className="note mt-4 text-2xl text-pencil">the sticker page — click any to peel it open</p>
        </header>

        {/* sticker gallery */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {CERTS.map((item, i) => (
            <motion.button
              key={item.title + item.org}
              type="button"
              onClick={() => setSelected(item)}
              aria-label={`${item.title} from ${item.org}, click to view`}
              custom={i}
              variants={tileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`group relative cursor-pointer rounded-sm border-2 border-ink bg-paper-light p-2.5 pb-3 text-left sketch-shadow transition-all duration-300 hover:-translate-y-[6px] hover:scale-[1.03] hover:rotate-0 ${TILTS[i % 4]}`}
            >
              <Tape className="absolute -top-3 left-1/2 -translate-x-1/2" color="rgba(232, 145, 58, 0.45)" />
              <img
                src={encodeURI(item.image)}
                alt={`${item.title} certificate`}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full border border-ink/20 object-cover"
              />
              <p className="font-hand mt-2 text-lg leading-tight text-ink">{item.title}</p>
              <p className="note text-base text-pencil">{item.org} · {item.date}</p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* detail modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close modal"
            onClick={() => setSelected(null)}
            className="absolute inset-0 h-full w-full cursor-pointer bg-ink/40"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.title} certificate`}
            className="sketch-shadow-lg relative max-h-[88vh] w-[92vw] max-w-2xl overflow-auto rounded-md border-2 border-ink bg-paper-light p-6"
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute right-4 top-4 cursor-pointer rounded-full border-2 border-ink bg-paper-light p-1.5 hover:bg-paper-deep"
            >
              <X size={18} aria-hidden="true" />
            </button>
            <div className="flex items-center gap-4 pr-10">
              <span
                aria-hidden="true"
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-ink text-2xl"
                style={{ background: selected.badgeColor + '33' }}
              >
                {selected.badge}
              </span>
              <div>
                <h3 className="font-hand text-3xl leading-tight text-ink">{selected.title}</h3>
                <p className="note text-xl text-pencil">{selected.org} · {selected.date}</p>
              </div>
            </div>
            <img
              src={encodeURI(selected.image)}
              alt={`${selected.title} certificate`}
              className="mt-4 h-auto w-full border border-ink/20"
            />
            <a
              href={encodeURI(selected.image)}
              target="_blank"
              rel="noopener noreferrer"
              className="marker-btn mt-5 inline-block rounded-md border-2 border-ink bg-marker-blue px-5 py-2 font-hand text-paper-light sketch-shadow-sm"
            >
              view full certificate ↗
            </a>
          </div>
        </div>
      )}
    </section>
  )
}
