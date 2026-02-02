import { Search } from 'lucide-react';

import { cn } from '@/lib/utils/cn';
import { Input } from '@/components/ui/Input';

type SearchBarProps = {
  className?: string;
  placeholder?: string;
  query?: string;
  setQuery?: (query: string) => void;
  // Legacy props for compatibility if needed elsewhere, though we should migrate
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBar({
  className,
  placeholder = 'Buscar ferramenta (ex: liturgia diaria, cantos, pascom)...',
  query,
  setQuery,
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className={cn('relative group', className)}>
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 group-focus-within:text-marian-blue transition-colors" />
      <Input
        className="pl-11 h-11 border-gray-200 bg-gray-50/50 text-sm transition-all focus:bg-white focus:border-marian-blue focus:ring-4 focus:ring-marian-blue/10 rounded-xl"
        placeholder={placeholder}
        aria-label="Buscar ferramenta"
        value={query ?? value}
        onChange={(e) => {
           if (setQuery) setQuery(e.target.value);
           if (onChange) onChange(e);
        }}
      />
    </div>
  );
}
