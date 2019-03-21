import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const heroTextHTML = get(
      this,
      'props.data.contentfulComingSoonPage.heroText.childMarkdownRemark.html'
    )
    const subText = get(this, 'props.data.contentfulComingSoonPage.subText')
    const buttons = get(this, 'props.data.allContentfulLinkButton.edges')
    console.log(buttons)

    return (
      <Layout title={siteTitle} color={'#641A1F'}>
        <Helmet title={siteTitle} />
        <div dangerouslySetInnerHTML={{ __html: heroTextHTML }} />
        <div>{subText}</div>
        <div className="buttons">
          {buttons.map(({ node }) => {
            return <a href={node.link}>{node.buttonText}</a>
          })}
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulComingSoonPage {
      title
      subText
      heroText {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulLinkButton(filter: { location: { eq: "splash" } }) {
      edges {
        node {
          buttonText
          link
        }
      }
    }
  }
`
