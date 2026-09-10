import { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/common/FadeIn';
import ZodiacWheelBackground from '../components/home/ZodiacWheelBackground';

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
  const [form, setForm] = useState<Record<string, string>>({});
  const update = (key: string, value: string) => setForm({ ...form, [key]: value });
  const allFilled = FIELDS.every((f) => form[f.key]?.trim());
  const passwordsMatch = form.password === form.confirmPassword;
  const canSubmit = allFilled && passwordsMatch;

  const handleSubmit = () => {
    if (!passwordsMatch) return;
    alert('Registration requires backend auth — not yet connected.');
  };

  return (
    <div className="bg-obsidian min-h-[75vh] flex flex-col md:flex-row">
      <div className="relative overflow-hidden flex-1 min-h-[280px] flex items-center justify-center">
        <ZodiacWheelBackground />
      </div>

      <div className="flex-1 flex items-center justify-center py-16 px-6">
        <FadeIn>
          <div className="max-w-lg w-full rounded-2xl border border-gold/20 bg-charcoal/70 backdrop-blur-md p-8">
            <h1 className="font-serif text-ivory text-3xl mb-7 text-center">Create your account</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-3">
              {FIELDS.map((f) => (
                <div key={f.key} className={f.key === 'address' ? 'sm:col-span-2' : ''}>
                  <label className="block text-sm text-ivory/60 mb-2">{f.label}</label>
                  <input
                    type={f.type}
                    value={form[f.key] || ''}
                    onChange={(e) => update(f.key, e.target.value)}
                    className="w-full bg-obsidian border border-ivory/15 rounded-lg px-4 py-3.5 text-base text-ivory focus:outline-none focus:border-gold"
                  />
                </div>
              ))}
            </div>

            {!passwordsMatch && form.confirmPassword && (
              <p className="text-sm text-red-400 mb-3">Passwords do not match.</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className="w-full bg-gold text-obsidian font-semibold text-base py-4 rounded-lg mt-4
                         transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed
                         enabled:hover:shadow-[0_0_25px_rgba(199,165,103,0.4)]"
            >
              Create account
            </button>

            <p className="text-ivory/50 text-sm text-center mt-6">
              Already have an account? <Link to="/login" className="text-gold hover:underline">Log in</Link>
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
