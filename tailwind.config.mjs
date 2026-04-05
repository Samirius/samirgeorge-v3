/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Deep slate — sophisticated, not startup-red */
        background: '#09090B',
        'surface-1': '#131316',
        'surface-2': '#1C1C21',
        'surface-3': '#27272E',

        /* Warm amber accent — wisdom, forging, craft */
        primary: {
          DEFAULT: '#D4A853',
          hover: '#E0BA6A',
          subtle: 'rgba(212, 168, 83, 0.08)',
          muted: 'rgba(212, 168, 83, 0.15)',
        },

        /* Gradient — warm amber to soft gold */
        'gradient-start': '#D4A853',
        'gradient-end': '#E8C878',

        /* Text */
        'text-primary': '#EDEDEE',
        'text-secondary': '#7A7A82',

        /* Borders */
        border: 'rgba(255, 255, 255, 0.06)',
        'border-hover': 'rgba(255, 255, 255, 0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        arabic: ['Noto Sans Arabic', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-sm': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
      },
      borderRadius: {
        'card': '16px',
        'btn': '12px',
        'tag': '8px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'orb-float': 'orbFloat 10s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        orbFloat: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '33%': { transform: 'translate(-48%, -52%) scale(1.05)' },
          '66%': { transform: 'translate(-52%, -48%) scale(0.95)' },
        },
        glitch: {
          '0%': { color: '#D4A853', textShadow: '2px 0 #E8C878, -2px 0 #8B7355' },
          '50%': { color: '#E8C878', textShadow: '-2px 0 #D4A853, 2px 0 #F5E6B8' },
          '100%': { color: '#EDEDEE', textShadow: 'none' },
        },
      },
    },
  },
  plugins: [],
};
