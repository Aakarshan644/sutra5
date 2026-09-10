import FadeIn from '../common/FadeIn';

const TOTAL_SLOTS = 349;
const REMAINING_SLOTS = 47;

export default function PricingSection() {
  const percentRemaining = (REMAINING_SLOTS / TOTAL_SLOTS) * 100;

  return (
    <section className="relative overflow-hidden bg-obsidian/70 py-16 sm:py-28 px-4 sm:px-6 text-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] right-[15%] w-[700px] h-[700px] rounded-full bg-gold/30 blur-[150px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[-10%] left-[15%] w-[500px] h-[500px] rounded-full bg-wine/30 blur-[130px] animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      <FadeIn>
        <p className="relative text-ivory/50 text-xs tracking-[0.2em] uppercase mb-4">Your Complete Sutra5 Reading</p>
        <div className="relative font-serif text-5xl sm:text-7xl md:text-8xl font-semibold mb-8 bg-gradient-to-b from-gold via-gold to-bronze bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(199,165,103,0.5)]">
          ₹299
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <ul className="relative max-w-xs mx-auto text-left mb-10">
          {['5 traditions', '20-year timeline', 'Personalized visual report', 'Shareable result card'].map((item) => (
            <li key={item} className="text-ivory/70 text-sm py-2.5 border-b border-gold/15 last:border-none before:content-['✦'] before:text-gold before:mr-3">
              {item}
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="relative max-w-xs mx-auto mb-10">
          <div className="text-xs text-gold/80 mb-2 font-medium">
            {TOTAL_SLOTS} readings released daily — {REMAINING_SLOTS} remaining today
          </div>
          <div className="w-full h-2 rounded-full bg-charcoal overflow-hidden border border-gold/20">
            <div className="h-full bg-gradient-to-r from-bronze to-gold rounded-full shadow-[0_0_12px_rgba(199,165,103,0.6)]" style={{ width: `${percentRemaining}%` }} />
          </div>
        </div>

        <button className="relative bg-gradient-to-r from-gold to-bronze text-obsidian font-bold text-base px-10 py-5 rounded-xl
                            transition-all duration-300 shadow-[0_0_40px_rgba(199,165,103,0.4)]
                            hover:shadow-[0_0_60px_rgba(199,165,103,0.7)]
                            hover:-translate-y-1 hover:scale-105">
          Reserve My Reading — ₹299
        </button>
      </FadeIn>
    </section>
  );
}
