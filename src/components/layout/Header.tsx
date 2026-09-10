import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Wordmark from '../brand/Wordmark';
import './Header.css';

export default function Header() {
  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Wordmark markSize={28} />
      </Link>
      <nav>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/compatibility">Compatibility</Link>
        <span className="nav-auth">
          <Link to="/login">Login</Link>
          <Link to="/register" className="nav-cta">Register</Link>
        </span>
      </nav>
    </motion.header>
  );
}
