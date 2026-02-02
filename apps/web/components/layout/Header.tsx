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
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-8 py-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <SearchBar
            className="w-full max-w-2xl flex-1 shadow-sm transition-all focus-within:shadow-md"
            query={query}
            setQuery={setQuery}
          />
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-500 lg:flex">
            <Link className="transition-colors hover:text-marian-blue" href="#">
              Sobre
            </Link>
            <Link className="transition-colors hover:text-marian-blue" href="#">
              Contato
            </Link>
            <span className="h-4 w-px bg-gray-200" />
            <Link
              className="group flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5 text-marian-blue transition-all hover:border-marian-blue/30 hover:bg-marian-blue/5"
              href="#"
            >
              <Heart className="h-4 w-4 text-gold-accent transition-transform group-hover:scale-110" />
              Doar
            </Link>
          </nav>
        </div>
        <CategoryFilter value={category} onChange={setCategory} />
      </div>
    </header>
  );
}
