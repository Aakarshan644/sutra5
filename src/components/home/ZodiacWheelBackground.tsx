export default function ZodiacWheelBackground() {
  const segments = 5;
  const glyphs = ['✦', '☙', '⟁', '☵', '⚹']; // simple abstract marks for the 5 traditions

  return (
    <svg
      viewBox="0 0 400 400"
      className="absolute inset-0 m-auto w-[560px] h-[560px] opacity-[0.6] animate-[spin_140s_linear_infinite]"
    >
      <defs>
        <radialGradient id="wheelGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C7A567" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#C7A567" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="190" fill="none" stroke="#C7A567" strokeWidth="1" />
      <circle cx="200" cy="200" r="160" fill="none" stroke="#8A6840" strokeWidth="0.7" />
      <circle cx="200" cy="200" r="120" fill="none" stroke="#C7A567" strokeWidth="0.7" />

      {/* tick marks around the outer ring */}
      {Array.from({ length: 60 }).map((_, i) => {
        const angle = (i / 60) * 360;
        const rad = (angle * Math.PI) / 180;
        const x1 = 200 + 190 * Math.cos(rad);
        const y1 = 200 + 190 * Math.sin(rad);
        const x2 = 200 + 182 * Math.cos(rad);
        const y2 = 200 + 182 * Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C7A567" strokeWidth="0.6" />;
      })}

      {/* 5 spoke divisions + glyph per tradition */}
      {Array.from({ length: segments }).map((_, i) => {
        const angle = (i / segments) * 360 - 90;
        const rad = (angle * Math.PI) / 180;
        const x2 = 200 + 160 * Math.cos(rad);
        const y2 = 200 + 160 * Math.sin(rad);
        const gx = 200 + 140 * Math.cos(rad);
        const gy = 200 + 140 * Math.sin(rad);
        return (
          <g key={i}>
            <line x1="200" y1="200" x2={x2} y2={y2} stroke="#8A6840" strokeWidth="0.6" />
            <text x={gx} y={gy} textAnchor="middle" fontSize="14" fill="#C7A567">{glyphs[i]}</text>
          </g>
        );
      })}

      <circle cx="200" cy="200" r="50" fill="url(#wheelGlow)" />
    </svg>
  );
}
