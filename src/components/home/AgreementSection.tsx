import './AgreementSection.css';

const SAMPLE_AGREEMENT = [
  { system: 'Vedic', strength: 'Strong' },
  { system: 'Palmistry', strength: 'Strong' },
  { system: 'Babylonian', strength: 'Moderate' },
  { system: 'Face Reading', strength: 'Strong' },
  { system: 'Numerology', strength: 'Strong' },
];

export default function AgreementSection() {
  return (
    <section className="agreement-section">
      <h2 className="agreement-heading">When 5 Systems Say The Same Thing</h2>
      <div className="agreement-card">
        {SAMPLE_AGREEMENT.map((row) => (
          <div className="agreement-row" key={row.system}>
            <span>{row.system}</span>
            <span className={`agreement-strength ${row.strength === 'Strong' ? 'strength-strong' : 'strength-moderate'}`}>
              {row.strength}
            </span>
          </div>
        ))}
        <div className="agreement-result">
          <div className="agreement-result-label">Recurring Life Pattern</div>
          <div className="agreement-result-value">Independent Builder</div>
        </div>
      </div>
    </section>
  );
}
