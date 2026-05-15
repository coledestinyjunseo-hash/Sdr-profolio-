import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#020204',
        ink: '#0a0a12',
        gold: {
          DEFAULT: '#c8a55c',
          50: '#faf5e9',
          100: '#f0e3bc',
          200: '#e0c98c',
          300: '#d4b574',
          400: '#cfaa66',
          500: '#c8a55c',
          600: '#a8893f',
          700: '#856d2f',
          800: '#5d4c21',
          900: '#352b13',
        },
        cyan: { glow: '#00e5ff' },
        purple: { glow: '#8b5cf6' },
        pink: { glow: '#ec4899' },
        tiktok: '#fe2c55',
        ig: '#e1306c',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Playfair Display', 'serif'],
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      animation: {
        'scan-line': 'scan 3s linear infinite',
        'pulse-ring': 'pring 2s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'aurora': 'aurora 20s ease-in-out infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        pring: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -50px) rotate(120deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
        },
      },
      boxShadow: {
        'glow-gold': '0 0 30px rgba(200, 165, 92, 0.3)',
        'glow-gold-lg': '0 0 60px rgba(200, 165, 92, 0.4)',
        'glow-cyan': '0 0 30px rgba(0, 229, 255, 0.3)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
