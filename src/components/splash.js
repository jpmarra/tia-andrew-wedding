import React, { useContext } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
import Img from 'gatsby-image'

import NavBar from './navbar'
import Layout from './layout'
import DictionaryContext from '../dictionarycontext'

const query = graphql`
    query splashQuery {
        file(relativePath: { regex: "/splash-background/" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default ({ title }) => {
    const dictionary = useContext(DictionaryContext)
    return (
        <StaticQuery
            query={query}
            render={data => {
                const Wrapper = styled.div`
                    height: 100%;
                    width: 100%;
                    min-height: max-content;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background-color: transparent;
                `
                const Title = styled.div`
                    ${props => props.theme.h1Heading};
                    height: 10%;
                    display: flex;
                    align-items: center;

                    p {
                        margin: 0;
                        color: ${props => props.theme.maroon};
                    }
                `
                const HeroText = styled.div`
                    ${props => props.theme.primaryHeading};
                    color: ${props => props.theme.cream};
                    text-align: center;
                    height: 80%;
                    width: 65%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                `

                const NavContainer = styled.div`
                    height: 10%;
                    display: flex;
                    align-items: center;
                `
                const heroTextHTML = get(
                    data,
                    'contentfulDictionary.heroText.childMarkdownRemark.html'
                )
                return (
                    <Wrapper>
                        <Title>
                            <p>{title}</p>
                        </Title>
                        <Img
                            css={{ top: 0, left: 0, right: 0, bottom: 0 }}
                            style={{
                                position: `absolute`,
                                backgroundColor: '#F3793B',
                                zIndex: -1,
                            }}
                            fluid={data.file.childImageSharp.fluid}
                        />
                        <HeroText
                            dangerouslySetInnerHTML={{
                                __html: dictionary.heroTextHTML,
                            }}
                        />
                        <NavContainer>
                            <NavBar />
                        </NavContainer>
                    </Wrapper>
                )
            }}
        />
    )
}
