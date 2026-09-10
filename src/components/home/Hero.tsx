import { useRef } from 'react';
import FadeIn from '../common/FadeIn';
import './Hero.css';

export default function Hero() {
  const rigRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    if (rigRef.current) {
      rigRef.current.style.transform = `rotateY(${x * 22}deg) rotateX(${-y * 22}deg)`;
    }
  };

  const handleMouseLeave = () => {
    if (rigRef.current) rigRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)';
  };

  return (
    <section className="relative overflow-hidden bg-obsidian">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[5%] right-[5%] w-[600px] h-[600px] rounded-full bg-saffron/15 blur-[120px]" />
        <div className="absolute bottom-[0%] left-[0%] w-[500px] h-[500px] rounded-full bg-amethyst/20 blur-[120px]" />
        <div className="absolute inset-0 opacity-70" style={{
          backgroundImage: 'radial-gradient(2px 2px at 20% 30%, white 100%, transparent), radial-gradient(2px 2px at 70% 60%, white 100%, transparent), radial-gradient(2px 2px at 40% 80%, white 100%, transparent), radial-gradient(2px 2px at 90% 20%, white 100%, transparent), radial-gradient(2px 2px at 55% 45%, white 100%, transparent), radial-gradient(2px 2px at 15% 65%, white 100%, transparent), radial-gradient(2px 2px at 85% 85%, white 100%, transparent)',
          backgroundSize: '250px 250px',
        }} />
      </div>

      <div className="relative flex flex-wrap items-center gap-12 px-6 md:px-[6vw] py-24 min-h-screen">
        <div className="flex-1 min-w-[380px] max-w-xl">
          <FadeIn>
            <p className="text-ivory/50 text-sm mb-4">
              Five traditions, read together, for one life.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-ivory text-4xl md:text-6xl leading-[1.1] mb-5">
              See your life through five ancient lenses.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-ivory/60 text-base leading-relaxed max-w-md mb-8">
              A 20-year reading that combines Kundli, palmistry, Babylonian astrology,
              Chinese face reading, and Kabbalistic numerology — five distinct systems,
              read as one.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4 sm:gap-8 mb-8">
              <div>
                <b className="block font-serif text-gold text-xl sm:text-2xl">₹299</b>
                <span className="text-ivory/40 text-xs">Complete reading</span>
              </div>
              <div>
                <b className="block font-serif text-gold text-xl sm:text-2xl">20 years</b>
                <span className="text-ivory/40 text-xs">Personal timeline</span>
              </div>
              <div>
                <b className="block font-serif text-gold text-xl sm:text-2xl">349</b>
                <span className="text-ivory/40 text-xs">Readings a day</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <button className="bg-gold text-obsidian font-semibold text-sm px-7 py-4 rounded-lg
                                transition-all duration-300 hover:shadow-[0_0_30px_rgba(199,165,103,0.5)]
                                hover:-translate-y-0.5">
              Reveal my Sutra
            </button>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="stage" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className="rig" ref={rigRef}>

              <div className="ring r1">
                <svg viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="92" fill="none" stroke="#C7A567" strokeWidth="1.1" opacity="0.55" />
                  <g transform="translate(100,8)" stroke="#C7A567" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    <rect x="-9" y="-9" width="18" height="18" rx="1" />
                    <line x1="-9" y1="-9" x2="9" y2="9" />
                    <line x1="9" y1="-9" x2="-9" y2="9" />
                    <line x1="0" y1="-9" x2="0" y2="9" />
                    <line x1="-9" y1="0" x2="9" y2="0" />
                  </g>
                </svg>
              </div>

              <div className="ring r2">
                <svg viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="78" fill="none" stroke="#C7A567" strokeWidth="1.1" opacity="0.5" />
                  <g transform="translate(178,100)" stroke="#C7A567" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    <path d="M-4 10 C-6 10 -7 6 -7 1 L-7 -6 C-7 -8 -5 -8 -5 -6 L-5 -1" />
                    <path d="M-5 -6 L-5 -9 C-5 -11 -3 -11 -3 -9 L-3 -2" />
                    <path d="M-3 -9 L-3 -11 C-3 -13 -1 -13 -1 -11 L-1 -2" />
                    <path d="M-1 -6 C-1 -8 1 -8 1 -6 L1 3 C1 8 -2 10 -4 10 Z" />
                  </g>
                </svg>
              </div>

              <div className="ring r3">
                <svg viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="64" fill="none" stroke="#8A6840" strokeWidth="1.1" opacity="0.5" />
                  <g transform="translate(100,192)" stroke="#8A6840" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    <rect x="-9" y="-8" width="18" height="16" rx="0.8" />
                    <line x1="-5" y1="-4" x2="-1" y2="-4" />
                    <line x1="-5" y1="0" x2="2" y2="0" />
                    <path d="M4 -5 L5.5 -1.5 L9 -1.5 L6 0.5 L7 4 L4 1.5 L1 4 L2 0.5 L-1 -1.5 L2.5 -1.5 Z" strokeWidth="0.9" />
                  </g>
                </svg>
              </div>

              <div className="ring r4">
                <svg viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="50" fill="none" stroke="#C7A567" strokeWidth="1.1" opacity="0.45" />
                  <g transform="translate(22,100)" stroke="#C7A567" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    <path d="M0 -10 C6 -10 9 -5 9 0 C9 7 5 12 0 12 C-5 12 -9 7 -9 0 C-9 -5 -6 -10 0 -10 Z" />
                    <line x1="-3.5" y1="-1.5" x2="-1.5" y2="-1.5" strokeWidth="1.1" />
                    <line x1="1.5" y1="-1.5" x2="3.5" y2="-1.5" strokeWidth="1.1" />
                    <path d="M-2 3 Q0 4.5 2 3" strokeWidth="0.9" />
                  </g>
                </svg>
              </div>

              <div className="ring r5">
                <svg viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="36" fill="none" stroke="#8A6840" strokeWidth="1.1" opacity="0.45" />
                  <g transform="translate(100,64)" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="0" cy="-9" r="2.2" fill="#C7A567" stroke="none" />
                    <circle cx="-6" cy="-2" r="2.2" fill="#C7A567" stroke="none" />
                    <circle cx="6" cy="-2" r="2.2" fill="#C7A567" stroke="none" />
                    <circle cx="0" cy="4" r="2.2" fill="#8A6840" stroke="none" />
                    <line x1="0" y1="-9" x2="-6" y2="-2" stroke="#C7A567" strokeWidth="0.8" />
                    <line x1="0" y1="-9" x2="6" y2="-2" stroke="#C7A567" strokeWidth="0.8" />
                    <line x1="-6" y1="-2" x2="0" y2="4" stroke="#C7A567" strokeWidth="0.8" />
                    <line x1="6" y1="-2" x2="0" y2="4" stroke="#C7A567" strokeWidth="0.8" />
                  </g>
                </svg>
              </div>

              <div className="center-label">Your life map<span>Five systems, one story</span></div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
