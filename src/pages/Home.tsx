import Hero from '../components/home/Hero';
import InsideReading from '../components/home/InsideReading';
import TraditionCards from '../components/home/TraditionCards';
import AgreementSection from '../components/home/AgreementSection';
import PricingSection from '../components/home/PricingSection';
import ZodiacWheelBackground from '../components/home/ZodiacWheelBackground';

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <div className="grid" style={{ gridTemplateAreas: '"stack"' }}>
//         <div className="sticky top-0 h-screen overflow-hidden z-0" style={{ gridArea: 'stack' }}>
//           <ZodiacWheelBackground />
//         </div>
//         <div className="relative z-10" style={{ gridArea: 'stack' }}>
//           <InsideReading />
//           <TraditionCards />
//           <AgreementSection />
//           <PricingSection />
//         </div>
//       </div>
//     </>
//   );
// }


export default function Home() {
  return (
    <div className="bg-space-dark text-starlight min-h-screen">
      <Hero />
      <div className="grid relative" style={{ gridTemplateAreas: '"stack"' }}>
        {/* Zodiac wheel fixed background layer with centered glow blending */}
        <div 
          className="sticky top-0 h-screen overflow-hidden z-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cosmic-purple/20 via-space-dark to-space-dark" 
          style={{ gridArea: 'stack' }}
        >
          <ZodiacWheelBackground />
        </div>

        {/* Foreground content stack set to transparent so background gradients match perfectly */}
        <div className="relative z-10 bg-transparent [&>*]:bg-transparent" style={{ gridArea: 'stack' }}>
          <InsideReading />
          <TraditionCards />
          <AgreementSection />
          <PricingSection />
        </div>
      </div>
    </div>
  );
}