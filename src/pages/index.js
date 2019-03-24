import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/globalStyles'
import Splash from '../components/splash'
import styleTheme from '../styleTheme'

const RootIndex = ({ data }) => {
    const siteTitle = get(data, 'site.siteMetadata.title')

    return (
        <ThemeProvider theme={styleTheme}>
            <div id="site-container">
                <GlobalStyles />
                <Helmet title={siteTitle} />
                <Splash title={siteTitle} />
            </div>
        </ThemeProvider>
    )
}

export default RootIndex

export const pageQuery = graphql`
    query HomeQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
