import { ToolCard } from '@/components/tools/ToolCard';

const tools = [
  {
    title: 'Gerador de Repertório',
    description: 'Crie repertórios para missas automaticamente com base no tempo litúrgico.',
  },
  {
    title: 'Gerador de Texto Social',
    description: 'Legendas criativas para Instagram e Facebook da paróquia com IA.',
    accent: 'gold',
  },
  {
    title: 'Ordem dos Cantos',
    description: 'Guia rápido da ordem correta dos cânticos para diferentes solenidades.',
  },
  {
    title: 'Checklist da PASCOM',
    description: 'Lista de verificação para cobertura fotográfica de missas e eventos.',
  },
  {
    title: 'Legendas Litúrgicas',
    description: 'Gerador de arquivos .SRT ou texto para projeção durante a celebração.',
    accent: 'gold',
  },
  {
    title: 'Roteiro de Transmissão',
    description: 'Template organizador para equipes de streaming e corte de câmera.',
  },
];

export function ToolGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {tools.map((tool) => (
        <ToolCard key={tool.title} {...tool} />
      ))}
    </div>
  );
}
