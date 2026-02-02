import type { Metadata } from 'next';

import { HomeCatalog } from '@/components/tools/HomeCatalog';

export const metadata: Metadata = {
  title: 'Ferramentas Gratuitas para PASCOM, Música e Liturgia',
  description:
    'Simplifique a vida pastoral com ferramentas online gratuitas: gerador de repertório, checklist de eventos, roteiros e muito mais. Feito para paróquias.',
  alternates: {
    canonical: 'https://ferramentascatolicas.com.br',
  },
};

export default function HomePage() {
  return <HomeCatalog />;
}
