import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import './Onboarding.css';

const TOTAL_STEPS = 4;

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ firstName: '', dob: '', birthplace: '', birthTime: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  const next = async () => {
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
      return;
    }

    setError('');
    setLoading(true);
    try {
      const payload = { ...form, birthTime: form.birthTime || undefined };
      const record = await api.post('/api/onboarding', payload);
      navigate('/upload', { state: record });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const back = () => {
    if (step > 1) setStep(step - 1);
  };

  const percent = (step / TOTAL_STEPS) * 100;

  return (
    <div className="onboarding">
      <div className="onboarding-card">
        <div className="onboarding-progress">
          <div className="onboarding-progress-fill" style={{ width: `${percent}%` }} />
        </div>
        <p className="onboarding-step-label">Step {step} of {TOTAL_STEPS}</p>

        {step === 1 && (
          <>
            <h2>What should we call you?</h2>
            <div className="onboarding-field">
              <label>First name</label>
              <input value={form.firstName} onChange={(e) => update('firstName', e.target.value)} placeholder="Aakarshan" />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2>When were you born?</h2>
            <div className="onboarding-field">
              <label>Date of birth</label>
              <input type="date" value={form.dob} onChange={(e) => update('dob', e.target.value)} />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2>Where were you born?</h2>
            <div className="onboarding-field">
              <label>City, Country</label>
              <input value={form.birthplace} onChange={(e) => update('birthplace', e.target.value)} placeholder="Kathmandu, Nepal" />
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h2>Do you know your birth time?</h2>
            <div className="onboarding-field">
              <label>Birth time (leave blank if unknown)</label>
              <input type="time" value={form.birthTime} onChange={(e) => update('birthTime', e.target.value)} />
            </div>
          </>
        )}

        {error && <p style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '8px' }}>{error}</p>}

        <div className="onboarding-nav">
          {step > 1 ? (
            <button className="onboarding-btn onboarding-btn-secondary" onClick={back}>Back</button>
          ) : <span />}
          <button className="onboarding-btn onboarding-btn-primary" onClick={next} disabled={loading}>
            {loading ? 'Saving...' : step < TOTAL_STEPS ? 'Continue' : 'Continue to Upload'}
          </button>
        </div>
      </div>
    </div>
  );
}
