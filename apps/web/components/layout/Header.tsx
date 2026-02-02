'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';

import { SearchBar } from '@/components/layout/SearchBar';
import { CategoryFilter } from '@/components/tools/CategoryFilter';
import { useToolSearch } from '@/components/tools/ToolSearchContext';

export function Header() {
  const { query, setQuery, category, setCategory } = useToolSearch();

  return (
    <header className="sticky top-0 z-20 border-b border-light-gray/80 bg-warm-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <SearchBar
            className="w-full max-w-2xl flex-1"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
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
        <CategoryFilter value={category} onChange={setCategory} />
      </div>
    </header>
  );
}
