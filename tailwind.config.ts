import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        secondary: '#4F46E5',
        darkbg: '#0F172A',
        darksurface: '#1E293B',
        lighttext: '#F8FAFC',
        mutedtext: '#94A3B8',
        codebg: '#1a202c',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-jet-brains-mono)'],
      },
      keyframes: {
        'fade-in-down': {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
