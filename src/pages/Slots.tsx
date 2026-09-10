import ZodiacWheelBackground from '../components/home/ZodiacWheelBackground';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FadeIn from '../components/common/FadeIn';

const DATES = [
  { label: 'Today', remaining: 0 },
  { label: 'Tomorrow', remaining: 18 },
  { label: 'Sep 12', remaining: 126 },
  { label: 'Sep 13', remaining: 349 },
];

export default function Slots() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState<string | null>(null);

  const handleContinue = () => {
    if (!selected) return;
    navigate('/checkout', { state: { ...location.state, slotDate: selected } });
  };

  return (
    <div className="bg-obsidian min-h-[75vh] flex flex-col md:flex-row">
      <div className="relative overflow-hidden flex-1 min-h-[280px] flex items-center justify-center">
        <ZodiacWheelBackground />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center py-16 px-6">
        <FadeIn>
          <h1 className="font-serif text-ivory text-3xl text-center mb-3">Reserve your reading date</h1>
          <p className="text-ivory/50 text-base text-center mb-10">349 readings released daily. Choose an available date.</p>
        </FadeIn>

        <div className="grid grid-cols-2 gap-4 max-w-md w-full mb-10">
          {DATES.map((d) => {
            const soldOut = d.remaining === 0;
            const isSelected = selected === d.label;
            return (
              <FadeIn key={d.label}>
                <button
                  disabled={soldOut}
                  onClick={() => setSelected(d.label)}
                  className={`w-full rounded-xl border p-4 text-center transition-all duration-300
                    ${soldOut ? 'border-ivory/10 opacity-40 cursor-not-allowed' :
                      isSelected ? 'border-gold bg-gold/10 shadow-[0_0_20px_rgba(199,165,103,0.3)]' :
                      'border-gold/20 hover:border-gold/50'}`}
                >
                  <div className="font-serif text-ivory text-lg mb-1">{d.label}</div>
                  <div className="text-sm text-ivory/50">{soldOut ? 'Sold out' : `${d.remaining} left`}</div>
                </button>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2}>
          <button
            disabled={!selected}
            onClick={handleContinue}
            className="bg-gold text-obsidian font-semibold text-base px-8 py-4 rounded-lg
                       transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed
                       enabled:hover:shadow-[0_0_30px_rgba(199,165,103,0.5)] enabled:hover:-translate-y-0.5"
          >
            {selected ? `Continue with ${selected}` : 'Select a date'}
          </button>
        </FadeIn>
      </div>
    </div>
  );
}
