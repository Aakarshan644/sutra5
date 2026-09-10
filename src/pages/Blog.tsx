import FadeIn from '../components/common/FadeIn';
import ZodiacWheelBackground from '../components/home/ZodiacWheelBackground';

const POSTS = [
  { title: 'Why five traditions instead of one', excerpt: 'No single system captures a whole life. Here\u2019s why we combine Vedic astrology, palmistry, Babylonian astrology, Chinese face reading, and Kabbalistic numerology instead of relying on just one.', date: 'Coming soon' },
  { title: 'What your Dashas actually mean', excerpt: 'A plain-language guide to Vedic planetary periods, and why they matter for timing major life decisions.', date: 'Coming soon' },
  { title: 'Reading the lines on your palm', excerpt: 'The life, heart, and head lines, explained without the mysticism — what palmistry traditionally looks for and why.', date: 'Coming soon' },
];

export default function Blog() {
  return (
    <div className="bg-obsidian min-h-[75vh] grid" style={{ gridTemplateAreas: '"stack"' }}>
      <div className="sticky top-0 h-screen overflow-hidden z-0" style={{ gridArea: 'stack' }}>
        <ZodiacWheelBackground />
      </div>
      <div className="relative z-10 py-20 px-6" style={{ gridArea: 'stack' }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-ivory text-4xl text-center mb-3">Blog</h1>
            <p className="text-ivory/50 text-base text-center mb-14">
              Notes on the five traditions, and how we think about reading a life.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {POSTS.map((post, i) => (
              <FadeIn key={post.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-gold/20 bg-charcoal/85 backdrop-blur-md p-6 transition-all duration-300 hover:border-gold/50 hover:-translate-y-1">
                  <p className="text-gold/70 text-xs uppercase tracking-wide mb-3">{post.date}</p>
                  <h3 className="font-serif text-ivory text-lg mb-2">{post.title}</h3>
                  <p className="text-ivory/55 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p className="text-ivory/30 text-sm text-center mt-14">
              More posts coming as Sutra5 grows.
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
