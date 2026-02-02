import { Music, Camera, BookOpen, Radio, CalendarDays, Droplet } from 'lucide-react';

import { ToolCard } from '@/components/tools/ToolCard';

type ToolItem = {
  id: string;
  title: string;
  description: string;
  accent?: 'blue' | 'gold';
  category: string;
  href?: string;
};

const categoryIcons: Record<string, JSX.Element> = {
  musica: <Music className="h-6 w-6" />,
  pascom: <Camera className="h-6 w-6" />,
  liturgia: <BookOpen className="h-6 w-6" />,
  utilidades: <Radio className="h-6 w-6" />,
  textos: <CalendarDays className="h-6 w-6" />,
  sacramentos: <Droplet className="h-6 w-6" />,
};

export function ToolGrid({ items }: { items: ToolItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((tool) => (
        <ToolCard
          key={tool.id}
          title={tool.title}
          description={tool.description}
          accent={tool.accent}
          icon={categoryIcons[tool.category]}
          href={tool.href}
        />
      ))}
    </div>
  );
}
