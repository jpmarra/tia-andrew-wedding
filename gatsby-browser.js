import './src/styles/global.css'
const { detect } = require('detect-browser')

export const onInitialClientRender = () => {
    const browser = detect()

    // handle the case where we don't detect the browser
    if (browser) {
        if (browser.name === 'ie') {
            const gatsbyEl = document.getElementById('site-container')
            const supportDiv = document.createElement('div')
            const textDiv = document.createElement('div')
            const text = document.createTextNode(
                'This browser is not supported. Please visit this website in a modern browser for the best experience.'
            )
            textDiv.classList.add('not-supported-text')
            supportDiv.classList.add('not-supported')
            textDiv.appendChild(text)
            supportDiv.appendChild(textDiv)
            gatsbyEl.appendChild(supportDiv)
        }
    }
}
