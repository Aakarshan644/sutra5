import ZodiacWheelBackground from '../components/home/ZodiacWheelBackground';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FadeIn from '../components/common/FadeIn';

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state || {};
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);

  const canPay = email.trim() !== '' && consent;

  const handlePay = () => {
    const fakeOrderId = Math.floor(1000 + Math.random() * 9000);
    navigate(`/status/${fakeOrderId}`, { state: data });
  };

  return (
    <div className="bg-obsidian min-h-[75vh] flex flex-col md:flex-row">
      <div className="relative overflow-hidden flex-1 min-h-[280px] flex items-center justify-center">
        <ZodiacWheelBackground />
      </div>

      <div className="flex-1 flex items-center justify-center py-16 px-6">
        <FadeIn>
          <div className="max-w-md w-full rounded-2xl border border-gold/20 bg-charcoal/70 backdrop-blur-md p-8">
            <h1 className="font-serif text-ivory text-3xl mb-1">Complete your order</h1>
            <p className="text-ivory/50 text-sm mb-6">{data.slotDate ? `Reserved for ${data.slotDate}` : 'Sutra5 reading'}</p>

            <div className="rounded-xl bg-obsidian/60 border border-ivory/10 p-4 mb-6">
              <div className="flex justify-between text-sm text-ivory/70 mb-1">
                <span>Sutra5 Reading (5 traditions)</span><span>₹299</span>
              </div>
              <div className="flex justify-between text-sm text-ivory/40 border-t border-ivory/10 pt-2 mt-2">
                <span>Total</span><span className="text-gold font-semibold">₹299</span>
              </div>
            </div>

            <label className="block text-sm text-ivory/60 mb-2">Email for delivery</label>
            <input
              type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-obsidian border border-ivory/15 rounded-lg px-4 py-3.5 text-base text-ivory mb-5 focus:outline-none focus:border-gold"
            />

            <label className="flex items-start gap-2 text-sm text-ivory/60 mb-6 cursor-pointer">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5" />
              I agree to the Terms and Privacy Policy.
            </label>

            <button
              disabled={!canPay}
              onClick={handlePay}
              className="w-full bg-gold text-obsidian font-semibold text-base py-4 rounded-lg
                         transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed
                         enabled:hover:shadow-[0_0_30px_rgba(199,165,103,0.5)]"
            >
              Pay ₹299 & Reserve My Reading
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
