import Link from 'next/link';
import { Heart } from 'lucide-react';

import { Logo } from '@/components/ui/Logo';

export function ToolHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-light-gray/80 bg-warm-white/90 backdrop-blur" role="banner">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link className="flex items-center gap-2 text-deep-blue" href="/" aria-label="Voltar para página inicial">
          <Logo showText={true} />
        </Link>
        <nav className="flex items-center gap-6 text-sm font-semibold text-text-secondary">
          <Link className="transition-colors hover:text-deep-blue" href="#">
            Sobre
          </Link>
          <Link className="transition-colors hover:text-deep-blue" href="#">
            Contato
          </Link>
          <span className="hidden h-4 w-px bg-light-gray sm:block" />
          <Link
            className="flex items-center gap-2 text-marian-blue transition-colors hover:text-gold-accent"
            href="#"
          >
            <Heart className="h-4 w-4" />
            Doar
          </Link>
        </nav>
      </div>
    </header>
  );
}
