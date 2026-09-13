import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FadeIn from '../components/common/FadeIn';
import ZodiacWheelBackground from '../components/home/ZodiacWheelBackground';
import { api } from '../services/api';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError('');
    setLoading(true);
    try {
      const result = await api.post('/api/auth/login', { email, password });
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
          <div className="max-w-sm w-full rounded-2xl border border-gold/20 bg-charcoal/70 backdrop-blur-md p-8">
            <h1 className="font-serif text-ivory text-2xl mb-6 text-center">Welcome back</h1>

            <label className="block text-xs text-ivory/50 mb-2">Email</label>
            <input
              type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-obsidian border border-ivory/15 rounded-lg px-4 py-3 text-sm text-ivory mb-4 focus:outline-none focus:border-gold"
            />

            <label className="block text-xs text-ivory/50 mb-2">Password</label>
            <input
              type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-obsidian border border-ivory/15 rounded-lg px-4 py-3 text-sm text-ivory mb-6 focus:outline-none focus:border-gold"
            />

            {error && <p className="text-xs text-red-400 mb-4">{error}</p>}

            <button
              onClick={handleSubmit}
              disabled={!email || !password || loading}
              className="w-full bg-gold text-obsidian font-semibold text-sm py-3.5 rounded-lg
                         transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed
                         enabled:hover:shadow-[0_0_25px_rgba(199,165,103,0.4)]"
            >
              {loading ? 'Logging in...' : 'Log in'}
            </button>

            <p className="text-ivory/40 text-xs text-center mt-5">
              No account? <Link to="/register" className="text-gold hover:underline">Register</Link>
            </p>
            <p className="text-ivory/40 text-xs text-center mt-3">
              <Link to="/" className="text-ivory/40 hover:text-gold transition-colors">← Back to home</Link>
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
