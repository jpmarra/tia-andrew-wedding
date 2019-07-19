import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'
import 'normalize.css'

import GlobalDictionary from '../globaldictionary'
import GlobalStyles from '../styles/globalStyles'
import BurgerMenu from './burgermenu'
import styleTheme from '../styleTheme'
import BurgerButton from '../assets/Wedding-Icon-Menu.svg'

const Layout = ({ children, color }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' && window.innerWidth < 920
    )

    const MenuButton = styled(BurgerButton)`
        z-index: 100;
        position: absolute;
        width: 26px;
        height: 20px;
        right: 26px;
        top: 20px;
    `

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
                    <>
                        <MenuButton onClick={() => setIsOpen(true)} />
                        <BurgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
                    </>
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
