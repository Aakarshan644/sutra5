import FadeIn from '../components/common/FadeIn';
import ZodiacWheelBackground from '../components/home/ZodiacWheelBackground';

const SECTIONS = [
  { title: 'What we collect', body: 'To generate your reading we collect your date, time, and place of birth, your full name, and — only if you choose to provide them — a palm photo and a face photo. We also collect your email address for account access and delivery of your report.' },
  { title: 'How we use it', body: 'This information is used only to generate your personal reading and to manage your account. We do not use your birth data or photos for any purpose beyond producing the report you requested.' },
  { title: 'How we protect it', body: 'Your data is stored securely and access is limited to what\u2019s needed to operate the service. Photos, if provided, are used to generate your reading and are not shared outside of that process.' },
  { title: 'Do we share your data?', body: 'We do not sell your personal information. We do not share your birth data, photos, or reading results with third parties for marketing purposes.' },
  { title: 'Your choices', body: 'Palm and face photos are always optional — you can generate a reading using only birth and name data. You can request deletion of your account and associated data at any time by contacting us.' },
  { title: 'Changes to this policy', body: 'If this policy changes, we\u2019ll update this page with a new effective date.' },
];

export default function Privacy() {
  return (
    <div className="bg-obsidian min-h-[75vh] grid" style={{ gridTemplateAreas: '"stack"' }}>
      <div className="sticky top-0 h-screen overflow-hidden z-0" style={{ gridArea: 'stack' }}>
        <ZodiacWheelBackground />
      </div>
      <div className="relative z-10 py-20 px-6" style={{ gridArea: 'stack' }}>
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-ivory text-4xl text-center mb-2">Privacy policy</h1>
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
              This is placeholder policy text and has not been reviewed by legal counsel. Replace with a policy reviewed by a lawyer before this site goes live.
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
