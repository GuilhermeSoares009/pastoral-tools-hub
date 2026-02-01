import * as React from 'react';

import { cn } from '@/lib/utils/cn';

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: 'default' | 'soft';
};

export function Card({ className, tone = 'default', ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-md border border-light-gray bg-white shadow-soft transition-shadow',
        tone === 'soft' && 'bg-warm-white',
        className,
      )}
      {...props}
    />
  );
}
