import Link from 'next/link';
import { Landmark } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-12 border-t border-light-gray/80 py-10 text-text-secondary">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center gap-2 text-marian-blue md:justify-start">
            <Landmark className="h-6 w-6 text-gold-accent" />
            <span className="font-display text-lg font-semibold text-text-primary">
              Ferramentas Católicas
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm">
            Ferramentas gratuitas para facilitar o dia a dia pastoral e servir à Igreja.
          </p>
          <p className="mt-4 text-xs">
            © 2026 Ferramentas Católicas Online.{" "}
            <span className="italic text-marian-blue">Ad Maiorem Dei Gloriam.</span>
          </p>
        </div>
        <div className="flex gap-6 text-sm font-semibold">
          <Link className="transition-colors hover:text-deep-blue" href="#">
            Privacidade
          </Link>
          <Link className="transition-colors hover:text-deep-blue" href="#">
            Termos
          </Link>
          <Link className="transition-colors hover:text-deep-blue" href="#">
            Enviar Feedback
          </Link>
        </div>
      </div>
    </footer>
  );
}
