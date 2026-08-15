import { useState } from 'react'
import { Mail, Github, Linkedin, Twitter, Instagram, MapPin, Send, Sparkle } from 'lucide-react'
import { PROFILE } from '../data'
import { isOwnerEmail } from '../lib/contactGuard'
import { PageNo, Squiggle, Tape, DoodleArrow, Stamp } from './doodles'

/* ═══════════════════════════════════════════════════════════════
   CONTACT — "leave a note" (post-it form + address book)
   ═══════════════════════════════════════════════════════════════ */

const FORMSPREE_URL = 'https://formspree.io/f/xaqzelqw'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const submittedEmail = formData.get('email')?.toString().trim() || ''

    if (isOwnerEmail(submittedEmail, PROFILE.email)) {
      setStatus('email-mismatch')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('Formspree rejected the note')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" aria-label="Contact" className="relative overflow-hidden bg-paper py-24 sm:py-28">
      {/* faint ruled-notebook overlay */}
      <div aria-hidden="true" className="ruled pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* header */}
        <header className="mb-14 text-center">
          <PageNo n="05" />
          <h2 className="hand-title leading-none text-ink" style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)' }}>
            Say hello
          </h2>
          <Squiggle stroke="#E8913A" width={140} className="mx-auto mt-3" />
          <p className="note mt-4 text-2xl text-pencil">leave a note — I read every one of these</p>
        </header>

        <div className="grid items-start gap-14 lg:grid-cols-2">
          {/* post-it note form */}
          <div className="relative rotate-[-1.5deg] rounded-sm border-2 border-ink bg-postit p-6 sketch-shadow-lg md:p-8">
            <Tape className="absolute -top-3 right-6 rotate-45" color="rgba(232, 145, 58, 0.45)" width={72} height={22} />
            <h3 className="font-hand text-3xl text-ink">
              hey there! <Sparkle size={24} stroke="#E8544D" className="inline-block" aria-hidden="true" />
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="contact-name" className="font-hand text-lg text-ink">your name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="scribble it here…"
                  className="w-full border-b-2 border-ink/40 bg-transparent py-1.5 font-body text-ink placeholder:text-ink/35 focus:border-ink focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="font-hand text-lg text-ink">your email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="so I can write back"
                  className="w-full border-b-2 border-ink/40 bg-transparent py-1.5 font-body text-ink placeholder:text-ink/35 focus:border-ink focus:outline-none"
                />
                <p className="mt-1 font-hand text-sm text-pencil">
                  * Please enter your own email — do not enter my email ({PROFILE.email}) in the form.
                </p>
              </div>
              <div>
                <label htmlFor="contact-message" className="font-hand text-lg text-ink">the note</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  required
                  placeholder="tell me anything…"
                  className="w-full resize-none border-b-2 border-ink/40 bg-transparent py-1.5 font-body text-ink placeholder:text-ink/35 focus:border-ink focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="marker-btn w-full cursor-pointer rounded-md border-2 border-ink bg-marker-red py-2.5 font-hand text-xl text-paper-light sketch-shadow disabled:cursor-wait disabled:opacity-70"
              >
                {status === 'sending' ? 'sending…' : 'send the note'}
                <Send size={16} className="ml-2 inline-block" aria-hidden="true" />
              </button>

              {/* status (announced to screen readers) */}
              <div aria-live="polite">
                {status === 'sent' && (
                  <div className="mt-4 border-2 border-marker-green bg-paper-light p-3 font-hand text-lg text-marker-green">
                    message delivered — I'll write back within 24–48h ✓
                  </div>
                )}
                {status === 'email-mismatch' && (
                  <div className="mt-4 border-2 border-marker-red bg-paper-light p-3 font-hand text-lg text-marker-red">
                    ⚠️ Please do not enter my email in this form. Please use your own email.
                  </div>
                )}
                {status === 'error' && (
                  <div className="mt-4 border-2 border-marker-red bg-paper-light p-3 font-hand text-lg text-marker-red">
                    Check your email once
                  </div>
                )}
              </div>
            </form>

            <p className="note mt-4 text-xl text-pencil">psst — responses within 24-48 hours</p>
          </div>

          {/* address book */}
          <div className="rotate-[1deg] rounded-md border-2 border-ink bg-paper-light p-7 sketch-shadow-lg">
            <h3 className="font-hand text-3xl text-ink">
              address book <DoodleArrow className="ml-2 inline-block" direction="right" stroke="#E8913A" />
            </h3>

            <div className="mt-4">
              <a href={`mailto:${PROFILE.email}`} className="group flex items-center gap-4 border-b-2 border-dashed border-ink/15 py-3 transition-all last:border-0 hover:-translate-x-1">
                <Mail size={20} className="shrink-0 text-ink/60" aria-hidden="true" />
                <span className="font-body font-bold text-ink">Email</span>
                <span className="note ml-auto text-lg text-pencil">{PROFILE.email}</span>
              </a>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 border-b-2 border-dashed border-ink/15 py-3 transition-all last:border-0 hover:-translate-x-1">
                <Github size={20} className="shrink-0 text-ink/60" aria-hidden="true" />
                <span className="font-body font-bold text-ink">GitHub</span>
                <span className="note ml-auto text-lg text-pencil">@Venkata-Manoj</span>
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 border-b-2 border-dashed border-ink/15 py-3 transition-all last:border-0 hover:-translate-x-1">
                <Linkedin size={20} className="shrink-0 text-ink/60" aria-hidden="true" />
                <span className="font-body font-bold text-ink">LinkedIn</span>
                <span className="note ml-auto text-lg text-pencil">/in/venkata-manoj</span>
              </a>
              <a href={PROFILE.twitter} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 border-b-2 border-dashed border-ink/15 py-3 transition-all last:border-0 hover:-translate-x-1">
                <Twitter size={20} className="shrink-0 text-ink/60" aria-hidden="true" />
                <span className="font-body font-bold text-ink">X / Twitter</span>
                <span className="note ml-auto text-lg text-pencil">@Manoj13016367</span>
              </a>
              <a href={PROFILE.instagram} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 border-b-2 border-dashed border-ink/15 py-3 transition-all last:border-0 hover:-translate-x-1">
                <Instagram size={20} className="shrink-0 text-ink/60" aria-hidden="true" />
                <span className="font-body font-bold text-ink">Instagram</span>
                <span className="note ml-auto text-lg text-pencil">@call_me_v_m</span>
              </a>
              <div className="flex items-center gap-4 border-b-2 border-dashed border-ink/15 py-3 last:border-0">
                <MapPin size={20} className="shrink-0 text-ink/60" aria-hidden="true" />
                <span className="font-body font-bold text-ink">Location</span>
                <span className="note ml-auto text-lg text-pencil">Chennai, India — open to Hyderabad · Bangalore · Mumbai · Vizag · Remote</span>
              </div>
            </div>

            <Stamp label="OPEN TO WORK" className="mx-auto mt-6 block" />
            <p className="note mt-3 text-center text-xl text-pencil">recruiters welcome!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
