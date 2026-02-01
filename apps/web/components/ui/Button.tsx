import * as React from 'react';

import { cn } from '@/lib/utils/cn';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
};

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-marian-blue text-white shadow-soft hover:bg-deep-blue focus-visible:ring-marian-blue/30',
  ghost:
    'bg-transparent text-text-primary hover:bg-light-gray focus-visible:ring-marian-blue/20',
  outline:
    'border border-marian-blue/20 text-text-primary hover:border-marian-blue/40 hover:text-deep-blue focus-visible:ring-marian-blue/20',
};

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2',
        sizeStyles[size],
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}
