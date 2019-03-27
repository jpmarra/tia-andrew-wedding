import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'

import GlobalDictionary from '../globaldictionary'
import GlobalStyles from '../styles/globalStyles'
import styleTheme from '../styleTheme'

const Layout = ({ children, color }) => {
    const colors = {
        white: `#FFFFFF`,
        black: `#111111`,
        cream: `#FEF2E9`,
        orange: `#F3793B`,
        red: `#CA4D36`,
        maroon: `#641A1F`,
    }

    color = colors[color]

    const Title = styled.div`
        ${props => props.theme.h1Heading};
        position: absolute;
        width: 250px;
        left: 50%;
        top: 20px;
        margin-left: -125px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => (color ? color : props.theme.maroon)};
    `
    return (
        <ThemeProvider theme={styleTheme}>
            <GlobalDictionary>
                <div id="site-container">
                    <GlobalStyles />
                    <Link to="/">
                        <Title>Tia + Andrew</Title>
                    </Link>
                    {children}
                </div>
            </GlobalDictionary>
        </ThemeProvider>
    )
}

export default Layout
