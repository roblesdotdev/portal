import { type Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1536px',
      },
    },
    extend: {
      colors: {
        canvas: 'hsl(var(--canvas))',
        panel: 'hsl(var(--panel))',
        fg: {
          DEFAULT: 'hsl(var(--fg-default))',
          muted: 'hsl(var(--fg-muted))',
          primary: 'hsl(var(--fg-primary))',
          error: 'hsl(var(--fg-error))',
        },
        border: 'hsl(var(--border))',
        primary: 'hsl(var(--primary))',
        'on-primary': 'hsl(var(--on-primary))',
      },
      fontFamily: {
        sans: [
          '"Inter"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config
