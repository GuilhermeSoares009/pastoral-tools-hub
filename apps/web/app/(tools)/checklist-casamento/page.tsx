import type { Metadata } from 'next';

import { ChecklistCasamentoClient } from '@/components/tools/ChecklistCasamentoClient';

export const metadata: Metadata = {
  title: 'Checklist para Casamento na Igreja Católica',
  description:
    'Organize toda a documentação e detalhes litúrgicos para o Matrimônio. Guia para noivos e secretarias paroquiais sobre o processo religioso.',
  keywords: ['casamento religioso', 'documentos igreja', 'processo matrimonial', 'checklist noiva católica', 'curso de noivos'],
  openGraph: {
    title: 'Checklist Completo para Casamento na Igreja',
    description: 'Organize a documentação e a cerimônia religiosa sem estresse.',
    url: 'https://ferramentascatolicas.com.br/checklist-casamento',
  },
};

export default function ChecklistCasamentoPage() {
  return <ChecklistCasamentoClient />;
}
