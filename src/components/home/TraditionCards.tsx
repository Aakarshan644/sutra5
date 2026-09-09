import { VedicIcon, PalmistryIcon, BabylonianIcon, ChineseIcon, KabbalisticIcon } from '../brand/TraditionIcons';
import './TraditionCards.css';

const TRADITIONS = [
  { num: '01', Icon: VedicIcon, name: 'Vedic', label: 'Your Timing', desc: 'Birth chart, houses, Dashas and major life periods.' },
  { num: '02', Icon: PalmistryIcon, name: 'Palmistry', label: 'Your Patterns', desc: 'Visible lines and traditional palm interpretations.' },
  { num: '03', Icon: BabylonianIcon, name: 'Babylonian', label: 'Your Celestial Layer', desc: 'Ancient planetary symbolism.' },
  { num: '04', Icon: ChineseIcon, name: 'Chinese', label: 'Your Face Map', desc: 'Traditional non-sensitive facial-feature interpretation.' },
  { num: '05', Icon: KabbalisticIcon, name: 'Kabbalistic', label: 'Your Numbers', desc: 'Name and numerical symbolism.' },
];

export default function TraditionCards() {
  return (
    <section className="tradition-section">
      <h2 className="tradition-heading">One life. Five ways of reading it.</h2>
      <div className="tradition-grid">
        {TRADITIONS.map((t) => (
          <div className="tradition-card" key={t.num}>
            <div className="tradition-icon-wrap"><t.Icon size={40} /></div>
            <span className="tradition-num">{t.num}</span>
            <h3 className="tradition-name">{t.name}</h3>
            <p className="tradition-label">{t.label}</p>
            <p className="tradition-desc">{t.desc}</p>
          </div>
        ))}
      </div>
      <p className="tradition-convergence">Where the five readings meet — <strong>Sutra5</strong>.</p>
    </section>
  );
}
