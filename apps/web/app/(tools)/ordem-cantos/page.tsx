import type { Metadata } from 'next';

import { OrdemCantosClient } from '@/components/tools/OrdemCantosClient';

export const metadata: Metadata = {
  title: 'Guia da Ordem dos Cantos da Missa',
  description:
    'Consulte a ordem correta dos cânticos litúrgicos para Solenidades, Festas e Memórias. Guia prático para equipes de liturgia e canto.',
  keywords: ['ordem da missa', 'quais cantos cantar', 'regra litúrgica', 'cânticos missa', 'formação litúrgica'],
  openGraph: {
    title: 'Guia da Ordem dos Cantos da Missa',
    description: 'Saiba exatamente quais cantos devem ser executados em cada tipo de celebração.',
    url: 'https://ferramentascatolicas.com.br/ordem-cantos',
  },
};

export default function OrdemCantosPage() {
  return <OrdemCantosClient />;
}
