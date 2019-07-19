import React, { useContext } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { graphql, Link, StaticQuery } from 'gatsby'
import NavBar from './navbar'
import DictionaryContext from '../dictionarycontext'

const query = graphql`
    query headerQuery {
        file(relativePath: { regex: "/splash-background/" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default () => (
    <StaticQuery
        query={query}
        render={data => {
            const dictionary = useContext(DictionaryContext)
            const Hero = styled.div`
                width: 100%;
                display: flex;
                justify-content: center;
                overflow-y: hidden;
            `

            const Title = styled.div`
                ${props => props.theme.h1Heading};
                padding: 1.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${props => props.theme.maroon};
            `

            const NavContainer = styled.div`
                background-color: ${props => props.theme.orange};
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
            `

            const NavLinks = styled.div`
                width: 100%;
                display: flex;
                justify-content: center;
                padding-top: 15px;
                padding-bottom: 10px;
                border-color: ${props => props.theme.maroon};
                border-top: 1px solid;
                border-bottom: 1px solid;
            `

            return (
                <NavContainer>
                    <BackgroundImage
                        backgroundColor="#F3793B"
                        style={{ width: '100%' }}
                        fluid={data.file.childImageSharp.fluid}
                    >
                        <Hero>
                            <Link to="/">
                                <Title>Tia + Andrew</Title>
                            </Link>
                        </Hero>
                    </BackgroundImage>
                    {!dictionary.isMobile && (
                        <NavLinks>
                            <NavBar color="maroon" hoverColor="cream" />
                        </NavLinks>
                    )}
                </NavContainer>
            )
        }}
    />
)
