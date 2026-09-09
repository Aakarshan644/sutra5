import { useRef } from 'react';
import { VedicIcon, PalmistryIcon, BabylonianIcon, ChineseIcon, KabbalisticIcon } from '../brand/TraditionIcons';
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
    <section className="hero">
      <div className="hero-copy">
        <p className="hero-eyebrow">Five Traditions · One Personal Reading</p>
        <h1>See Your Life Through 5 Ancient Lenses.</h1>
        <p className="hero-sub">
          A 20-year multidimensional reading combining Kundli, palmistry, Babylonian astrology,
          Chinese face reading and Kabbalistic numerology.
        </p>
        <div className="hero-facts">
          <div className="hero-fact"><b>₹299</b><span>Complete Reading</span></div>
          <div className="hero-fact"><b>20 Years</b><span>Personal Timeline</span></div>
          <div className="hero-fact"><b>349</b><span>Readings / Day</span></div>
        </div>
        <button className="hero-cta">Reveal My Sutra →</button>
      </div>

      <div className="stage" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <div className="rig" ref={rigRef}>
          <div className="ring r1">
            <svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="92" fill="none" stroke="var(--sutra-gold)" strokeWidth="1.1" opacity="0.4" /></svg>
            <div className="ring-icon" style={{ top: '2px', left: '50%', transform: 'translateX(-50%)' }}><VedicIcon size={28} /></div>
          </div>
          <div className="ring r2">
            <svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="78" fill="none" stroke="var(--sutra-gold)" strokeWidth="1.1" opacity="0.4" /></svg>
            <div className="ring-icon" style={{ top: '50%', right: '4px', transform: 'translateY(-50%)' }}><PalmistryIcon size={26} /></div>
          </div>
          <div className="ring r3">
            <svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="64" fill="none" stroke="var(--sutra-bronze)" strokeWidth="1.1" opacity="0.4" /></svg>
            <div className="ring-icon" style={{ bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}><BabylonianIcon size={24} /></div>
          </div>
          <div className="ring r4">
            <svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="50" fill="none" stroke="var(--sutra-gold)" strokeWidth="1.1" opacity="0.4" /></svg>
            <div className="ring-icon" style={{ top: '50%', left: '10px', transform: 'translateY(-50%)' }}><ChineseIcon size={22} /></div>
          </div>
          <div className="ring r5">
            <svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="36" fill="none" stroke="var(--sutra-bronze)" strokeWidth="1.1" opacity="0.4" /></svg>
            <div className="ring-icon" style={{ top: '18px', left: '50%', transform: 'translateX(-50%)' }}><KabbalisticIcon size={20} /></div>
          </div>
          <div className="center-label">Your Life Map<span>Five Systems, One Story</span></div>
        </div>
      </div>
    </section>
  );
}
