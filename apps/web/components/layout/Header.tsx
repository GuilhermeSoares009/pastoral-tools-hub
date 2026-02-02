'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';

import { Logo } from '@/components/ui/Logo';
import { SearchBar } from '@/components/layout/SearchBar';
import { CategoryFilter } from '@/components/tools/CategoryFilter';
import { useToolSearch } from '@/components/tools/ToolSearchContext';

export function Header() {
  const { query, setQuery, category, setCategory } = useToolSearch();

  return (
    <header className="sticky top-0 z-20 border-b border-light-gray/80 bg-warm-white/90 backdrop-blur" role="banner">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-4 md:px-8 md:py-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          {/* Logo visible only on mobile/tablet when sidebar is hidden */}
          <Link href="/" className="md:hidden" aria-label="Ir para página inicial">
            <Logo />
          </Link>

          <SearchBar
            className="w-full max-w-2xl flex-1 shadow-sm transition-all focus-within:shadow-md"
            query={query}
            setQuery={setQuery}
            aria-label="Buscar ferramentas"
          />

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-500 lg:flex" aria-label="Menu principal">
            <Link className="transition-colors hover:text-marian-blue focus-visible:text-marian-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marian-blue/20 rounded-sm" href="#">
              Sobre
            </Link>
            <Link className="transition-colors hover:text-marian-blue focus-visible:text-marian-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marian-blue/20 rounded-sm" href="#">
              Contato
            </Link>
            <span className="h-4 w-px bg-gray-200" aria-hidden="true" />
            <Link
              className="group flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5 text-marian-blue transition-all hover:border-marian-blue/30 hover:bg-marian-blue/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marian-blue/20"
              href="#"
            >
              <Heart className="h-4 w-4 text-gold-accent transition-transform group-hover:scale-110" aria-hidden="true" />
              <span>Doar</span>
            </Link>
          </nav>
        </div>
        <CategoryFilter value={category} onChange={setCategory} />
      </div>
    </header>
  );
}
