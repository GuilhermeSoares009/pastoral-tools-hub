import type { Metadata } from 'next';

import { RepertorioClient } from '@/components/tools/RepertorioClient';

export const metadata: Metadata = {
  title: 'Gerador de Repertório | Ferramentas Católicas Online',
  description:
    'Gere uma sugestão de repertório musical para a missa com base no tempo litúrgico e estilo desejado.',
};

export default function GeradorRepertorioPage() {
  return <RepertorioClient />;
}
