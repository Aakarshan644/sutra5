import { useState } from 'react';
import FadeIn from '../components/common/FadeIn';
import ZodiacWheelBackground from '../components/home/ZodiacWheelBackground';

const FAQS = [
  { q: 'What exactly do I get in a Sutra5 reading?', a: 'A single report that combines five traditions — Vedic astrology, palmistry, Babylonian astrology, Chinese face reading, and Kabbalistic numerology — into one 20-year personal timeline, covering major life themes, love and relationships, and career and money.' },
  { q: 'What information do I need to provide?', a: 'Your date, time, and place of birth for the Vedic and Babylonian readings, your full name for the numerology reading, and optionally a palm photo and a face photo. All optional fields can be skipped, and that tradition is simply left out of your report.' },
  { q: 'How accurate is this?', a: 'These are interpretive traditions, not scientific predictions. We combine five independent systems specifically so you can see where they agree and where they don\u2019t — but no reading should be treated as certain or as a substitute for professional advice.' },
  { q: 'Is my birth data and photos kept private?', a: 'Yes. Your birth details and any photos you upload are used only to generate your reading and are not sold or shared with third parties. See our Privacy page for the full details.' },
  { q: 'Can I get a refund?', a: 'If your reading fails to generate or is clearly wrong, contact us and we\u2019ll fix or refund it. We don\u2019t offer refunds for readings that were delivered correctly but you simply didn\u2019t like the result.' },
  { q: 'How long does it take to get my reading?', a: 'Most readings are ready within a few minutes of payment. You can track progress on the status page after checkout.' },
  { q: 'Can I check compatibility with someone else?', a: 'Yes — the Compatibility page gives a free quick preview, with the option to unlock a full compatibility reading.' },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="bg-obsidian min-h-[75vh] grid" style={{ gridTemplateAreas: '"stack"' }}>
      <div className="sticky top-0 h-screen overflow-hidden z-0" style={{ gridArea: 'stack' }}>
        <ZodiacWheelBackground />
      </div>
      <div className="relative z-10 py-20 px-6" style={{ gridArea: 'stack' }}>
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-ivory text-4xl text-center mb-3">Frequently asked questions</h1>
            <p className="text-ivory/50 text-base text-center mb-12">
              Everything you might want to know before your reading.
            </p>
          </FadeIn>

          <div className="space-y-3">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <FadeIn key={item.q} delay={i * 0.05}>
                  <div className="rounded-xl border border-gold/20 bg-charcoal/85 backdrop-blur-md overflow-hidden">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between text-left px-5 py-4"
                    >
                      <span className="text-ivory text-base font-medium pr-4">{item.q}</span>
                      <span className={`text-gold text-xl flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                    </button>
                    {isOpen && (
                      <p className="text-ivory/60 text-base leading-relaxed px-5 pb-5">{item.a}</p>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
