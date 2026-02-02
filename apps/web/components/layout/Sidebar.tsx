import Link from 'next/link';
import {
  Landmark,
  Grid3X3,
  Camera,
  Music,
  BookOpen,
  Droplet,
  CalendarDays,
  Wrench,
  Heart,
  PlusCircle,
  ShieldCheck,
} from 'lucide-react';

import { cn } from '@/lib/utils/cn';

const categories = [
  { label: 'Todas', icon: Grid3X3, active: true },
  { label: 'PASCOM', icon: Camera },
  { label: 'Música', icon: Music },
  { label: 'Liturgia', icon: BookOpen },
  { label: 'Sacramentos', icon: Droplet },
  { label: 'Textos & Datas', icon: CalendarDays },
  { label: 'Utilidades Pastorais', icon: Wrench },
];

export function Sidebar() {
  return (
    <aside className="hidden h-screen w-72 shrink-0 flex-col border-r border-light-gray bg-warm-white md:flex">
      <div className="flex h-full flex-col">
        <div className="flex h-20 items-center gap-3 border-b border-light-gray/80 px-6">
          <Landmark className="h-8 w-8 text-marian-blue" />
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold text-text-primary">Ferramentas</p>
            <p className="text-sm text-marian-blue">Católicas</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <p className="px-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-accent">
            Categorias
          </p>
          <div className="mt-3 space-y-1">
            {categories.map(({ label, icon: Icon, active }) => (
              <Link
                key={label}
                href="#"
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'bg-marian-blue text-white shadow-soft'
                    : 'text-text-secondary hover:bg-light-gray hover:text-deep-blue',
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </div>
          <div className="mt-8 rounded-md border border-marian-blue/10 bg-marian-blue p-4 text-white shadow-medium">
            <Heart className="h-6 w-6 text-gold-accent" />
            <h3 className="mt-3 text-sm font-semibold">Apoie o projeto</h3>
            <p className="mt-1 text-xs text-white/80">
              Ajude a manter as ferramentas gratuitas para todos.
            </p>
          </div>
        </div>
        <div className="border-t border-light-gray/80 px-4 py-4">
          <button className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-light-gray text-sm font-semibold text-text-primary transition-colors hover:bg-gold-accent/20">
            <PlusCircle className="h-4 w-4 text-gold-accent" />
            Sugerir ferramenta
          </button>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-text-secondary">
            <ShieldCheck className="h-4 w-4 text-marian-blue" />
            Sem cadastro • Sem dados salvos
          </div>
        </div>
      </div>
    </aside>
  );
}
