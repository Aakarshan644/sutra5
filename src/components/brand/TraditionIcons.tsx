type IconProps = { size?: number };

export function VedicIcon({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="var(--sutra-gold)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="8" width="48" height="48" rx="2" />
      <line x1="8" y1="8" x2="56" y2="56" />
      <line x1="56" y1="8" x2="8" y2="56" />
      <line x1="32" y1="8" x2="32" y2="56" />
      <line x1="8" y1="32" x2="56" y2="32" />
    </svg>
  );
}

export function PalmistryIcon({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="var(--sutra-gold)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 58 C16 58 14 52 14 44 L14 24 C14 21 18 21 18 24 L18 38" />
      <path d="M18 24 L18 16 C18 13 22 13 22 16 L22 34" />
      <path d="M22 16 L22 12 C22 9 26 9 26 12 L26 34" />
      <path d="M26 14 C26 11 30 11 30 14 L30 34" />
      <path d="M30 20 C30 17 34 17 34 20 L34 40 C34 52 28 58 20 58 Z" />
      <path d="M18 30 Q24 33 30 30" strokeWidth="1" />
      <path d="M18 36 Q25 40 32 37" strokeWidth="1" />
    </svg>
  );
}

export function BabylonianIcon({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="var(--sutra-gold)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="14" width="40" height="36" rx="1.5" />
      <line x1="18" y1="22" x2="26" y2="22" />
      <line x1="18" y1="28" x2="30" y2="28" />
      <line x1="18" y1="34" x2="24" y2="34" />
      <path d="M38 20 L41 27 L48 27 L42.5 31.5 L44.5 39 L38 34.5 L31.5 39 L33.5 31.5 L28 27 L35 27 Z" strokeWidth="1.1" />
    </svg>
  );
}

export function ChineseIcon({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="var(--sutra-gold)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 10 C44 10 50 20 50 30 C50 44 42 54 32 54 C22 54 14 44 14 30 C14 20 20 10 32 10 Z" />
      <line x1="24" y1="27" x2="29" y2="27" />
      <line x1="35" y1="27" x2="40" y2="27" />
      <path d="M30 34 Q32 36 34 34" strokeWidth="1" />
      <path d="M26 42 Q32 46 38 42" strokeWidth="1" />
      <line x1="32" y1="10" x2="32" y2="16" strokeWidth="1" />
    </svg>
  );
}

export function KabbalisticIcon({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="var(--sutra-gold)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="10" r="3" fill="var(--sutra-gold)" stroke="none" />
      <circle cx="22" cy="20" r="3" fill="var(--sutra-gold)" stroke="none" />
      <circle cx="42" cy="20" r="3" fill="var(--sutra-gold)" stroke="none" />
      <circle cx="22" cy="34" r="3" fill="var(--sutra-gold)" stroke="none" />
      <circle cx="42" cy="34" r="3" fill="var(--sutra-gold)" stroke="none" />
      <circle cx="32" cy="30" r="3" fill="var(--sutra-bronze)" stroke="none" />
      <circle cx="32" cy="46" r="3" fill="var(--sutra-gold)" stroke="none" />
      <circle cx="32" cy="58" r="3" fill="var(--sutra-gold)" stroke="none" />
      <g strokeWidth="0.9" opacity="0.8">
        <line x1="32" y1="10" x2="22" y2="20" />
        <line x1="32" y1="10" x2="42" y2="20" />
        <line x1="22" y1="20" x2="42" y2="20" />
        <line x1="22" y1="20" x2="22" y2="34" />
        <line x1="42" y1="20" x2="42" y2="34" />
        <line x1="22" y1="20" x2="32" y2="30" />
        <line x1="42" y1="20" x2="32" y2="30" />
        <line x1="22" y1="34" x2="32" y2="30" />
        <line x1="42" y1="34" x2="32" y2="30" />
        <line x1="22" y1="34" x2="42" y2="34" />
        <line x1="32" y1="30" x2="32" y2="46" />
        <line x1="22" y1="34" x2="32" y2="46" />
        <line x1="42" y1="34" x2="32" y2="46" />
        <line x1="32" y1="46" x2="32" y2="58" />
      </g>
    </svg>
  );
}
