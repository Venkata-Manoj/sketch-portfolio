import { motion } from 'framer-motion'

/* ═══════════════════════════════════════════════════════════════
   DOODLE PRIMITIVES
   Hand-drawn SVG ornaments. Use motion.path with pathLength to
   "draw" strokes on scroll for a real sketching feel.
   ═══════════════════════════════════════════════════════════════ */

const draw = {
  initial: { pathLength: 0, opacity: 0 },
  whileInView: { pathLength: 1, opacity: 1 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.8, ease: 'easeInOut' },
}

/** Squiggly underline — animates itself in like a pen stroke */
export function Squiggle({ className = '', stroke = '#E8544D', strokeWidth = 2.5, width = 120 }) {
  return (
    <svg
      width={width}
      height="10"
      viewBox="0 0 120 10"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <motion.path
        d="M2 7 C 12 2, 22 9, 32 5 S 52 8, 62 4 S 82 9, 92 5 S 112 3, 118 6"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        {...draw}
      />
    </svg>
  )
}

/** Hand-cut rectangle frame — 3 slightly offset strokes along the perimeter, like pencil oversketching */
export function SketchFrame({ className = '', stroke = '#2B2B2B', strokeWidth = 2 }) {
  return (
    <svg
      className={`absolute inset-0 h-full w-full pointer-events-none ${className}`}
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M 1.5 2 C 35 1.2, 65 1.8, 98.5 2.5 C 98.8 35, 98.2 65, 98.5 98 C 65 98.5, 35 98.2, 1.5 98 C 1.2 65, 1.8 35, 1.5 2 Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        {...draw}
      />
      <motion.path
        d="M 2.5 3 C 38 2.2, 68 2.8, 97.5 3.5 C 97.8 38, 97.2 68, 97.5 97 C 68 97.5, 38 97.2, 2.5 97 C 2.2 68, 2.8 38, 2.5 3 Z"
        stroke={stroke}
        strokeWidth={strokeWidth * 0.7}
        strokeLinecap="round"
        strokeDasharray="200 40"
        {...draw}
        transition={{ duration: 1.1, ease: 'easeInOut' }}
      />
      <motion.path
        d="M 3.5 4 C 40 3.2, 70 3.8, 96.5 4.5 C 96.8 40, 96.2 70, 96.5 96 C 70 96.5, 40 96.2, 3.5 96 C 3.2 70, 3.8 40, 3.5 4 Z"
        stroke={stroke}
        strokeWidth={strokeWidth * 0.5}
        strokeLinecap="round"
        strokeDasharray="40 120"
        {...draw}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
      />
    </svg>
  )
}

/** Washi tape strip */
export function Tape({ className = '', color = 'rgba(232, 145, 58, 0.45)', width = 96, height = 28 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      className={className}
    >
      <motion.rect
        x="0"
        y="0"
        width={width}
        height={height}
        rx="3"
        fill={color}
        stroke="rgba(43,43,43,0.35)"
        strokeWidth="1"
        strokeDasharray="4 3"
        initial={{ opacity: 0, scale: 1.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />
      <motion.path
        d={`M4 ${height * 0.55} L ${width - 4} ${height * 0.45}`}
        stroke="rgba(43,43,43,0.18)"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </svg>
  )
}

/** Hand-drawn curved arrow (pointing right or left) */
export function DoodleArrow({ className = '', direction = 'right', stroke = '#3D6FB4', strokeWidth = 2.5 }) {
  const flip = direction === 'left' ? 'scale(-1,1)' : ''
  return (
    <svg
      width="90"
      height="30"
      viewBox="0 0 90 30"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ transform: flip }}
    >
      <motion.path
        d="M4 8 C 30 20, 52 20, 80 10"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        {...draw}
      />
      <motion.path
        d="M72 4 L 82 10 L 72 16"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...draw}
        transition={{ duration: 0.4, delay: 0.6, ease: 'easeInOut' }}
      />
    </svg>
  )
}

/** Four-point sparkle / star doodle */
export function Sparkle({ className = '', stroke = '#E8913A', strokeWidth = 2, size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <motion.path
        d="M12 2 C 12.5 8, 14.5 11, 22 12 C 14.5 13, 12.5 16, 12 22 C 11.5 16, 9.5 13, 2 12 C 9.5 11, 11.5 8, 12 2 Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        {...draw}
      />
    </svg>
  )
}

/** Rubber stamp — dashed circle + text, slightly rotated */
export function Stamp({ className = '', label = 'OPEN TO WORK', color = '#B23A48' }) {
  return (
    <svg
      width="120"
      height="56"
      viewBox="0 0 120 56"
      aria-hidden="true"
      className={className}
    >
      <motion.g
        initial={{ opacity: 0, scale: 2.2, rotate: -14 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -7 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 160, damping: 12, delay: 0.3 }}
      >
        <rect x="4" y="8" width="112" height="40" rx="20" fill="none" stroke={color} strokeWidth="2.2" strokeDasharray="6 4" />
        <rect x="10" y="14" width="100" height="28" rx="14" fill="none" stroke={color} strokeWidth="1.4" opacity="0.55" strokeDasharray="3 5" />
        <text
          x="60"
          y="33"
          textAnchor="middle"
          fontFamily="Caveat, cursive"
          fontWeight="700"
          fontSize="17"
          fill={color}
          letterSpacing="2"
        >
          {label}
        </text>
      </motion.g>
    </svg>
  )
}

/** Jagged page-tear divider — a torn paper strip */
export function Tear({ className = '', color = '#F3ECDD' }) {
  return (
    <svg
      width="120"
      height="22"
      viewBox="0 0 120 22"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0 6 L 8 2 L 15 7 L 24 3 L 33 8 L 41 3 L 50 7 L 58 2 L 67 7 L 76 3 L 84 8 L 92 3 L 101 7 L 110 3 L 120 6 L 120 22 L 0 22 Z"
        fill={color}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
    </svg>
  )
}

/** Page number scribble, e.g. "01" */
export function PageNo({ className = '', n = '01' }) {
  return (
    <span className={`note font-bold text-ink/40 ${className}`} style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)' }}>
      — {n} —
    </span>
  )
}
