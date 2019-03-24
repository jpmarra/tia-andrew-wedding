import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
import Layout from './layout'

const query = graphql`
    query splashQuery {
        contentfulDictionary {
            heroText {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`

export default ({ title }) => (
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
                background-color: ${props => props.theme.orange};
            `
            const Title = styled.div`
                ${props => props.theme.h1Heading};
            `
            const HeroText = styled.div`
                ${props => props.theme.primaryHeading};
                color: ${props => props.theme.white};
                text-align: center;
                width: 65%;
                display: flex;
                justify-content: center;
            `
            const heroTextHTML = get(
                data,
                'contentfulDictionary.heroText.childMarkdownRemark.html'
            )
            return (
                <Wrapper>
                    <Title>{title}</Title>
                    <HeroText
                        dangerouslySetInnerHTML={{ __html: heroTextHTML }}
                    />
                </Wrapper>
            )
        }}
    />
)
