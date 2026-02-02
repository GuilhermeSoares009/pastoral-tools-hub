import type { Metadata } from 'next';

import { OrdemCantosClient } from '@/components/tools/OrdemCantosClient';

export const metadata: Metadata = {
  title: 'Ordem dos Cantos da Missa | Ferramentas Católicas Online',
  description:
    'Guia pastoral com a ordem recomendada dos cantos na missa, organizado por partes da celebração.',
};

export default function OrdemCantosPage() {
  return <OrdemCantosClient />;
}
