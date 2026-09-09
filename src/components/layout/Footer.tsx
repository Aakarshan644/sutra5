import { Link } from 'react-router-dom';
import Wordmark from '../brand/Wordmark';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <Wordmark markSize={20} />
      <nav className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/compatibility">Compatibility</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
      </nav>
      <div className="footer-copy">© 2026 Sutra5. All readings are interpretive, not guaranteed.</div>
    </footer>
  );
}
