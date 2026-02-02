import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { cn } from '@/lib/utils/cn';
import { Card } from '@/components/ui/Card';

type ToolCardProps = {
  title: string;
  description: string;
  accent?: 'blue' | 'gold';
  icon?: React.ReactNode;
  href?: string;
};

export function ToolCard({ title, description, accent = 'blue', icon, href }: ToolCardProps) {
  const isGold = accent === 'gold';
  const content = (
    <Card
      className={cn(
        'group relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-xl',
        isGold && 'hover:border-gold-accent/20',
      )}
    >
      <div 
        className={cn(
           "absolute -right-12 -top-12 h-32 w-32 rounded-full bg-marian-blue/5 transition-transform group-hover:scale-150", 
           isGold && "bg-gradient-to-br from-gold-accent/5 to-transparent"
        )} 
      />
      
      <div className="relative flex items-start justify-between">
        <div
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-marian-blue transition-colors group-hover:bg-marian-blue group-hover:text-white',
            isGold && 'bg-gold-accent/10 text-gold-accent group-hover:bg-gold-accent group-hover:text-white',
          )}
        >
          {icon ?? <span className="font-display text-lg">?</span>}
        </div>
        <ArrowUpRight className="h-5 w-5 text-gray-300 transition-all group-hover:text-marian-blue group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      
      <div className="relative flex-1">
        <h3 className="font-display text-lg font-bold tracking-tight text-slate-800 transition-colors group-hover:text-marian-blue">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{description}</p>
      </div>
      
      <div className="relative mt-4 flex items-center gap-2 border-t border-gray-100 pt-4">
         <span
            className={cn(
              'text-[10px] font-black uppercase tracking-widest text-slate-400 transition-colors group-hover:text-marian-blue',
              isGold && 'group-hover:text-gold-accent',
            )}
          >
            Acessar Ferramenta
          </span>
      </div>
    </Card>
  );

  if (!href) return content;

  return (
    <Link href={href} className="block" aria-label={`Abrir ${title}`}>
      {content}
    </Link>
  );
}
