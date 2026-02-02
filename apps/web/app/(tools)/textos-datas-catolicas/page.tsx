import type { Metadata } from 'next';

import { TextosDatasClient } from '@/components/tools/TextosDatasClient';

export const metadata: Metadata = {
  title: 'Textos Prontos para Datas Comemorativas Católicas',
  description:
    'Mensagens, legendas e textos prontos para Dia do Padre, Páscoa, Natal, Padroeiros e outras solenidades. Copie e cole nas redes sociais da paróquia.',
  keywords: ['mensagens católicas', 'texto dia do padre', 'legenda dia do padroeiro', 'textos pascom', 'datas comemorativas igreja'],
  openGraph: {
    title: 'Banco de Textos para Datas Católicas',
    description: 'Textos prontos para homenagens e celebrações da sua paróquia.',
    url: 'https://ferramentascatolicas.com.br/textos-datas-catolicas',
  },
};

export default function TextosDatasCatolicasPage() {
  return <TextosDatasClient />;
}
