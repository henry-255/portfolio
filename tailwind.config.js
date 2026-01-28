/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'oklch(var(--color-primary) / <alpha-value>)',
          dark: 'oklch(var(--color-primary-dark) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'oklch(var(--color-secondary) / <alpha-value>)',
        },
        background: 'oklch(var(--color-background) / <alpha-value>)',
        foreground: 'oklch(var(--color-foreground) / <alpha-value>)',
      },
      fontFamily: {
        sans: [
          'Inter Variable',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'Geist Mono Variable',
          'monospace',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin': 'spin 1s linear infinite',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}