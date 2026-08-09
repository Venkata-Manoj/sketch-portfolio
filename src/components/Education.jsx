import { motion } from 'framer-motion'
import { PageNo, Squiggle, Sparkle, Tape } from './doodles'
import { EDUCATION } from '../data'

export default function Education() {
  return (
    <section
      id="education"
      aria-label="Education"
      className="relative px-5 sm:px-8 py-24 sm:py-28 bg-paper-deep overflow-hidden"
    >
      {/* ruled notebook lines behind the page */}
      <div aria-hidden="true" className="absolute inset-0 ruled opacity-50" />

      <div className="relative max-w-4xl mx-auto">
        {/* — page header — */}
        <header className="flex flex-col items-center text-center mb-14">
          <PageNo n="02" />
          <h2
            className="hand-title font-script text-ink leading-none"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)' }}
          >
            Education
          </h2>
          <Squiggle className="mx-auto mt-2" stroke="#3D6FB4" />
          <p className="note text-2xl text-pencil mt-4">my report cards, so far</p>
        </header>

        {/* dashed timeline spine */}
        <div
          aria-hidden="true"
          className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 border-l-4 border-dashed border-ink/20"
        />

        {/* report cards */}
        <div className="relative grid gap-16">
          {EDUCATION.map((item, i) => (
            <motion.article
              key={item.id}
              className={`sheet sketch-shadow-lg overflow-hidden ${
                i % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="sm:grid sm:grid-cols-[1fr_1.6fr]">
                {/* photo side */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.institution}
                    className="w-full h-44 sm:h-full object-cover border-b-2 sm:border-b-0 sm:border-r-2 border-ink/30"
                  />
                  <Tape
                    className="absolute top-3 -left-4 rotate-[-6deg]"
                    color="rgba(61, 111, 180, 0.35)"
                  />
                </div>
                {/* marks side */}
                <div className="p-7">
                  <span className="note text-xl text-marker-blue">({item.year})</span>
                  <h3 className="hand-title font-script text-3xl text-ink mt-1">{item.title}</h3>
                  <p className="font-body font-bold text-marker-teal mt-1">{item.institution}</p>
                  <p className="font-body text-ink/75 leading-relaxed mt-3">{item.description}</p>
                  <div className="mt-5">
                    <span className="inline-block rotate-[-3deg] border-2 border-dashed border-stamp text-stamp font-script text-2xl px-5 py-1.5 bg-paper-light rounded-md">
                      {item.marks}
                    </span>
                  </div>
                  <p className="note text-xl text-marker-red mt-4">{item.note}</p>
                </div>
              </div>
              <Sparkle
                className="absolute -top-5 -right-5 rotate-12 animate-float-doodle"
                stroke="#E8913A"
                size={28}
              />
            </motion.article>
          ))}
        </div>

        {/* footer note */}
        <p className="mt-12 text-center note text-2xl text-pencil">more pages to come… 📖</p>
      </div>
    </section>
  )
}
