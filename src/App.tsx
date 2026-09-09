import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/tokens.css';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import Upload from './pages/Upload';
import Slots from './pages/Slots';
import Checkout from './pages/Checkout';
import Status from './pages/Status';
import Report from './pages/Report';
import Compatibility from './pages/Compatibility';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Terms from './pages/Terms';
import About from './pages/About';
import Blog from './pages/Blog';
import HowItWorks from './pages/HowItWorks';
import Faq from './pages/Faq';
import Privacy from './pages/Privacy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Onboarding />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/slots" element={<Slots />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/status/:id" element={<Status />} />
          <Route path="/report/:token" element={<Report />} />
          <Route path="/compatibility" element={<Compatibility />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
