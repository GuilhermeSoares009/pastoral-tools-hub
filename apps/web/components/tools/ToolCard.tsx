import * as React from 'react';
import { ArrowUpRight } from 'lucide-react';

import { cn } from '@/lib/utils/cn';
import { Card } from '@/components/ui/Card';

type ToolCardProps = {
  title: string;
  description: string;
  accent?: 'blue' | 'gold';
  icon?: React.ReactNode;
};

export function ToolCard({ title, description, accent = 'blue', icon }: ToolCardProps) {
  const isGold = accent === 'gold';

  return (
    <Card
      className={cn(
        'group flex h-full flex-col gap-4 rounded-md border-light-gray/80 p-5 transition-all hover:-translate-y-1 hover:shadow-card-hover',
        isGold && 'hover:border-gold-accent/40',
      )}
    >
      <div className="flex items-start justify-between">
        <div
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-md bg-marian-blue/10 text-marian-blue',
            isGold && 'bg-gold-accent/15 text-gold-accent',
          )}
        >
          {icon ?? <span className="font-display text-lg">?</span>}
        </div>
        <ArrowUpRight className="h-4 w-4 text-gold-accent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="flex-1">
        <h3 className="font-display text-lg font-semibold text-text-primary transition-colors group-hover:text-deep-blue">
          {title}
        </h3>
        <p className="mt-2 text-sm text-text-secondary">{description}</p>
      </div>
      <span
        className={cn(
          'mt-2 border-t border-light-gray/80 pt-4 text-xs font-bold uppercase tracking-[0.2em] text-marian-blue',
          isGold && 'text-gold-accent',
        )}
      >
        Abrir ferramenta
      </span>
    </Card>
  );
}
