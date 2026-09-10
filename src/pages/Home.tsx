import Hero from '../components/home/Hero';
import InsideReading from '../components/home/InsideReading';
import TraditionCards from '../components/home/TraditionCards';
import AgreementSection from '../components/home/AgreementSection';
import PricingSection from '../components/home/PricingSection';
import ZodiacWheelBackground from '../components/home/ZodiacWheelBackground';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="grid" style={{ gridTemplateAreas: '"stack"' }}>
        <div className="sticky top-0 h-screen overflow-hidden z-0" style={{ gridArea: 'stack' }}>
          <ZodiacWheelBackground />
        </div>
        <div className="relative z-10" style={{ gridArea: 'stack' }}>
          <InsideReading />
          <TraditionCards />
          <AgreementSection />
          <PricingSection />
        </div>
      </div>
    </>
  );
}
