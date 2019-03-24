import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalDictionary from '../globaldictionary'
import GlobalStyles from '../styles/globalStyles'
import styleTheme from '../styleTheme'

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={styleTheme}>
            <GlobalDictionary>
                <div id="site-container">
                    <GlobalStyles />
                    {children}
                </div>
            </GlobalDictionary>
        </ThemeProvider>
    )
}

export default Layout
