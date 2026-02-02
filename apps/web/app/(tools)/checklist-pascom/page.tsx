import type { Metadata } from 'next';

import { ChecklistPascomClient } from '@/components/tools/ChecklistPascomClient';

export const metadata: Metadata = {
  title: 'Checklist da PASCOM | Ferramentas Católicas Online',
  description: 'Checklist interativo para organizar a cobertura pastoral das celebrações.',
};

export default function ChecklistPascomPage() {
  return <ChecklistPascomClient />;
}
