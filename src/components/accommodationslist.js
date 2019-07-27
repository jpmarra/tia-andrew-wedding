import React, { useContext } from 'react'
import styled from 'styled-components'
import ContentBlock from './contentblock.js'
import DictionaryContext from '../dictionarycontext'

export default () => {
    const dictionary = useContext(DictionaryContext)

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

    const SectionWrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: ${props => props.theme.maroon};

        p {
            margin: 0;
        }
    `

    const SectionTitle = styled.div`
        ${props => props.theme.h1Heading}
        margin-bottom: 20px;
        color: ${props => props.theme.maroon};
    `

    const SectionBlurb = styled.div``

    const ItemTitle = styled.div`
        ${props => props.theme.h3Heading}
        color: ${props => props.theme.maroon};
        margin-top: 30px;
    `

    const HotelList = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;

        @media (max-width: 920px) {
            flex-direction: column;
        }
    `

    const Hotel = styled.div`
        margin-top: 30px;
    `

    const HotelTitle = styled.div`
        ${props => props.theme.h3Heading}
    `
    const HotelLinkWrapper = styled.div`
        margin-top: 5px;
    `

    const HotelLink = styled.a`
        text-decoration: none;
        color: ${props => props.theme.orange};

        &:hover {
            text-decoration: underline;
        }
    `

    return (
        <>
            <ContentBlock isTitle>
                <PageTitle
                    dangerouslySetInnerHTML={{
                        __html: dictionary.accommodationsTitleHTML,
                    }}
                />
                <PageHeader
                    dangerouslySetInnerHTML={{
                        __html: dictionary.accommodationsHeaderHTML,
                    }}
                />
            </ContentBlock>
            <SectionWrapper>
                <ContentBlock>
                    <SectionTitle
                        dangerouslySetInnerHTML={{
                            __html: dictionary.gettingAroundSectionTitleHTML,
                        }}
                    />
                    <SectionBlurb
                        dangerouslySetInnerHTML={{
                            __html: dictionary.travelBlurbHTML,
                        }}
                    />
                    <ItemTitle
                        dangerouslySetInnerHTML={{
                            __html: dictionary.airportTitleHTML,
                        }}
                    />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: dictionary.airportBlurbHTML,
                        }}
                    />
                    <ItemTitle
                        dangerouslySetInnerHTML={{
                            __html: dictionary.gettingAroundSectionTitleHTML,
                        }}
                    />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: dictionary.gettingAroundBlurbHTML,
                        }}
                    />
                </ContentBlock>
                <ContentBlock>
                    <SectionTitle
                        dangerouslySetInnerHTML={{
                            __html: dictionary.enjoyTitleHTML,
                        }}
                    />
                    <SectionBlurb
                        dangerouslySetInnerHTML={{
                            __html: dictionary.enjoyBlurbHTML,
                        }}
                    />
                    <ItemTitle
                        dangerouslySetInnerHTML={{
                            __html: dictionary.societyHillTitleHTML,
                        }}
                    />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: dictionary.societyHillBlurbHTML,
                        }}
                    />
                    <ItemTitle
                        dangerouslySetInnerHTML={{
                            __html: dictionary.oldCityTitleHTML,
                        }}
                    />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: dictionary.oldCityBlurbHTML,
                        }}
                    />
                    <ItemTitle
                        dangerouslySetInnerHTML={{
                            __html: dictionary.fishtownTitleHTML,
                        }}
                    />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: dictionary.fishtownBlurbHTML,
                        }}
                    />
                </ContentBlock>
                <ContentBlock>
                    <SectionTitle
                        dangerouslySetInnerHTML={{
                            __html: dictionary.staySectionTitleHTML,
                        }}
                    />
                    <SectionBlurb
                        dangerouslySetInnerHTML={{
                            __html: dictionary.stayBlurbHTML,
                        }}
                    />
                    <HotelList>
                        {dictionary.hotels.map(hotel => {
                            const {
                                name,
                                address,
                                description,
                                url,
                            } = hotel.node

                            return (
                                <Hotel>
                                    <HotelTitle>{name}</HotelTitle>
                                    <div>{address}</div>
                                    <div>{description}</div>
                                    <HotelLinkWrapper>
                                        <HotelLink href={url}>Book</HotelLink>
                                    </HotelLinkWrapper>
                                </Hotel>
                            )
                        })}
                    </HotelList>

                    <ItemTitle
                        dangerouslySetInnerHTML={{
                            __html: dictionary.airbnbTitleHTML,
                        }}
                    />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: dictionary.airbnbBlurbHTML,
                        }}
                    />
                </ContentBlock>
            </SectionWrapper>
        </>
    )
}
