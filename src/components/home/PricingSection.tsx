import './PricingSection.css';

const TOTAL_SLOTS = 349;
const REMAINING_SLOTS = 47; // placeholder — this will come from the backend slot API later

export default function PricingSection() {
  const percentRemaining = (REMAINING_SLOTS / TOTAL_SLOTS) * 100;

  return (
    <section className="pricing-section">
      <p className="pricing-eyebrow">Your Complete Sutra5 Reading</p>
      <div className="pricing-amount">₹299</div>
      <ul className="pricing-includes">
        <li>5 traditions</li>
        <li>20-year timeline</li>
        <li>Personalized visual report</li>
        <li>Shareable result card</li>
      </ul>

      <div className="pricing-availability">
        <div className="pricing-availability-label">
          {TOTAL_SLOTS} readings released every day — Today's availability: {REMAINING_SLOTS} remaining
        </div>
        <div className="pricing-bar-track">
          <div className="pricing-bar-fill" style={{ width: `${percentRemaining}%` }} />
        </div>
      </div>

      <button className="pricing-cta">Reserve My Reading — ₹299</button>
    </section>
  );
}
