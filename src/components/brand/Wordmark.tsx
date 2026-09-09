import Sutra5Mark from './Sutra5Mark';

export default function Wordmark({ markSize = 32 }: { markSize?: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Sutra5Mark size={markSize} />
      <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '1.4rem', color: 'var(--sutra-ivory)' }}>
        SUTRA
        <sup style={{ fontFamily: 'var(--font-sans)', color: 'var(--sutra-gold)', fontSize: '0.7rem' }}>5</sup>
      </span>
    </div>
  );
}
