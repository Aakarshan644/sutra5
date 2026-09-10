import FadeIn from '../common/FadeIn';

const SAMPLE_AGREEMENT = [
  { system: 'Vedic', strength: 'Strong', accent: '#D97B29' },
  { system: 'Palmistry', strength: 'Strong', accent: '#A85C3F' },
  { system: 'Babylonian', strength: 'Moderate', accent: '#3D5C8C' },
  { system: 'Face reading', strength: 'Strong', accent: '#B2402E' },
  { system: 'Numerology', strength: 'Strong', accent: '#6B4A7C' },
];

export default function AgreementSection() {
  return (
    <section className="relative overflow-hidden bg-obsidian/70 py-24 px-6 text-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[130px]" />
      </div>

      <FadeIn>
        <h2 className="relative font-serif text-ivory text-3xl mb-12">
          When five systems agree
        </h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="relative max-w-md mx-auto rounded-3xl border border-gold/20 bg-charcoal/70
                         backdrop-blur-md p-8 shadow-[0_0_25px_rgba(199,165,103,0.08)]">
          {SAMPLE_AGREEMENT.map((row) => (
            <div key={row.system} className="flex justify-between items-center py-3 border-b border-ivory/10 last:border-none">
              <span className="flex items-center gap-2.5 text-ivory/70 text-sm">
                <span className="w-2 h-2 rounded-full" style={{ background: row.accent }} />
                {row.system}
              </span>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full tracking-wide"
                style={{
                  color: row.strength === 'Strong' ? row.accent : 'rgba(242,235,221,0.5)',
                  background: row.strength === 'Strong' ? `${row.accent}1a` : 'rgba(242,235,221,0.05)',
                }}
              >
                {row.strength}
              </span>
            </div>
          ))}
          <div className="pt-6 mt-4 border-t border-ivory/10">
            <div className="text-xs text-ivory/40 uppercase tracking-widest mb-2">Recurring life pattern</div>
            <div className="font-serif text-2xl text-gold">Independent builder</div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
