import * as React from 'react';

import { cn } from '@/lib/utils/cn';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

export function Input({ className, hasError, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'h-11 w-full rounded-md border bg-warm-white px-4 text-sm text-text-primary shadow-soft transition-colors placeholder:text-text-secondary focus:border-marian-blue/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-marian-blue/20',
        hasError && 'border-red-300 focus:border-red-400 focus:ring-red-200',
        className,
      )}
      {...props}
    />
  );
}
