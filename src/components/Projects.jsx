import { useState } from 'react'
import { motion } from 'framer-motion'
import { PROJECTS, PROFILE } from '../data'
import { DoodleArrow, PageNo, SketchFrame, Sparkle, Squiggle, Tape } from './doodles'

/* Only the first 9 projects make the book; the full archive lives on GitHub */
const FEATURED = PROJECTS.slice(0, 9)

/* Per-column alternation: tilt, tape color, tech chip color */
const TILTS = [-1.2, 1.2, -0.8]
const TAPE_COLORS = ['rgba(232, 145, 58, 0.5)', 'rgba(61, 111, 180, 0.4)', 'rgba(94, 140, 90, 0.4)']
const TECH_COLORS = ['text-marker-blue', 'text-marker-teal', 'text-marker-orange']

const FLOATING_SPARKLES = [
  { className: 'left-[6%] top-20', stroke: '#E8913A', size: 30, delay: '0s' },
  { className: 'right-[8%] top-32', stroke: '#3D6FB4', size: 22, delay: '1.2s' },
  { className: 'left-[10%] top-1/2', stroke: '#E8544D', size: 18, delay: '2.2s' },
  { className: 'right-[12%] top-[55%]', stroke: '#E8913A', size: 26, delay: '0.7s' },
  { className: 'bottom-24 left-[7%]', stroke: '#3D6FB4', size: 24, delay: '1.8s' },
  { className: 'bottom-36 right-[9%]', stroke: '#E8544D', size: 20, delay: '2.8s' },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="projects" aria-label="Projects" className="relative overflow-hidden bg-paper py-24 sm:py-28">
      {/* graph-paper backdrop + floating sparkles */}
      <div className="graph pointer-events-none absolute inset-0 opacity-35" aria-hidden="true" />
      {FLOATING_SPARKLES.map((s, i) => (
        <div
          key={i}
          aria-hidden="true"
          className={`pointer-events-none absolute animate-float-doodle ${s.className}`}
          style={{ animationDelay: s.delay }}
        >
          <Sparkle stroke={s.stroke} size={s.size} />
        </div>
      ))}

      {/* header */}
      <div className="relative mx-auto mb-16 max-w-6xl px-4 text-center">
        <PageNo n="03" />
        <h2
          className="hand-title font-script leading-none text-ink"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)' }}
        >
          Masterpieces
        </h2>
        <Squiggle className="mx-auto mt-4" stroke="#E8544D" width={140} />
        <p className="note mt-4 text-2xl text-pencil">9 sketches, taped into this book. hover to inspect.</p>
        <DoodleArrow className="mx-auto mt-6 rotate-90" />
      </div>

      {/* grid of taped sketch pages */}
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
        {FEATURED.map((project, index) => {
          const tilt = TILTS[index % 3]
          const isHovered = hoveredIndex === index
          return (
            <motion.div
              key={project.number}
              className="h-full"
              initial={{ opacity: 0, y: 30, rotate: tilt }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="sketch-card h-full transition-all duration-300"
                style={{
                  transform: isHovered
                    ? 'rotate(0deg) translateY(-6px) scale(1.01)'
                    : `rotate(${tilt}deg)`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative flex h-full flex-col rounded-md border-2 border-ink bg-paper-light p-6 sketch-shadow-lg">
                  <Tape
                    className="absolute -top-3.5 left-1/2 z-20 -translate-x-1/2 -rotate-2"
                    color={TAPE_COLORS[index % 3]}
                  />
                  <SketchFrame className="pointer-events-none opacity-30 z-0" />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <span className="note text-lg text-pencil">fig. {project.number}</span>
                      <span
                        aria-hidden="true"
                        className="grid h-14 w-14 rotate-6 place-items-center rounded-full border-2 border-ink bg-paper text-3xl sketch-shadow-sm"
                      >
                        {project.emoji}
                      </span>
                    </div>
                    <h3 className="mt-3 font-hand text-3xl leading-tight text-ink">{project.name}</h3>
                    <p className="mt-2 flex-1 font-body text-[0.95rem] leading-relaxed text-ink/75">
                      {project.description}
                    </p>
                    <p className="note mt-2 text-xl text-marker-red">{project.note}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((tech, i) => (
                        <span
                          key={tech}
                          className={`rounded-full border-2 border-ink/40 bg-paper px-2 py-0.5 font-hand text-sm ${TECH_COLORS[i % 3]}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="marker-btn cursor-pointer rounded-md border-2 border-ink bg-paper-light px-4 py-1.5 font-hand text-ink sketch-shadow-sm"
                      >
                        code ↗
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="marker-btn cursor-pointer rounded-md border-2 border-ink bg-marker-green px-4 py-1.5 font-hand text-paper-light sketch-shadow-sm"
                        >
                          live ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}

        {/* kraft envelope CTA */}
        <motion.div
          className="sm:col-span-2 lg:col-span-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="relative flex flex-col items-center justify-between gap-6 rounded-md border-2 border-ink bg-kraft p-8 sketch-shadow-lg md:flex-row md:p-10"
            style={{ transform: 'rotate(0.6deg)' }}
          >
            <Sparkle className="absolute -top-5 right-10 rotate-12" stroke="#B23A48" size={36} />
            <div>
              <h3 className="font-hand text-3xl text-ink">wanna see the whole archive?</h3>
              <p className="note mt-1 text-2xl text-ink/70">20+ repos · 163 stars · more doodles every week</p>
            </div>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="marker-btn cursor-pointer rounded-md border-2 border-ink bg-marker-red px-8 py-3 font-hand text-2xl text-paper-light sketch-shadow"
            >
              github ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
