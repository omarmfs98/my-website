module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1408px',
      },
      minHeight: {
        skill: '400px',
        movil: '300px',
      },
      maxWidth: {
        skill: '400px',
      },
      minWidth: {
        skill: '400px',
      },
      colors: {
        wrapper: {
          dark: '#ede4d1',
          start: '#f5e9c9',
          end: '#f5e9c9',
        },
        code: {
          bg: '#2c3043',      // fondo del bloque <pre>
          text: '#c0caf5',     // texto del código
          keyword: '#ff9e64',
          string: '#9ece6a',
          comment: '#565f89',
        },
      },
      spacing: {
        28: '7rem',
      },
      padding: {
        'wrapper-xl': '14.5rem 2.5rem 12rem 2.5rem',
        'wrapper-lg': '4.5rem 2.5rem 0rem 2.5rem',
        'wrapper-m': '10rem 0 10.6rem 0',
        'sk-1': '0px 0px 80px 0px',
        'sk-2': '20px 0px 60px 0px',
        'sk-3': '40px 0px 40px 0px',
        'sk-4': '60px 0px 20px 0px',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: '1.2',
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
        skill: '0px 0px 10px rgba(0, 0, 0, 0.08)',
      },
      gradients: theme => ({
        wrapper: [
          '190deg',
          theme('colors.wrapper.start'),
          '0%',
          theme('colors.wrapper.end'),
          '100%',
        ],
      }),
      typography: (theme) => ({
        custom: {
          css: {
            '--tw-prose-body': '#111827', // darker text for better contrast
            '--tw-prose-headings': '#0f172a',
            '--tw-prose-lead': '#1e293b',
            '--tw-prose-links': '#1d4ed8',
            '--tw-prose-bold': '#0f172a',
            '--tw-prose-counters': '#4b5563',
            '--tw-prose-bullets': '#4b5563',
            '--tw-prose-hr': '#d1d5db',
            '--tw-prose-quotes': '#1f2937',
            '--tw-prose-quote-borders': '#4b5563',
            '--tw-prose-captions': '#6b7280',
            '--tw-prose-code': '#dc2626',
            '--tw-prose-pre-code': '#f5e9c9',
            '--tw-prose-pre-bg': '#1e293b',
            '--tw-prose-th-borders': '#94a3b8',
            '--tw-prose-td-borders': '#cbd5e1',

            '--tw-prose-invert-body': '#f5e9c9',
            '--tw-prose-invert-headings': '#ffffff',
            '--tw-prose-invert-lead': '#facc15',
            '--tw-prose-invert-links': '#93c5fd',
            '--tw-prose-invert-bold': '#ffffff',
            '--tw-prose-invert-counters': '#fcd34d',
            '--tw-prose-invert-bullets': '#fde68a',
            '--tw-prose-invert-hr': '#fef3c7',
            '--tw-prose-invert-quotes': '#fef3c7',
            '--tw-prose-invert-quote-borders': '#fde68a',
            '--tw-prose-invert-captions': '#fcd34d',
            '--tw-prose-invert-code': '#fef3c7',
            '--tw-prose-invert-pre-code': '#fcd34d',
            '--tw-prose-invert-pre-bg': '#1e1b4b',
            '--tw-prose-invert-th-borders': '#fcd34d',
            '--tw-prose-invert-td-borders': '#fef9c3',
            '--tw-prose-th': '#ffffff', // texto claro sobre fondo oscuro
            '--tw-prose-invert-th': '#ffffff', // texto blanco en modo oscuro
            '.prose th': {
              '@apply border border-gray-600 px-4 py-2 text-gray-100 bg-gray-800': {},
            },
            '.prose td': {
              '@apply border border-gray-400 text-gray-900 px-4 py-2 bg-yellow-200': {},
            },
            '.prose thead': {
              '@apply bg-gray-900': {},
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('./plugins/gradients'),
    require('@tailwindcss/typography'),
  ],
}