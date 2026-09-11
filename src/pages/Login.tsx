import { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/common/FadeIn';
import ZodiacWheelBackground from '../components/home/ZodiacWheelBackground';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    alert('Login requires backend auth — not yet connected.');
  };

  return (
    <div className="bg-obsidian min-h-[75vh] flex flex-col md:flex-row">
      <div className="relative overflow-hidden flex-1 min-h-[280px] flex items-center justify-center">
        <ZodiacWheelBackground />
      </div>

      <div className="flex-1 flex items-center justify-center py-16 px-6">
        <FadeIn>
          <div className="max-w-sm w-full rounded-2xl border border-gold/20 bg-charcoal/70 backdrop-blur-md p-8">
            <h1 className="font-serif text-ivory text-3xl mb-7 text-center">Welcome back</h1>

            <label className="block text-sm text-ivory/60 mb-2">Email</label>
            <input
              type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-obsidian border border-ivory/15 rounded-lg px-4 py-3.5 text-base text-ivory mb-5 focus:outline-none focus:border-gold"
            />

            <label className="block text-sm text-ivory/60 mb-2">Password</label>
            <input
              type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-obsidian border border-ivory/15 rounded-lg px-4 py-3.5 text-base text-ivory mb-7 focus:outline-none focus:border-gold"
            />

            <button
              onClick={handleSubmit}
              disabled={!email || !password}
              className="w-full bg-gold text-obsidian font-semibold text-base py-4 rounded-lg
                         transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed
                         enabled:hover:shadow-[0_0_25px_rgba(199,165,103,0.4)]"
            >
              Log in
            </button>

            <p className="text-ivory/50 text-sm text-center mt-6">
              No account? <Link to="/register" className="text-gold hover:underline">Register</Link>
            </p>
            <p className="text-starlight/50 text-sm text-center mt-3">
              <Link to="/" className="text-ivory/50 hover:text-gold transition-colors">← Back to home</Link>
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
