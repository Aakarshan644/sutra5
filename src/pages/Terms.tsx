import FadeIn from '../components/common/FadeIn';
import ZodiacWheelBackground from '../components/home/ZodiacWheelBackground';

const SECTIONS = [
  { title: 'What Sutra5 is', body: 'Sutra5 provides interpretive readings based on Vedic astrology, palmistry, Babylonian astrology, Chinese face reading, and Kabbalistic numerology. These are traditional interpretive systems, not scientific predictions, medical advice, financial advice, or legal advice.' },
  { title: 'No guarantees', body: 'Readings are interpretive and provided for entertainment and self-reflection purposes. We make no claim that any reading will be accurate, and no decision about your health, finances, relationships, or life should be based solely on a Sutra5 reading.' },
  { title: 'Payments and refunds', body: 'Payment is required before a reading is generated. If a reading fails to generate or was clearly generated using incorrect data due to an error on our end, contact us for a fix or refund. Refunds are not offered for readings delivered correctly.' },
  { title: 'Your account', body: 'You\u2019re responsible for keeping your login credentials secure and for the accuracy of the birth data and other information you submit.' },
  { title: 'Acceptable use', body: 'You agree not to use Sutra5 to submit another person\u2019s private data without their consent, or to misuse the service in any way that violates applicable law.' },
  { title: 'Changes to these terms', body: 'We may update these terms from time to time. Continued use of Sutra5 after changes are posted means you accept the updated terms.' },
];

export default function Terms() {
  return (
    <div className="bg-obsidian min-h-[75vh] grid" style={{ gridTemplateAreas: '"stack"' }}>
      <div className="sticky top-0 h-screen overflow-hidden z-0" style={{ gridArea: 'stack' }}>
        <ZodiacWheelBackground />
      </div>
      <div className="relative z-10 py-20 px-6" style={{ gridArea: 'stack' }}>
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-ivory text-4xl text-center mb-2">Terms of service</h1>
            <p className="text-ivory/40 text-sm text-center mb-14">Last updated: placeholder — set before launch</p>
          </FadeIn>

          <div className="space-y-8">
            {SECTIONS.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.05}>
                <div className="bg-charcoal/85 backdrop-blur-md rounded-xl p-5">
                  <h2 className="font-serif text-gold text-xl mb-2">{s.title}</h2>
                  <p className="text-ivory/65 text-base leading-relaxed">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <p className="text-ivory/30 text-xs text-center mt-14 border-t border-gold/10 pt-6">
              This is placeholder terms text and has not been reviewed by legal counsel. Replace with terms reviewed by a lawyer before this site goes live.
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
