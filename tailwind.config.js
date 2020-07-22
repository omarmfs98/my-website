module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1408px',
    },
    extend: {
      minHeight: {
        skill: '400px',
        movil: '300px'
      },
      maxWidth: {
        skill: '400px'
      },
      colors: {
        wrapper: {
          dark: '#f1f1de',
          start: '#fbffb6',
          end: 'rgba(255, 255, 255, 0)'
        }
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
        'sk-4': '60px 0px 20px 0px'
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
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
        skill: '0px 0px 10px rgba(0, 0, 0, 0.08)'
      },
      gradients: theme => ({
        'wrapper': ['190deg', theme('colors.wrapper.start'), '0%', theme('colors.wrapper.end'), '45%']
      })
    },
  },
  variants: {
    minHeight: ['responsive'],
  },
  plugins: [
    require('./plugins/gradients')
  ],
}