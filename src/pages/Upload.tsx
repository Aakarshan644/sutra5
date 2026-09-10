import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Hand, ScanFace } from 'lucide-react';
import FadeIn from '../components/common/FadeIn';

export default function Upload() {
  const navigate = useNavigate();
  const location = useLocation();
  const onboardingData = location.state;

  const [palmFile, setPalmFile] = useState<File | null>(null);
  const [palmPreview, setPalmPreview] = useState<string | null>(null);
  const [faceFile, setFaceFile] = useState<File | null>(null);
  const [facePreview, setFacePreview] = useState<string | null>(null);
  const [faceSkipped, setFaceSkipped] = useState(false);

  const handlePalmSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPalmFile(file);
      setPalmPreview(URL.createObjectURL(file));
    }
  };

  const handleFaceSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFaceFile(file);
      setFacePreview(URL.createObjectURL(file));
      setFaceSkipped(false);
    }
  };

  const canContinue = palmFile !== null;

  const handleContinue = () => {
    navigate('/slots', { state: { ...onboardingData, palmFile, faceFile } });
  };

  return (
    <div className="relative overflow-hidden bg-obsidian min-h-[80vh] flex items-center justify-center px-6 py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[15%] left-[25%] w-[500px] h-[500px] rounded-full bg-gold/40 blur-[110px]" />
        <div className="absolute bottom-[10%] right-[25%] w-[460px] h-[460px] rounded-full blur-[100px]" style={{ background: '#5B8AD6', opacity: 0.4 }} />
      </div>

      <FadeIn>
        <div className="relative w-full max-w-lg rounded-2xl border border-gold/20 bg-charcoal/70 backdrop-blur-md p-8">
          <h2 className="font-serif text-ivory text-2xl mb-1">Add your photos</h2>
          <p className="text-ivory/50 text-sm mb-7">Used only to calculate and personalize your reading.</p>

          <div className="rounded-xl border border-dashed border-gold/30 p-6 mb-4 text-center transition-all duration-300 hover:border-gold/50">
            <div className="w-11 h-11 rounded-full bg-henna/15 border border-henna/40 flex items-center justify-center mx-auto mb-3">
              <Hand size={20} style={{ color: '#A85C3F' }} />
            </div>
            <div className="text-ivory text-base font-medium mb-1">Palm (required)</div>
            <div className="text-ivory/40 text-sm mb-4">Flat palm, full hand visible, even light</div>
            {palmPreview && (
              <img src={palmPreview} alt="Palm preview" className="w-36 h-36 object-cover rounded-lg mx-auto mb-4 border border-gold/20" />
            )}
            <input type="file" accept="image/*" id="palm-input" className="hidden" onChange={handlePalmSelect} />
            <label
              htmlFor="palm-input"
              className="inline-block bg-gold text-obsidian font-semibold text-sm px-6 py-2.5 rounded-lg cursor-pointer
                         transition-all duration-300 hover:shadow-[0_0_20px_rgba(199,165,103,0.4)]"
            >
              {palmFile ? 'Retake' : 'Choose photo'}
            </label>
          </div>

          <div className="rounded-xl border border-dashed border-gold/20 p-6 mb-7 text-center transition-all duration-300 hover:border-gold/40">
            <div className="w-11 h-11 rounded-full bg-lapis/15 border border-lapis/40 flex items-center justify-center mx-auto mb-3">
              <ScanFace size={20} style={{ color: '#3D5C8C' }} />
            </div>
            <div className="text-ivory text-base font-medium mb-1">Face (optional)</div>
            <div className="text-ivory/40 text-sm mb-4">Front-facing, neutral expression, even light</div>
            {facePreview && !faceSkipped && (
              <img src={facePreview} alt="Face preview" className="w-36 h-36 object-cover rounded-lg mx-auto mb-4 border border-gold/20" />
            )}
            <input type="file" accept="image/*" id="face-input" className="hidden" onChange={handleFaceSelect} />
            <div className="flex items-center justify-center gap-3">
              <label
                htmlFor="face-input"
                className="inline-block bg-gold text-obsidian font-semibold text-sm px-6 py-2.5 rounded-lg cursor-pointer
                           transition-all duration-300 hover:shadow-[0_0_20px_rgba(199,165,103,0.4)]"
              >
                {faceFile ? 'Retake' : 'Choose photo'}
              </label>
              {!faceFile && (
                <button
                  onClick={() => setFaceSkipped(true)}
                  className="text-sm text-ivory/50 border border-ivory/15 rounded-lg px-5 py-2.5 hover:border-gold/40 hover:text-ivory transition-all duration-300"
                >
                  Skip
                </button>
              )}
            </div>
          </div>

          <button
            disabled={!canContinue}
            onClick={handleContinue}
            className="w-full bg-gold text-obsidian font-semibold text-base py-4 rounded-lg
                       transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed
                       enabled:hover:shadow-[0_0_30px_rgba(199,165,103,0.5)]"
          >
            {canContinue ? 'Continue' : 'Palm photo required'}
          </button>
        </div>
      </FadeIn>
    </div>
  );
}
