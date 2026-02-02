import Link from 'next/link';
import {
  Landmark,
  Camera,
  Music,
  BookOpen,
  Droplet,
  CalendarDays,
  Wrench,
  Heart,
  PlusCircle,
  LucideIcon,
  ChevronRight,
} from 'lucide-react';

import toolsData from '@/lib/data/ferramentas.json';

const CATEGORY_CONFIG: Record<string, { label: string; icon: LucideIcon }> = {
  pascom: { label: 'PASCOM', icon: Camera },
  musica: { label: 'Música', icon: Music },
  liturgia: { label: 'Liturgia', icon: BookOpen },
  sacramentos: { label: 'Sacramentos', icon: Droplet },
  textos: { label: 'Textos & Datas', icon: CalendarDays },
  utilidades: { label: 'Utilidades Pastorais', icon: Wrench },
};

export function Sidebar() {
  // Group tools by category
  const toolsByCategory = toolsData.reduce((acc, tool) => {
    const category = tool.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tool);
    return acc;
  }, {} as Record<string, typeof toolsData>);

  const sortedCategories = Object.keys(CATEGORY_CONFIG).filter(
    (key) => toolsByCategory[key] && toolsByCategory[key].length > 0,
  );

  return (
    <aside className="hidden h-screen w-80 flex-col border-r border-light-gray/60 bg-white/95 backdrop-blur-md md:flex fixed left-0 top-0 bottom-0 z-40 shadow-[1px_0_20px_-10px_rgba(0,0,0,0.1)]">
      <div className="flex h-full flex-col">
        {/* Header Branding */}
        <div className="flex h-24 items-center gap-4 border-b border-light-gray/40 px-8">
          <div className="rounded-lg bg-marian-blue/5 p-2">
            <Landmark className="h-6 w-6 text-marian-blue" />
          </div>
          <div className="leading-none">
            <p className="font-display text-lg font-bold tracking-tight text-text-primary">Ferramentas</p>
            <p className="text-xs font-medium uppercase tracking-widest text-gold-accent">Católicas</p>
          </div>
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-8 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          <div className="relative space-y-8">
            {/* Connecting line for continuity */}
            <div className="absolute left-[3px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

            {sortedCategories.map((categoryKey) => (
              <div key={categoryKey} className="relative">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                   <div className="relative z-10 flex h-2 w-2 items-center justify-center rounded-full bg-white ring-2 ring-gray-100">
                     <div className="h-1 w-1 rounded-full bg-gold-accent" />
                   </div>
                   <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    {CATEGORY_CONFIG[categoryKey].label}
                   </h3>
                </div>
                
                {/* Tools List */}
                <div className="ml-1 space-y-0.5 border-l border-transparent pl-4">
                  {toolsByCategory[categoryKey].map((tool) => (
                    <Link
                      key={tool.id}
                      href={tool.href || '#'}
                      className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-600 transition-all hover:bg-slate-50 hover:text-marian-blue hover:shadow-sm hover:translate-x-1"
                    >
                      <span className="font-medium">{tool.title}</span>
                      <ChevronRight className="h-3 w-3 opacity-0 transition-opacity -ml-2 group-hover:opacity-100 group-hover:ml-0 text-gold-accent" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Support Card */}
          <div className="mt-10 mb-4 rounded-xl bg-gradient-to-br from-marian-blue to-deep-blue p-5 text-white shadow-lg shadow-marian-blue/20">
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <Heart className="h-4 w-4 text-gold-accent" />
            </div>
            <h3 className="font-display text-base font-semibold">Apoie o projeto</h3>
            <p className="mt-1 text-xs text-blue-100 leading-relaxed">
              Ajude a manter estas ferramentas gratuitas e sem anúncios.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-light-gray/40 bg-gray-50/50 px-6 py-4 backdrop-blur-sm">
          <button className="flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white text-xs font-bold uppercase tracking-wide text-slate-600 shadow-sm transition-all hover:border-gold-accent hover:text-gold-accent hover:shadow-md">
            <PlusCircle className="h-4 w-4" />
            Sugerir ferramenta
          </button>
          <div className="mt-4 flex justify-center text-[10px] text-slate-400">
            <span>
              Desenvolvido por{' '}
              <a
                href="https://www.instagram.com/guilhermesoaresweb/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-marian-blue hover:text-gold-accent transition-colors"
              >
                Guilherme Soares
              </a>
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
