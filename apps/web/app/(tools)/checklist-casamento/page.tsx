import type { Metadata } from 'next';

import { ChecklistCasamentoClient } from '@/components/tools/ChecklistCasamentoClient';

export const metadata: Metadata = {
  title: 'Checklist para Casamento | Ferramentas Católicas Online',
  description: 'Checklist pastoral para organizar documentos e preparação do matrimônio.',
};

export default function ChecklistCasamentoPage() {
  return <ChecklistCasamentoClient />;
}
