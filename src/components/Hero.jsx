import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { DoodleArrow, Sparkle, Squiggle, Tape } from './doodles'
import { PROFILE } from '../data'

/* ── HERO — notebook cover page ── */

const fade = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-paper"
    >
      {/* decorations */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="graph absolute inset-0 opacity-[0.35]" />
        <Tape className="absolute left-5 top-5 -rotate-6" color="rgba(232,145,58,0.45)" />
        <Tape className="absolute right-5 top-8 rotate-6" color="rgba(61,111,180,0.35)" />
        <div className="absolute left-[10%] top-[26%] animate-float-doodle">
          <Sparkle stroke="#E8913A" size={28} />
        </div>
        <div className="absolute right-[14%] top-[22%] animate-float-doodle" style={{ animationDelay: '-2s' }}>
          <Sparkle stroke="#E8544D" size={22} />
        </div>
        <div className="absolute bottom-[24%] left-[16%] animate-float-doodle" style={{ animationDelay: '-4s' }}>
          <Sparkle stroke="#3D6FB4" size={18} />
        </div>
        <div className="absolute bottom-[30%] right-[10%] animate-float-doodle" style={{ animationDelay: '-1s' }}>
          <Sparkle stroke="#E8913A" size={26} />
        </div>
        <DoodleArrow className="absolute left-[6%] top-[45%]" stroke="#3D6FB4" />
        <DoodleArrow className="absolute right-[4%] top-[40%]" direction="left" stroke="#E8913A" />
      </div>

      {/* watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-script font-bold text-ink/[0.04]"
        style={{ fontSize: '20rem' }}
      >
        M.
      </span>

      {/* content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-28 pt-28 text-center md:pt-32">
        <motion.p {...fade(0)} className="note flex items-center justify-center gap-3 text-xl text-marker-red">
          <Sparkle stroke="#E8544D" size={18} />
          sketchbook no. 01 — est. 2024
          <Sparkle stroke="#E8544D" size={18} />
        </motion.p>

        <motion.div {...fade(0.15)}>
          <h1
            className="hand-title mt-3 text-ink leading-none"
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}
          >
            {PROFILE.shortName.toUpperCase()}
          </h1>
          <Squiggle width={260} stroke="#E8544D" strokeWidth={3} className="mx-auto -mt-1" />
        </motion.div>

        <motion.p {...fade(0.3)} className="mt-7 font-hand text-xl text-graphite md:text-2xl">
          {PROFILE.roles.map((role, i) => (
            <span key={role}>
              {i > 0 && ' · '}
              <span className={i === 0 ? 'highlight' : ''}>{role}</span>
            </span>
          ))}
        </motion.p>

        <motion.p {...fade(0.45)} className="note relative mx-auto mt-7 max-w-md text-2xl text-pencil">
          a sketchbook of AI experiments, apps & late-night commits.
          <DoodleArrow className="absolute -right-20 top-0 rotate-90 hidden md:block" stroke="#E8544D" />
        </motion.p>

        <motion.div {...fade(0.6)} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {[...PROFILE.domains, 'AI/ML Internships'].map((tag, i) => (
            <span
              key={tag}
              className={`rounded-full border-2 border-ink/70 px-3 py-1 font-hand text-sm ${
                i === 0 ? 'bg-postit' : 'bg-paper-light'
              }`}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div {...fade(0.75)} className="mt-10 flex flex-wrap justify-center gap-5">
          <a
            href={`mailto:${PROFILE.email}`}
            className="marker-btn rounded-md border-2 border-ink bg-marker-red px-8 py-3 font-hand text-xl text-paper-light sketch-shadow transition hover:-translate-y-0.5"
          >
            Get in touch →
          </a>
          <a
            href="#projects"
            className="marker-btn rounded-md border-2 border-ink bg-paper-light px-8 py-3 font-hand text-xl text-ink sketch-shadow transition hover:-translate-y-0.5"
          >
            flip to projects ↓
          </a>
        </motion.div>
      </div>

      {/* scroll cue */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-1.5"
      >
        <span className="note text-xl text-pencil">scroll</span>
        <span className="animate-bob rounded-full border-2 border-ink/60 p-2">
          <ArrowDown size={18} />
        </span>
      </button>
    </section>
  )
}
