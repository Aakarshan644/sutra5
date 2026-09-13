import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Upload.css';

const API_URL = 'http://localhost:4000';

export default function Upload() {
  const navigate = useNavigate();
  const location = useLocation();
  const onboardingData = location.state;

  const [palmFile, setPalmFile] = useState<File | null>(null);
  const [palmPreview, setPalmPreview] = useState<string | null>(null);
  const [faceFile, setFaceFile] = useState<File | null>(null);
  const [facePreview, setFacePreview] = useState<string | null>(null);
  const [faceSkipped, setFaceSkipped] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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

  const canContinue = palmFile !== null && !loading;

  const uploadFile = async (type: 'palm' | 'face', file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch(`${API_URL}/api/uploads/${type}`, { method: 'POST', body: formData });
    if (!res.ok) throw new Error(`Failed to upload ${type} photo.`);
    return res.json();
  };

  const handleContinue = async () => {
    if (!palmFile) return;
    setError('');
    setLoading(true);
    try {
      const palmRecord = await uploadFile('palm', palmFile);
      const faceRecord = faceFile ? await uploadFile('face', faceFile) : null;
      navigate('/slots', { state: { ...onboardingData, palmRecord, faceRecord } });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-page">
      <div className="upload-card">
        <h2>Add your photos</h2>
        <p className="upload-sub">Used only to calculate and personalize your reading.</p>

        <div className="upload-slot">
          <div className="upload-slot-label">Palm (required)</div>
          <div className="upload-slot-hint">Flat palm, full hand visible, even light</div>
          {palmPreview && <img src={palmPreview} alt="Palm preview" className="upload-preview" />}
          <input type="file" accept="image/*" id="palm-input" style={{ display: 'none' }} onChange={handlePalmSelect} />
          <label htmlFor="palm-input" className="upload-btn" style={{ display: 'inline-block' }}>
            {palmFile ? 'Retake' : 'Choose Photo'}
          </label>
        </div>

        <div className="upload-slot">
          <div className="upload-slot-label">Face (optional)</div>
          <div className="upload-slot-hint">Front-facing, neutral expression, even light</div>
          {facePreview && !faceSkipped && <img src={facePreview} alt="Face preview" className="upload-preview" />}
          <input type="file" accept="image/*" id="face-input" style={{ display: 'none' }} onChange={handleFaceSelect} />
          <label htmlFor="face-input" className="upload-btn" style={{ display: 'inline-block' }}>
            {faceFile ? 'Retake' : 'Choose Photo'}
          </label>
          {!faceFile && (
            <button className="upload-btn-secondary" onClick={() => setFaceSkipped(true)}>Skip</button>
          )}
        </div>

        {error && <p style={{ color: '#f87171', fontSize: '0.8rem', margin: '8px 0' }}>{error}</p>}

        <button className="upload-continue" disabled={!canContinue} onClick={handleContinue}>
          {loading ? 'Uploading...' : canContinue || palmFile ? 'Continue' : 'Palm photo required'}
        </button>
      </div>
    </div>
  );
}
