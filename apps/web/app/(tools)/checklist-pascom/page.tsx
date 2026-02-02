import type { Metadata } from 'next';

import { ChecklistPascomClient } from '@/components/tools/ChecklistPascomClient';

export const metadata: Metadata = {
  title: 'Checklist da PASCOM: Cobertura de Missas e Eventos',
  description:
    'Não esqueça nenhuma foto importante. Checklist completo para agentes da Pastoral da Comunicação organizarem a cobertura de eventos paroquiais.',
  keywords: ['pascom', 'fotografia religiosa', 'cobertura missa', 'checklist pascom', 'comunicação eclesial'],
  openGraph: {
    title: 'Checklist da PASCOM para Cobertura de Eventos',
    description: 'Ferramenta interativa para organizar a fotografia e transmissão de missas.',
    url: 'https://ferramentascatolicas.com.br/checklist-pascom',
  },
};

export default function ChecklistPascomPage() {
  return <ChecklistPascomClient />;
}
