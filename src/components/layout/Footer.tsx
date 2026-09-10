import Wordmark from '../brand/Wordmark';
import FadeIn from '../common/FadeIn';

const LINKS = ['About', 'Blog', 'How It Works', 'Compatibility', 'FAQ', 'Privacy', 'Terms'];

function toSlug(label: string) {
  return label.toLowerCase().split(' ').join('-');
}

export default function Footer() {
  return (
    <FadeIn>
      <footer className="bg-obsidian border-t border-gold/10 py-12 px-6 text-center">
        <div className="flex justify-center mb-6">
          <Wordmark markSize={22} />
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          {LINKS.map((label) => {
            const href = "/" + toSlug(label);
            return (
              <a key={label} href={href} className="text-ivory/50 text-sm transition-colors duration-300 hover:text-gold">
                {label}
              </a>
            );
          })}
        </nav>

        <p className="text-ivory/30 text-xs">
          © 2026 Sutra5. All readings are interpretive, not guaranteed.
        </p>
      </footer>
    </FadeIn>
  );
}
