import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FadeIn from '../components/common/FadeIn';
import { api } from '../services/api';

function getSessionId(): string {
  let id = localStorage.getItem('sutra5_session_id');
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem('sutra5_session_id', id);
  }
  return id;
}

function formatDateLabel(iso: string): string {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  if (iso === today) return 'Today';
  if (iso === tomorrow) return 'Tomorrow';
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

interface SlotAvailability {
  date: string;
  remaining: number;
  soldOut: boolean;
}

export default function Slots() {
  const navigate = useNavigate();
  const location = useLocation();
  const [slots, setSlots] = useState<SlotAvailability[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/api/slots?days=4')
      .then(setSlots)
      .catch(() => setError('Could not load availability.'))
      .finally(() => setLoading(false));
  }, []);

  const handleContinue = async () => {
    if (!selected) return;
    setError('');
    setSubmitting(true);
    try {
      const hold = await api.post('/api/slots/hold', { date: selected, sessionId: getSessionId() });
      navigate('/checkout', { state: { ...location.state, slotDate: selected, reservationId: hold.id } });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-obsidian min-h-[75vh] py-20 px-6 flex flex-col items-center">
      <FadeIn>
        <h1 className="font-serif text-ivory text-3xl text-center mb-3">Reserve your reading date</h1>
        <p className="text-ivory/50 text-sm text-center mb-10">349 readings released daily. Choose an available date.</p>
      </FadeIn>

      {loading ? (
        <p className="text-ivory/40 text-sm">Loading availability...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl w-full mb-10">
          {slots.map((d) => {
            const isSelected = selected === d.date;
            return (
              <FadeIn key={d.date}>
                <button
                  disabled={d.soldOut}
                  onClick={() => setSelected(d.date)}
                  className={`w-full rounded-xl border p-4 text-center transition-all duration-300
                    ${d.soldOut ? 'border-ivory/10 opacity-40 cursor-not-allowed' :
                      isSelected ? 'border-gold bg-gold/10 shadow-[0_0_20px_rgba(199,165,103,0.3)]' :
                      'border-gold/20 hover:border-gold/50'}`}
                >
                  <div className="font-serif text-ivory text-base mb-1">{formatDateLabel(d.date)}</div>
                  <div className="text-xs text-ivory/50">{d.soldOut ? 'Sold out' : `${d.remaining} left`}</div>
                </button>
              </FadeIn>
            );
          })}
        </div>
      )}

      {error && <p className="text-xs text-red-400 mb-4">{error}</p>}

      <FadeIn delay={0.2}>
        <button
          disabled={!selected || submitting}
          onClick={handleContinue}
          className="bg-gold text-obsidian font-semibold text-sm px-8 py-4 rounded-lg
                     transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed
                     enabled:hover:shadow-[0_0_30px_rgba(199,165,103,0.5)] enabled:hover:-translate-y-0.5"
        >
          {submitting ? 'Reserving...' : selected ? `Continue with ${formatDateLabel(selected)}` : 'Select a date'}
        </button>
      </FadeIn>
    </div>
  );
}
