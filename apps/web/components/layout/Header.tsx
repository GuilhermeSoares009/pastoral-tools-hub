import Link from 'next/link';
import { Heart, Star, Camera, Music, BookOpen, MessageSquare } from 'lucide-react';

import { SearchBar } from '@/components/layout/SearchBar';
import { cn } from '@/lib/utils/cn';

const categories = [
  { label: 'Populares', icon: Star, active: true },
  { label: 'PASCOM', icon: Camera },
  { label: 'Música', icon: Music },
  { label: 'Liturgia', icon: BookOpen },
  { label: 'Redes Sociais', icon: MessageSquare },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-light-gray/80 bg-warm-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <SearchBar className="w-full max-w-2xl flex-1" />
          <nav className="hidden items-center gap-6 text-sm font-semibold text-text-secondary lg:flex">
            <Link className="transition-colors hover:text-deep-blue" href="#">
              Sobre
            </Link>
            <Link className="transition-colors hover:text-deep-blue" href="#">
              Contato
            </Link>
            <span className="h-4 w-px bg-light-gray" />
            <Link
              className="flex items-center gap-2 text-marian-blue transition-colors hover:text-gold-accent"
              href="#"
            >
              <Heart className="h-4 w-4" />
              Doar
            </Link>
          </nav>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              className={cn(
                'flex shrink-0 items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors',
                active
                  ? 'border-marian-blue/20 bg-marian-blue text-white shadow-soft'
                  : 'border-light-gray bg-white text-text-secondary hover:border-marian-blue/30 hover:text-deep-blue',
              )}
            >
              <Icon className={cn('h-4 w-4', active && 'text-gold-accent')} />
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
