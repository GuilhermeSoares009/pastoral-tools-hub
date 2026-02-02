import * as React from 'react';
import { Landmark } from 'lucide-react';

import { cn } from '@/lib/utils/cn';

interface LogoProps {
    className?: string;
    iconClassName?: string;
    textClassName?: string;
    showText?: boolean;
}

export function Logo({
    className,
    iconClassName,
    textClassName,
    showText = true,
}: LogoProps) {
    return (
        <div className={cn('flex items-center gap-3', className)}>
            <div className="rounded-lg bg-marian-blue/10 p-2">
                <Landmark className={cn('h-6 w-6 text-marian-blue', iconClassName)} aria-hidden="true" />
            </div>
            {showText && (
                <div className={cn('leading-none', textClassName)}>
                    <p className="font-display text-lg font-bold tracking-tight text-text-primary">
                        Ferramentas
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gold-accent">
                        Católicas
                    </p>
                </div>
            )}
            <span className="sr-only">Ferramentas Católicas Online</span>
        </div>
    );
}
