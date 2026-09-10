import FadeIn from '../components/common/FadeIn';
import ZodiacWheelBackground from '../components/home/ZodiacWheelBackground';

export default function About() {
  return (
    <div className="bg-obsidian min-h-[75vh] grid" style={{ gridTemplateAreas: '"stack"' }}>
      <div className="sticky top-0 h-screen overflow-hidden z-0" style={{ gridArea: 'stack' }}>
        <ZodiacWheelBackground />
      </div>
      <div className="relative z-10 py-20 px-6" style={{ gridArea: 'stack' }}>
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="text-gold text-sm mb-3">About Sutra5</p>
            <h1 className="font-serif text-ivory text-4xl leading-tight mb-6">
              Five traditions. One way of seeing your life.
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-ivory/60 text-base leading-relaxed mb-6 bg-obsidian/40 backdrop-blur-sm rounded-lg px-4 py-3">
              For thousands of years, different cultures across the world developed their own ways of
              reading a life — through the stars, through the hands, through the face, through numbers.
              Each tradition sees something a little different. None of them were ever meant to be the
              only lens.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-ivory/60 text-base leading-relaxed mb-6 bg-obsidian/40 backdrop-blur-sm rounded-lg px-4 py-3">
              Sutra5 brings five of these traditions together — Vedic astrology, palmistry, Babylonian
              astrology, Chinese face reading, and Kabbalistic numerology — into a single reading. Not to
              replace any one of them, but to see where they agree, and to give you a fuller picture than
              any single system could on its own.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-ivory/60 text-base leading-relaxed bg-obsidian/40 backdrop-blur-sm rounded-lg px-4 py-3">
              We believe these traditions are worth taking seriously as interpretive tools for
              self-reflection — while being honest that they're interpretive, not predictive science.
              What you do with what you find here is entirely up to you.
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
