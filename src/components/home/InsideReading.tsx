import FadeIn from '../common/FadeIn';

const PILLARS = [
  { title: '20-year timeline', desc: 'See the major themes and periods your reading highlights across the next two decades.', accent: '#D97B29', glow: 'rgba(217,123,41,0.25)' },
  { title: 'Love & relationships', desc: 'Understand attachment tendencies, commitment themes, and stronger partnership periods.', accent: '#3D5C8C', glow: 'rgba(61,92,140,0.25)' },
  { title: 'Career & money', desc: 'See financial tendencies, career environments, and more supportive growth periods.', accent: '#6B4A7C', glow: 'rgba(107,74,124,0.25)' },
];

export default function InsideReading() {
  return (
    <section className="relative overflow-hidden bg-charcoal/70 py-24 px-6">
      <FadeIn>
        <h2 className="relative font-serif text-ivory text-3xl text-center mb-12">
          What's inside your reading
        </h2>
      </FadeIn>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {PILLARS.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.1}>
            <div
              className="rounded-2xl bg-obsidian/70 backdrop-blur-md p-8 h-full
                         transition-all duration-500 ease-out hover:-translate-y-1"
              style={{
                border: `1px solid ${p.accent}40`,
                boxShadow: `0 0 20px ${p.glow}`,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 34px ${p.accent}55`)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `0 0 20px ${p.glow}`)}
            >
              <h3 className="font-serif text-xl mb-3" style={{ color: p.accent }}>{p.title}</h3>
              <p className="text-ivory/60 text-sm leading-relaxed">{p.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
