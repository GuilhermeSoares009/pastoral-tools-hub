import type { Metadata } from 'next';

import { HomeCatalog } from '@/components/tools/HomeCatalog';

export const metadata: Metadata = {
  title: 'Ferramentas Católicas Online',
  description: 'Hub de ferramentas gratuitas para facilitar o dia a dia pastoral.',
};

export default function HomePage() {
  return <HomeCatalog />;
}
