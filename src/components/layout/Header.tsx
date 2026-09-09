import { Link } from 'react-router-dom';
import Wordmark from '../brand/Wordmark';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Wordmark markSize={28} />
      </Link>
      <nav>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/compatibility">Compatibility</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup" className="nav-cta">Sign Up</Link>
      </nav>
    </header>
  );
}
