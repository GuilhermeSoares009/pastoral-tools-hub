'use client';

import * as React from 'react';
import {
  Filter,
  Grid3X3,
  Camera,
  Music,
  BookOpen,
  Droplet,
  CalendarDays,
  Wrench,
} from 'lucide-react';

import categorias from '@/lib/data/categorias.json';
import { cn } from '@/lib/utils/cn';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  todas: Grid3X3,
  pascom: Camera,
  musica: Music,
  liturgia: BookOpen,
  sacramentos: Droplet,
  textos: CalendarDays,
  utilidades: Wrench,
};

type CategoryFilterProps = {
  value: string;
  onChange: (value: string) => void;
};

export function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {categorias.map((category) => {
        const active = value === category.slug;
        const Icon = iconMap[category.slug] ?? Filter;
        return (
          <button
            key={category.id}
            onClick={() => onChange(category.slug)}
            className={cn(
              'flex shrink-0 items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors',
              active
                ? 'border-marian-blue/20 bg-marian-blue text-white shadow-soft'
                : 'border-light-gray bg-white text-text-secondary hover:border-marian-blue/30 hover:text-deep-blue',
            )}
          >
            <Icon className={cn('h-4 w-4', active && 'text-gold-accent')} />
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
