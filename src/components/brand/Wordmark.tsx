import Sutra5Mark from './Sutra5Mark';

export default function Wordmark({ markSize = 32 }: { markSize?: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Sutra5Mark size={markSize} />
      <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 600, letterSpacing: '0.03em', fontSize: '1.4rem', color: 'var(--sutra-gold)' }}>
        Sutra
        <sup style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', color: 'var(--sutra-ivory)', fontSize: '0.7rem' }}>5</sup>
      </span>
    </div>
  );
}
