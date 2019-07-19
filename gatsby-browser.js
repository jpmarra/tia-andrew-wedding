import './src/styles/global.css'
const { detect } = require('detect-browser')

export const onInitialClientRender = () => {
    const browser = detect()

    // handle the case where we don't detect the browser
    if (browser) {
        if (browser.name === 'ie') {
            const gatsbyEl = document.getElementById('site-container')
            const supportDiv = document.createElement('div')
            const text = document.createTextNode()
            supportDiv.appendChild(text)
            supportDiv.classList.add('not-supported')
            gatsbyEl.appendChild(supportDiv)
        }
    }
}
