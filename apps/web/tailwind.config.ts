import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'marian-blue': 'var(--marian-blue)',
        'deep-blue': 'var(--deep-blue)',
        'warm-white': 'var(--warm-white)',
        'light-gray': 'var(--light-gray)',
        'gold-accent': 'var(--gold-accent)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.06)',
        medium: '0 4px 16px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 24px rgba(74, 111, 165, 0.12)',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
      },
    },
  },
  plugins: [],
};

export default config;
