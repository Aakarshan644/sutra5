import ZodiacWheelBackground from '../components/home/ZodiacWheelBackground';
import { useState } from 'react';
import FadeIn from '../components/common/FadeIn';

export default function Compatibility() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [result, setResult] = useState<null | { score: number; theme: string }>(null);

  const handleCheck = () => {
    if (!name || !dob) return;
    // placeholder scoring — real version needs the astrology engine on the backend
    const fakeScore = 60 + (name.length * 3) % 35;
    setResult({ score: fakeScore, theme: fakeScore > 80 ? 'Deep, steady connection' : 'Growth through contrast' });
  };

  return (
    <div className="bg-obsidian min-h-[75vh] flex flex-col md:flex-row">
      <div className="relative overflow-hidden flex-1 min-h-[280px] flex items-center justify-center">
        <ZodiacWheelBackground />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center py-16 px-6">
        <FadeIn>
          <h1 className="font-serif text-ivory text-3xl text-center mb-2">Who are you thinking about?</h1>
          <p className="text-ivory/50 text-sm text-center mb-10 max-w-sm">
            Get a quick compatibility preview across all five traditions.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-sm w-full rounded-2xl border border-gold/20 bg-charcoal/70 backdrop-blur-md p-6">
            <label className="block text-sm text-ivory/60 mb-2">Their name</label>
            <input
              value={name} onChange={(e) => setName(e.target.value)}
              className="w-full bg-obsidian border border-ivory/15 rounded-lg px-4 py-3.5 text-base text-ivory mb-4 focus:outline-none focus:border-gold"
            />
            <label className="block text-sm text-ivory/60 mb-2">Their date of birth</label>
            <input
              type="date" value={dob} onChange={(e) => setDob(e.target.value)}
              className="w-full bg-obsidian border border-ivory/15 rounded-lg px-4 py-3.5 text-base text-ivory mb-6 focus:outline-none focus:border-gold"
            />
            <button
              onClick={handleCheck}
              disabled={!name || !dob}
              className="w-full bg-gold text-obsidian font-semibold text-base py-3.5 rounded-lg
                         transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed
                         enabled:hover:shadow-[0_0_25px_rgba(199,165,103,0.4)]"
            >
              See compatibility preview
            </button>
          </div>
        </FadeIn>

        {result && (
          <FadeIn delay={0.1}>
            <div className="max-w-sm w-full rounded-2xl border border-gold/30 bg-charcoal/70 p-6 mt-4 text-center">
              <div className="font-serif text-gold text-4xl mb-2">{result.score}%</div>
              <p className="text-ivory/70 text-base mb-4">{result.theme}</p>
              <button className="text-sm text-ivory/50 border-t border-gold/10 pt-3 hover:text-gold transition-colors">
                Unlock full compatibility reading — ₹299
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
