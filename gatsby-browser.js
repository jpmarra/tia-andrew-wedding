import './src/styles/global.css'
const { detect } = require('detect-browser')

export const onClientEntry = () => {
    const browser = detect()

    // handle the case where we don't detect the browser
    if (browser) {
        if (browser.name === 'ie') {
            const gatsbyEl = document.getElementById('gatsby-container')
            console.log('element: ', gatsbyEl)
            gatsbyEl.innerHTML =
                '<div class="not-supported"><div>This browser is not supported. Please visit this website in a modern browser for the best experience.<div></div>'
        }
    }
}
