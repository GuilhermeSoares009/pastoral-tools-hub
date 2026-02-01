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
        'marian-blue': '#4A6FA5',
        'deep-blue': '#2C4563',
        'warm-white': '#FAF9F7',
        'light-gray': '#F5F4F2',
        'gold-accent': '#C9A961',
        'text-primary': '#1A1A1A',
        'text-secondary': '#666666',
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
