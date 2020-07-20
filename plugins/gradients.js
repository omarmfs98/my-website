const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, e, theme, variants }) {
    const gradients = theme('gradients', {})
    const gradientVariants = variants('gradients', [])

    const utilities = _.map(gradients, ([deg, start, ps, end, pe], name) => ({
        [`.bg-gradient-${e(name)}`]: {
            backgroundImage: `linear-gradient(${deg}, ${start} ${ps}, ${end} ${pe})`
        }
    }))

    addUtilities(utilities, gradientVariants)
})