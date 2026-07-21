/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        'term-bg': '#0f0f0f',
        'term-bg-light': '#1a1a1a',
        'term-panel': '#141414',
        'term-text': '#d4d4d4',
        'term-text-dim': '#808080',
        'term-green': '#4ec9b0',
        'term-accent': '#7dd3fc',
        'term-red': '#f87171',
        'term-yellow': '#fbbf24',
        'term-purple': '#d8b4fe',
        'term-orange': '#fb923c',
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.5' }],
        'lg': ['1.125rem', { lineHeight: '1.75' }],
        'xl': ['1.25rem', { lineHeight: '1.75' }],
        '2xl': ['1.5rem', { lineHeight: '2' }],
        '3xl': ['1.875rem', { lineHeight: '2.25' }],
        '4xl': ['2.25rem', { lineHeight: '2.5' }],
      },
    },
  },
  plugins: [],
}
