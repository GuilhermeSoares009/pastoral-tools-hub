import type { Metadata } from 'next';
import { Lora, Nunito_Sans } from 'next/font/google';

import '@/app/globals.css';

const displayFont = Lora({
  subsets: ['latin'],
  variable: '--font-display',
});

const bodyFont = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ferramentascatolicas.com.br'),
  title: {
    default: 'Ferramentas Católicas Online | Hub Pastoral Gratuito',
    template: '%s | Ferramentas Católicas Online',
  },
  description:
    'Plataforma 100% gratuita com ferramentas para PASCOM, músicos litúrgicos, catequistas e padres. Gerador de repertório, checklists e roteiros.',
  keywords: [
    'igreja católica',
    'ferramentas pastorais',
    'pascom',
    'música litúrgica',
    'repertório missa',
    'liturgia diária',
    'catequese',
    'formação católica',
  ],
  authors: [{ name: 'Guilherme Soares' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ferramentascatolicas.com.br',
    siteName: 'Ferramentas Católicas Online',
    title: 'Ferramentas Católicas Online | Hub Pastoral Gratuito',
    description:
      'Acesse ferramentas gratuitas criadas para ajudar no dia a dia da sua paróquia. Sem cadastro, simples e direto.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ferramentas Católicas Online - Hub Pastoral',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferramentas Católicas Online',
    description: 'Ferramentas gratuitas para PASCOM e Liturgia.',
    images: ['/images/og-image.jpg'],
    creator: '@guilhermesoares',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-warm-white font-body text-text-primary">
        {children}
      </body>
    </html>
  );
}
