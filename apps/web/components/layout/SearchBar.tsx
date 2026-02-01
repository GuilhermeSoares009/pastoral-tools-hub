import { Search } from 'lucide-react';

import { cn } from '@/lib/utils/cn';
import { Input } from '@/components/ui/Input';

type SearchBarProps = {
  className?: string;
  placeholder?: string;
};

export function SearchBar({
  className,
  placeholder = 'Buscar ferramenta (ex: liturgia diária, cantos, pascom)...',
}: SearchBarProps) {
  return (
    <div className={cn('relative', className)}>
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
      <Input
        className="pl-11"
        placeholder={placeholder}
        aria-label="Buscar ferramenta"
      />
    </div>
  );
}
