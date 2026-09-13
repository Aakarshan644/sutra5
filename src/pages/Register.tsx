import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FadeIn from '../components/common/FadeIn';
import ZodiacWheelBackground from '../components/home/ZodiacWheelBackground';
import { api } from '../services/api';

const FIELDS = [
  { key: 'firstName', label: 'First name', type: 'text' },
  { key: 'lastName', label: 'Last name', type: 'text' },
  { key: 'username', label: 'Username', type: 'text' },
  { key: 'email', label: 'Email', type: 'email' },
  { key: 'phone', label: 'Phone', type: 'tel' },
  { key: 'address', label: 'Address', type: 'text' },
  { key: 'city', label: 'City', type: 'text' },
  { key: 'district', label: 'District', type: 'text' },
  { key: 'password', label: 'Password', type: 'password' },
  { key: 'confirmPassword', label: 'Confirm password', type: 'password' },
];

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState<Record<string, string>>({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const update = (key: string, value: string) => setForm({ ...form, [key]: value });
  const allFilled = FIELDS.every((f) => form[f.key]?.trim());
  const passwordsMatch = form.password === form.confirmPassword;
  const canSubmit = allFilled && passwordsMatch && !loading;

  const handleSubmit = async () => {
    if (!passwordsMatch) return;
    setError('');
    setLoading(true);
    try {
      const { confirmPassword, ...payload } = form;
      const result = await api.post('/api/auth/register', payload);
      localStorage.setItem('sutra5_token', result.token);
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-obsidian min-h-[75vh] flex flex-col md:flex-row">
      <div className="relative overflow-hidden flex-1 min-h-[280px] flex items-center justify-center">
        <ZodiacWheelBackground />
      </div>

      <div className="flex-1 flex items-center justify-center py-16 px-6">
        <FadeIn>
          <div className="max-w-lg w-full rounded-2xl border border-gold/20 bg-charcoal/70 backdrop-blur-md p-8">
            <h1 className="font-serif text-ivory text-2xl mb-6 text-center">Create your account</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
              {FIELDS.map((f) => (
                <div key={f.key} className={f.key === 'address' ? 'sm:col-span-2' : ''}>
                  <label className="block text-xs text-ivory/50 mb-2">{f.label}</label>
                  <input
                    type={f.type}
                    value={form[f.key] || ''}
                    onChange={(e) => update(f.key, e.target.value)}
                    className="w-full bg-obsidian border border-ivory/15 rounded-lg px-4 py-3 text-sm text-ivory focus:outline-none focus:border-gold"
                  />
                </div>
              ))}
            </div>

            {!passwordsMatch && form.confirmPassword && (
              <p className="text-xs text-red-400 mb-3">Passwords do not match.</p>
            )}
            {error && <p className="text-xs text-red-400 mb-3">{error}</p>}

            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className="w-full bg-gold text-obsidian font-semibold text-sm py-3.5 rounded-lg mt-4
                         transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed
                         enabled:hover:shadow-[0_0_25px_rgba(199,165,103,0.4)]"
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>

            <p className="text-ivory/40 text-xs text-center mt-5">
              Already have an account? <Link to="/login" className="text-gold hover:underline">Log in</Link>
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
