import type { Metadata } from 'next';

import { TextosDatasClient } from '@/components/tools/TextosDatasClient';

export const metadata: Metadata = {
  title: 'Textos para Datas Católicas | Ferramentas Católicas Online',
  description: 'Banco de textos prontos para datas litúrgicas e momentos pastorais.',
};

export default function TextosDatasCatolicasPage() {
  return <TextosDatasClient />;
}
