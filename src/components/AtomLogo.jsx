// Elemento de assinatura visual: átomo com órbitas animadas em diferentes velocidades/direções
export default function AtomLogo({ size = 40 }) {
  return (
    <svg
      className="brand-mark"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="6" fill="var(--cyan)" filter="url(#glow)" />
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g className="atom-spin">
        <ellipse cx="50" cy="50" rx="44" ry="16" fill="none" stroke="var(--cyan)" strokeWidth="1.6" opacity="0.85" />
        <circle className="electron-dot" cx="94" cy="50" r="3.2" fill="var(--cyan)" />
      </g>
      <g className="atom-spin-rev" style={{ transformOrigin: '50px 50px' }}>
        <ellipse cx="50" cy="50" rx="44" ry="16" fill="none" stroke="var(--violet)" strokeWidth="1.6" opacity="0.85" transform="rotate(60 50 50)" />
        <circle className="electron-dot" cx="50" cy="50" r="3.2" fill="var(--violet)" transform="rotate(60 50 50) translate(44 0)" />
      </g>
      <g className="atom-spin-slow" style={{ transformOrigin: '50px 50px' }}>
        <ellipse cx="50" cy="50" rx="44" ry="16" fill="none" stroke="#ffffff" strokeWidth="1.2" opacity="0.5" transform="rotate(-60 50 50)" />
        <circle cx="50" cy="50" r="2.6" fill="#ffffff" opacity="0.8" transform="rotate(-60 50 50) translate(44 0)" />
      </g>
    </svg>
  )
}
