import { VedicIcon, PalmistryIcon, BabylonianIcon, ChineseIcon, KabbalisticIcon } from '../brand/TraditionIcons';
import FadeIn from '../common/FadeIn';

const TRADITIONS = [
  { Icon: VedicIcon, name: 'Vedic', label: 'Your timing', desc: 'Birth chart, houses, Dashas and major life periods.', accent: '#D97B29', tint: 'bg-saffron/10', border: 'border-saffron/30 hover:border-saffron/60', glow: 'hover:shadow-[0_0_30px_rgba(217,123,41,0.25)]' },
  { Icon: PalmistryIcon, name: 'Palmistry', label: 'Your patterns', desc: 'Visible lines and traditional palm interpretations.', accent: '#A85C3F', tint: 'bg-henna/10', border: 'border-henna/30 hover:border-henna/60', glow: 'hover:shadow-[0_0_30px_rgba(168,92,63,0.25)]' },
  { Icon: BabylonianIcon, name: 'Babylonian', label: 'Your celestial layer', desc: 'Ancient planetary symbolism.', accent: '#3D5C8C', tint: 'bg-lapis/10', border: 'border-lapis/30 hover:border-lapis/60', glow: 'hover:shadow-[0_0_30px_rgba(61,92,140,0.25)]' },
  { Icon: ChineseIcon, name: 'Chinese', label: 'Your face map', desc: 'Traditional non-sensitive facial-feature interpretation.', accent: '#B2402E', tint: 'bg-cinnabar/10', border: 'border-cinnabar/30 hover:border-cinnabar/60', glow: 'hover:shadow-[0_0_30px_rgba(178,64,46,0.25)]' },
  { Icon: KabbalisticIcon, name: 'Kabbalistic', label: 'Your numbers', desc: 'Name and numerical symbolism.', accent: '#6B4A7C', tint: 'bg-amethyst/10', border: 'border-amethyst/30 hover:border-amethyst/60', glow: 'hover:shadow-[0_0_30px_rgba(107,74,124,0.25)]' },
];

export default function TraditionCards() {
  return (
    <section className="relative overflow-hidden bg-obsidian/70 py-24 px-6 text-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[10%] right-[20%] w-[450px] h-[450px] rounded-full bg-gold/8 blur-[120px]" />
        <div className="absolute bottom-[15%] left-[10%] w-[350px] h-[350px] rounded-full bg-amethyst/10 blur-[110px]" />
      </div>

      <FadeIn>
        <h2 className="relative font-serif text-ivory text-3xl mb-3">Five ways of reading one life.</h2>
        <p className="relative text-ivory/50 text-sm mb-12 max-w-md mx-auto">
          Each tradition sees something different. Together, they draw the full map.
        </p>
      </FadeIn>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto mb-10">
        {TRADITIONS.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.08}>
            <div
              className={`h-full rounded-2xl border ${t.border} bg-charcoal/70 backdrop-blur-md
                         p-6 shadow-[0_0_18px_rgba(0,0,0,0.2)]
                         transition-all duration-500 ease-out ${t.glow}
                         hover:-translate-y-1 ${i % 2 === 1 ? 'lg:mt-6' : ''}`}
            >
              <div className={`w-14 h-14 rounded-full ${t.tint} flex items-center justify-center mb-4 mx-auto`}>
                <t.Icon size={30} />
              </div>
              <h3 className="font-serif text-lg mt-1 mb-1" style={{ color: t.accent }}>{t.name}</h3>
              <p className="text-ivory text-sm mb-1">{t.label}</p>
              <p className="text-ivory/50 text-xs leading-relaxed">{t.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.5}>
        <p className="relative font-serif text-ivory/60 text-base">
          This is where the five readings meet — <strong className="text-gold">Sutra5</strong>.
        </p>
      </FadeIn>
    </section>
  );
}
