import { motion } from 'framer-motion'
import { MapPin, SquareCheck } from 'lucide-react'
import { PageNo, Squiggle, Sparkle, Tape, Stamp, SketchFrame } from './doodles'
import { PROFILE, SKILL_GROUPS } from '../data'

/* marker colors for skill-group headings, cycled by index */
const GROUP_COLORS = ['bg-marker-red', 'bg-marker-blue', 'bg-marker-green', 'bg-marker-orange']

/* split the bio once so the highlighted phrase stays data-driven */
const [bioBefore, bioAfter] = PROFILE.bio.split('production-grade quality')

export default function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="relative px-5 sm:px-8 py-24 sm:py-28 bg-paper overflow-hidden"
    >
      {/* faint graph-paper pad behind the page */}
      <div aria-hidden="true" className="absolute inset-0 graph opacity-[0.15]" />
      <Sparkle
        className="absolute top-28 right-8 sm:right-16 animate-float-doodle"
        stroke="#E8913A"
        size={28}
      />
      <Sparkle
        className="absolute bottom-44 left-8 animate-float-doodle"
        stroke="#3D6FB4"
        size={20}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* — page header — */}
        <header className="flex flex-col items-center text-center mb-14">
          <PageNo n="01" />
          <h2
            className="hand-title font-script text-ink leading-none"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)' }}
          >
            About me
          </h2>
          <Squiggle className="mx-auto mt-2" stroke="#E8544D" />
          <p className="note text-2xl text-pencil mt-4">the person behind the doodles</p>
        </header>

        {/* — photo + bio — */}
        <div className="grid lg:grid-cols-[2fr_3fr] gap-14 items-start">
          {/* polaroid */}
          <motion.div
            className="relative max-w-sm mx-auto lg:mx-0 bg-paper-light border-2 border-ink p-3 pb-10 sketch-shadow-lg rotate-[-2deg]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Tape className="absolute -top-4 left-1/2 -translate-x-1/2 rotate-3" />
            <img
              src="/Manoj.jpeg"
              alt="Ballani Venkata Manoj"
              className="rounded-sm w-full aspect-[4/5] object-cover"
            />
            <p className="note text-xl text-pencil mt-3 text-center">that's me — B.V. Manoj ✌️</p>
            <div className="flex justify-center mt-4">
              <Stamp className="rotate-[-6deg] scale-90" label="OPEN TO WORK" />
            </div>
          </motion.div>

          {/* bio + facts */}
          <div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span
                aria-hidden="true"
                className="absolute -left-1 -top-7 font-script text-6xl text-marker-red/60 leading-none select-none"
              >
                &quot;
              </span>
              <p className="font-body text-lg leading-relaxed text-ink/90 pl-8 sm:pl-10">
                {bioBefore}
                <span className="highlight">production-grade quality</span>
                {bioAfter}
              </p>
            </motion.div>

            {/* margin-note chips */}
            <motion.div
              className="mt-5 flex flex-wrap gap-2 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="flex items-center gap-1.5 font-body text-base text-ink/80">
                <MapPin size={16} className="text-marker-red shrink-0" />
                {PROFILE.location}
              </span>
              <span className="note text-xl text-marker-blue">
                open to: {PROFILE.openTo.join(' · ')}
              </span>
            </motion.div>

            {/* domain chips */}
            <motion.div
              className="mt-3 flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {PROFILE.domains.map((domain) => (
                <span
                  key={domain}
                  className="border-2 border-ink/60 rounded-full px-3 py-0.5 font-hand text-sm bg-paper-light"
                >
                  {domain}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href={`mailto:${PROFILE.email}`}
                className="marker-btn sketch-shadow cursor-pointer border-2 border-ink bg-marker-teal text-paper-light font-hand text-lg px-6 py-2.5 rounded-md hover:-translate-y-0.5"
              >
                Collaborate →
              </a>
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noreferrer"
                className="marker-btn sketch-shadow cursor-pointer border-2 border-ink bg-paper-light text-ink font-hand text-lg px-6 py-2.5 rounded-md hover:-translate-y-0.5"
              >
                view resume
              </a>
            </motion.div>
          </div>
        </div>

        {/* — skills checklist — */}
        <motion.div
          className="sheet relative p-8 md:p-12 sketch-shadow rotate-[0.5deg] mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SketchFrame stroke="#2B2B2B" className="pointer-events-none opacity-30 z-0" />
          <div className="relative z-10">
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-10">
              <h3 className="hand-title font-script text-3xl text-ink">things I can do</h3>
              <span className="note text-marker-orange text-2xl">✓ 36+ skills</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {SKILL_GROUPS.map((group, i) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <h4 className="font-hand text-2xl text-ink flex items-center gap-2 mb-4">
                    <span
                      aria-hidden="true"
                      className={`w-3 h-3 rounded-[2px] rotate-12 inline-block ${GROUP_COLORS[i % GROUP_COLORS.length]}`}
                    />
                    {group.label}
                  </h4>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <SquareCheck size={16} className="text-marker-green mt-1 shrink-0" />
                        <span className="font-body text-ink/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
