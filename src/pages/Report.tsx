import ZodiacWheelBackground from '../components/home/ZodiacWheelBackground';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import FadeIn from '../components/common/FadeIn';

const TIMELINE = [
  { age: '18–23', label: 'Foundation', active: false },
  { age: '24–28', label: 'Momentum', active: false },
  { age: '29–34', label: 'Growth', active: true },
  { age: '35–41', label: 'Consolidation', active: false },
  { age: '42–48', label: 'Mastery', active: false },
];

const SECTIONS = [
  { title: 'Love & relationships', status: 'Read', accent: '#A85C3F', tradition: 'Palmistry + Vedic' },
  { title: 'Career & money', status: 'Read', accent: '#D97B29', tradition: 'Vedic + Numerology' },
  { title: 'Palm + Kundli cross-read', status: 'New', accent: '#3D5C8C', tradition: 'Palmistry + Vedic' },
  { title: 'Partner visualization', status: 'New', accent: '#6B4A7C', tradition: 'Compatibility engine' },
];

export default function Report() {
  const { token } = useParams();
  const [showWhy, setShowWhy] = useState(false);

  return (
    <div className="bg-obsidian min-h-[80vh] flex flex-col md:flex-row">
      <div className="relative overflow-hidden flex-1 min-h-[280px] flex items-center justify-center">
        <ZodiacWheelBackground />
      </div>

      <div className="flex-1 py-16 px-6">
        <div className="max-w-xl mx-auto">

          <FadeIn>
            <div className="relative text-center mb-4">
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full bg-gold/20 blur-[70px]" />
              <p className="relative text-gold text-sm uppercase tracking-widest mb-2">Your archetype</p>
              <h1 className="relative font-serif text-ivory text-5xl mb-1">The Builder</h1>
              <p className="relative text-ivory/40 text-sm">Reading #{token} · Generated today</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mb-10">
              <p className="text-ivory/50 text-sm mb-3 text-center">Your 20-year timeline</p>
              <div className="relative flex justify-between items-end px-1">
                <div className="absolute left-0 right-0 top-[14px] h-px bg-gold/20" />
                {TIMELINE.map((t) => (
                  <div key={t.age} className="relative flex flex-col items-center flex-1">
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 mb-2 transition-all duration-300 ${
                        t.active
                          ? 'bg-gold border-gold shadow-[0_0_16px_rgba(199,165,103,0.7)] scale-125'
                          : 'bg-obsidian border-gold/30'
                      }`}
                    />
                    <span className={`text-xs ${t.active ? 'text-gold font-semibold' : 'text-ivory/40'}`}>{t.age}</span>
                    <span className={`text-[11px] mt-0.5 ${t.active ? 'text-ivory' : 'text-ivory/30'}`}>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-gold/25 bg-charcoal/70 backdrop-blur-md p-6 mb-6">
              <p className="text-gold text-sm font-semibold mb-2">Current period · Age 29–34 · Growth</p>
              <p className="text-ivory/70 text-base leading-relaxed mb-3">
                A period favoring steady financial growth and long-term partnerships over short-term gains.
              </p>
              <button
                onClick={() => setShowWhy(!showWhy)}
                className="text-sm text-ivory/50 border-t border-gold/10 pt-3 w-full text-left hover:text-gold transition-colors"
              >
                {showWhy ? '▾ ' : '▸ '}Why we said this
              </button>
              {showWhy && (
                <p className="text-sm text-ivory/60 mt-2 pl-3 border-l border-gold/20">
                  Jupiter transit through the 2nd house (Vedic), a strong Fate line convergence (Palmistry),
                  and a Life Path 8 (Kabbalistic) all independently point to this period.
                </p>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-3 mb-8">
              {SECTIONS.map((s) => (
                <div
                  key={s.title}
                  className="flex items-center justify-between rounded-xl border bg-charcoal/70 backdrop-blur-md px-5 py-4 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ borderColor: `${s.accent}40` }}
                >
                  <div>
                    <span className="text-ivory text-base block">{s.title}</span>
                    <span className="text-xs" style={{ color: s.accent }}>{s.tradition}</span>
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ color: s.accent, backgroundColor: `${s.accent}20` }}
                  >
                    {s.status}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => alert('PDF generation requires backend — coming once report-engine is built.')}
                className="flex-1 bg-gold text-obsidian font-semibold text-base py-3.5 rounded-lg
                           transition-all duration-300 hover:shadow-[0_0_25px_rgba(199,165,103,0.4)]"
              >
                Download PDF
              </button>
              <button
                onClick={() => alert('Share card rendering requires backend — coming once report-engine is built.')}
                className="flex-1 border border-gold/30 text-ivory text-base py-3.5 rounded-lg
                           transition-all duration-300 hover:border-gold/60"
              >
                Create share card
              </button>
            </div>
            <Link to="/compatibility" className="block text-center text-ivory/50 text-sm mt-6 hover:text-gold transition-colors">
              Compare with a partner or friend →
            </Link>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
