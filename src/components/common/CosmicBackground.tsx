export default function CosmicBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute top-[-10%] left-[10%] w-[400px] h-[400px] rounded-full bg-gold/10 blur-[110px]" />
      <div className="absolute bottom-[-10%] right-[5%] w-[350px] h-[350px] rounded-full bg-amethyst/15 blur-[100px]" />
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: 'radial-gradient(1.5px 1.5px at 15% 25%, white 100%, transparent), radial-gradient(1.5px 1.5px at 75% 15%, white 100%, transparent), radial-gradient(1.5px 1.5px at 40% 70%, white 100%, transparent), radial-gradient(1.5px 1.5px at 85% 60%, white 100%, transparent), radial-gradient(1.5px 1.5px at 25% 85%, white 100%, transparent), radial-gradient(1.5px 1.5px at 60% 40%, white 100%, transparent)',
        backgroundSize: '280px 280px',
      }} />
    </div>
  );
}
