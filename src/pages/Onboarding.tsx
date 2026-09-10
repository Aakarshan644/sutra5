import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Calendar, MapPin, Clock } from 'lucide-react';

const TOTAL_STEPS = 4;

const STEP_META = [
  { icon: User, title: 'What should we call you?', field: 'name', label: 'First name', type: 'text', placeholder: 'Aakarshan' },
  { icon: Calendar, title: 'When were you born?', field: 'dob', label: 'Date of birth', type: 'date', placeholder: '' },
  { icon: MapPin, title: 'Where were you born?', field: 'birthplace', label: 'City, Country', type: 'text', placeholder: 'Kathmandu, Nepal' },
  { icon: Clock, title: 'Do you know your birth time?', field: 'birthtime', label: 'Birth time (leave blank if unknown)', type: 'time', placeholder: '' },
];

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', dob: '', birthplace: '', birthtime: '' });

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  const next = () => {
    if (step < TOTAL_STEPS) setStep(step + 1);
    else navigate('/upload', { state: form });
  };
  const back = () => {
    if (step > 1) setStep(step - 1);
  };

  const percent = (step / TOTAL_STEPS) * 100;
  const current = STEP_META[step - 1];
  const Icon = current.icon;

  return (
    <div className="relative overflow-hidden bg-obsidian min-h-[80vh] flex items-center justify-center px-6 py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[15%] left-[25%] w-[500px] h-[500px] rounded-full bg-gold/40 blur-[110px]" />
        <div className="absolute bottom-[10%] right-[25%] w-[460px] h-[460px] rounded-full blur-[100px]" style={{ background: '#5B8AD6', opacity: 0.4 }} />
      </div>

      <div className="relative w-full max-w-md rounded-2xl border border-gold/20 bg-charcoal/70 backdrop-blur-md p-8">
        <div className="h-[3px] rounded-full bg-gold/15 overflow-hidden mb-4">
          <div
            className="h-full bg-gold rounded-full transition-all duration-500 ease-out shadow-[0_0_8px_rgba(199,165,103,0.6)]"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="text-gold text-xs font-semibold tracking-wide mb-6">Step {step} of {TOTAL_STEPS}</p>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="w-11 h-11 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-5">
              <Icon size={20} className="text-gold" />
            </div>

            <h2 className="font-serif text-ivory text-2xl mb-6">{current.title}</h2>

            <label className="block text-sm text-ivory/60 mb-2">{current.label}</label>
            <input
              type={current.type}
              value={form[current.field as keyof typeof form]}
              onChange={(e) => update(current.field, e.target.value)}
              placeholder={current.placeholder}
              className="w-full bg-obsidian border border-ivory/15 rounded-lg px-4 py-3.5 text-base text-ivory focus:outline-none focus:border-gold"
            />
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center mt-8">
          {step > 1 ? (
            <button
              onClick={back}
              className="text-sm text-ivory/50 border border-ivory/15 rounded-lg px-5 py-3 hover:border-gold/40 hover:text-ivory transition-all duration-300"
            >
              Back
            </button>
          ) : <span />}
          <button
            onClick={next}
            className="bg-gold text-obsidian font-semibold text-sm px-6 py-3 rounded-lg
                       transition-all duration-300 hover:shadow-[0_0_25px_rgba(199,165,103,0.4)] hover:-translate-y-0.5"
          >
            {step < TOTAL_STEPS ? 'Continue' : 'Continue to Upload'}
          </button>
        </div>

        <p className="text-ivory/30 text-xs text-center mt-6">
          Joining today's 349 available readings.
        </p>
      </div>
    </div>
  );
}
