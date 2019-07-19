import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'
import 'normalize.css'

import GlobalDictionary from '../globaldictionary'
import GlobalStyles from '../styles/globalStyles'
import BurgerMenu from './burgermenu'
import styleTheme from '../styleTheme'

const Layout = ({ children, color }) => {
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' && window.innerWidth < 920
    )

    useEffect(() => {
        typeof window !== 'undefined' &&
            window.addEventListener('resize', updateDimensions)
        return () =>
            typeof window !== 'undefined' &&
            window.removeEventListener('resize', updateDimensions)
    })
    const updateDimensions = () => {
        if (typeof window !== 'undefined' && window.innerWidth < 920) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    return (
        <ThemeProvider theme={styleTheme}>
            <GlobalDictionary>
                {isMobile && (
                    <BurgerMenu
                        pageWrapId={'site-container'}
                        outerContainerId={'gatsby-focus-wrapper'}
                    />
                )}
                <div id="site-container">
                    <GlobalStyles />
                    {children}
                </div>
            </GlobalDictionary>
        </ThemeProvider>
    )
}

export default Layout
