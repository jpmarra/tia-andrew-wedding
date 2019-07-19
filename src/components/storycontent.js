import React, { useContext } from 'react'
import styled from 'styled-components'
import ContentBlock from './contentblock.js'
import DictionaryContext from '../dictionarycontext'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Questions from '../components/questions'

const query = graphql`
    query photoQuery {
        allFile(
            filter: {
                extension: { regex: "/(jpg)|(jpeg)/" }
                relativeDirectory: { eq: "storyPhotos" }
            }
        ) {
            edges {
                node {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
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
            const images = data.allFile.edges.map(edge => {
                return edge.node.childImageSharp.fluid
            })

            const getImageName = img => {
                const nameArr = img.src.split('/')
                return nameArr[nameArr.length - 1]
            }

            images.sort((a, b) => (getImageName(a) > getImageName(b) ? 1 : -1))
            console.log(images)

            const PageTitle = styled.div`
                ${props => props.theme.h2Heading}
                color: ${props => props.theme.maroon};
                margin-bottom: 10px;
            `
            const PageHeader = styled.div`
                ${props => props.theme.h1Heading}
                color: ${props => props.theme.orange};

                @media (max-width: 920px) {
                    ${props => props.theme.mobileHeading}
                }
            `

            const ImageGrid = styled.div`
                display: grid;
                grid-gap: 20px;
                grid-template-columns: repeat(2, 1fr);
            `

            const SectionTitle = styled.div`
                ${props => props.theme.h1Heading}
                margin-bottom: 20px;
                color: ${props => props.theme.maroon};
            `

            const PhotosBlurb = styled.div`
                width: 80%;
                margin-bottom: 40px;
            `

            const PhotoLink = styled.a`
                text-decoration: none;
                cursor: pointer;
                color: ${props => props.theme.orange};

                &:hover {
                    text-decoration: underline;
                }
            `

            return (
                <>
                    <ContentBlock isTitle>
                        <PageTitle>
                            <div>Our Story</div>
                        </PageTitle>
                        <PageHeader
                            dangerouslySetInnerHTML={{
                                __html: dictionary.storyHeaderHTML,
                            }}
                        />
                    </ContentBlock>
                    <ContentBlock>
                        <SectionTitle
                            dangerouslySetInnerHTML={{
                                __html: dictionary.storySectionHeaderHTML,
                            }}
                        />
                        <div
                            dangerouslySetInnerHTML={{
                                __html: dictionary.storySectionBlurbHTML,
                            }}
                        />
                    </ContentBlock>
                    <ContentBlock isImages>
                        <SectionTitle>Photos</SectionTitle>
                        <PhotosBlurb>
                            <div
                                style={{ marginBottom: '10px' }}
                                dangerouslySetInnerHTML={{
                                    __html: dictionary.photosBlurbHTML,
                                }}
                            />
                            <PhotoLink>
                                Viva Love Photography &#11023;
                            </PhotoLink>
                        </PhotosBlurb>
                        <ImageGrid>
                            {images.map(image => (
                                <Img fluid={image} />
                            ))}
                        </ImageGrid>
                    </ContentBlock>
                </>
            )
        }}
    />
)
