import { Link } from 'react-router-dom';
import FadeIn from '../components/common/FadeIn';
import ZodiacWheelBackground from '../components/home/ZodiacWheelBackground';

const STEPS = [
  { n: '01', title: 'Share your details', desc: 'Your date, time, and place of birth, your full name, and optionally a palm photo and a face photo. Every field beyond birth date is optional — skip anything you\u2019d rather not share.' },
  { n: '02', title: 'We run all five traditions', desc: 'Your Vedic chart, palm lines, Babylonian planetary placements, facial-feature reading, and Kabbalistic numerology are each analyzed independently.' },
  { n: '03', title: 'We look for where they agree', desc: 'Five systems rarely say exactly the same thing about every part of your life. We highlight the themes that multiple traditions converge on — that\u2019s the signal worth paying attention to.' },
  { n: '04', title: 'Your 20-year reading is ready', desc: 'A personal timeline covering major life periods, love and relationships, and career and money — delivered as a report you can revisit any time, plus a shareable result card.' },
];

export default function HowItWorks() {
  return (
    <div className="bg-obsidian min-h-[75vh] grid" style={{ gridTemplateAreas: '"stack"' }}>
      <div className="sticky top-0 h-screen overflow-hidden z-0" style={{ gridArea: 'stack' }}>
        <ZodiacWheelBackground />
      </div>
      <div className="relative z-10 py-20 px-6" style={{ gridArea: 'stack' }}>
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-ivory text-4xl text-center mb-3">How it works</h1>
            <p className="text-ivory/50 text-base text-center mb-14">
              Five traditions, read together, in four simple steps.
            </p>
          </FadeIn>

          <div className="space-y-5">
            {STEPS.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.08}>
                <div className="flex gap-5 rounded-2xl border border-gold/20 bg-charcoal/85 backdrop-blur-md p-6">
                  <span className="font-serif text-gold/50 text-3xl flex-shrink-0">{s.n}</span>
                  <div>
                    <h3 className="font-serif text-ivory text-lg mb-1.5">{s.title}</h3>
                    <p className="text-ivory/60 text-base leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Link
                to="/start"
                className="inline-block bg-gold text-obsidian font-semibold text-base px-8 py-4 rounded-lg
                           transition-all duration-300 hover:shadow-[0_0_30px_rgba(199,165,103,0.5)] hover:-translate-y-0.5"
              >
                Start my reading
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
