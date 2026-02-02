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
  title: 'Ferramentas Católicas Online',
  description: 'Ferramentas gratuitas para facilitar o dia a dia pastoral.',
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
