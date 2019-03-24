import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Splash from '../components/splash'
import Footer from '../components/footer'

const RootIndex = ({ data }) => {
    const siteTitle = get(data, 'site.siteMetadata.title')

    return (
        <Layout>
            <Helmet title={siteTitle} />
            <Splash title={siteTitle} />
            <Footer />
        </Layout>
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
