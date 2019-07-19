import './src/styles/global.css'
const { detect } = require('detect-browser')

export const onClientEntry = () => {
    const browser = detect()

    // handle the case where we don't detect the browser
    if (browser) {
        if (browser.name === ie) {
            const gatsbyEl = document.getElementById('__gatsby')
            gatsbyEl.innerHTML = 'Browser is not supported'
        }
    }
}
