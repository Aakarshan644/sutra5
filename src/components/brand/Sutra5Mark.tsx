export default function Sutra5Mark({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      <g stroke="var(--sutra-gold)" strokeWidth="2" opacity="0.85">
        <circle cx="100" cy="62" r="46" />
        <circle cx="139" cy="88" r="46" />
        <circle cx="124" cy="132" r="46" />
        <circle cx="76" cy="132" r="46" />
        <circle cx="61" cy="88" r="46" />
      </g>
      <circle cx="100" cy="104" r="5" fill="var(--sutra-ivory)" />
    </svg>
  );
}
