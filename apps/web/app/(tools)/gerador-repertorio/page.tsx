import type { Metadata } from 'next';

import { RepertorioClient } from '@/components/tools/RepertorioClient';

export const metadata: Metadata = {
  title: 'Gerador Automático de Repertório para Missa',
  description:
    'Crie sugestões de cantos para a Santa Missa em segundos. Baseado no Tempo Litúrgico e partes da celebração. Ideal para ministérios de música.',
  keywords: ['repertório missa', 'cantos católicos', 'música litúrgica', 'sugestão de cantos', 'ministério de música'],
  openGraph: {
    title: 'Gerador Automático de Repertório para Missa',
    description: 'Ferramenta gratuita para criar repertórios litúrgicos em segundos.',
    url: 'https://ferramentascatolicas.com.br/gerador-repertorio',
  },
};

export default function GeradorRepertorioPage() {
  return <RepertorioClient />;
}
