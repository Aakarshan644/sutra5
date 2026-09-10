import ZodiacWheelBackground from '../components/home/ZodiacWheelBackground';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FadeIn from '../components/common/FadeIn';

const STAGES = [
  'Payment confirmed',
  'Inputs verified',
  'Analysis queued',
  'Cross-checking traditions',
  'Rendering your Sutra',
  'Ready',
];

export default function Status() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (stage >= STAGES.length - 1) return;
    const t = setTimeout(() => setStage((s) => s + 1), 1400);
    return () => clearTimeout(t);
  }, [stage]);

  const isReady = stage === STAGES.length - 1;

  return (
    <div className="bg-obsidian min-h-[75vh] flex flex-col md:flex-row">
      <div className="relative overflow-hidden flex-1 min-h-[280px] flex items-center justify-center">
        <ZodiacWheelBackground />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center py-16 px-6">
        <FadeIn>
          <h1 className="font-serif text-ivory text-3xl mb-1 text-center">Sutra5 #{id}</h1>
          <p className="text-ivory/50 text-base mb-10 text-center">
            {isReady ? 'Your reading is ready.' : 'Building your reading...'}
          </p>
        </FadeIn>

        <div className="max-w-sm w-full">
          {STAGES.map((s, i) => (
            <div key={s} className="flex items-center gap-3 py-2.5">
              <span
                className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                  i < stage ? 'bg-gold' : i === stage ? 'bg-gold animate-pulse' : 'bg-ivory/15'
                }`}
              />
              <span className={`text-base ${i <= stage ? 'text-ivory' : 'text-ivory/30'}`}>{s}</span>
            </div>
          ))}
        </div>

        {isReady && (
          <FadeIn delay={0.2}>
            <button
              onClick={() => navigate(`/report/${id}`)}
              className="mt-10 bg-gold text-obsidian font-semibold text-base px-8 py-4 rounded-lg
                         transition-all duration-300 hover:shadow-[0_0_30px_rgba(199,165,103,0.5)]"
            >
              View my Sutra5 reading
            </button>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
