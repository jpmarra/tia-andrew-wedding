import './src/styles/global.css'
const { detect } = require('detect-browser')

export const onClientEntry = () => {
    const browser = detect()

    // handle the case where we don't detect the browser
    if (browser) {
        console.log(browser.name)
        console.log(browser.version)
        console.log(browser.os)
    }
}
