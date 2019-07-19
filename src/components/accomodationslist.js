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

    const SectionBlurb = styled.div`
        margin-bottom: 30px;
    `

    const ItemTitle = styled.div`
        ${props => props.theme.h3Heading}
        color: ${props => props.theme.maroon};
        margin-top: 10px;
    `

    const HotelList = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-around;

        @media (max-width: 920px) {
            flex-direction: column;
        }
    `

    const Hotel = styled.div`
        margin-bottom: 10px;
    `

    const HotelTitle = styled.div`
        ${props => props.theme.h3Heading}
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
                <PageTitle>Accommodations</PageTitle>
                <PageHeader
                    dangerouslySetInnerHTML={{
                        __html: dictionary.accommodationsHeaderHTML,
                    }}
                />
            </ContentBlock>
            <SectionWrapper>
                <ContentBlock>
                    <SectionTitle>Getting Around</SectionTitle>
                    <SectionBlurb
                        dangerouslySetInnerHTML={{
                            __html: dictionary.travelBlurbHTML,
                        }}
                    />
                    <ItemTitle>From the Airport</ItemTitle>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: dictionary.airportBlurbHTML,
                        }}
                    />
                    <ItemTitle>Getting Around</ItemTitle>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: dictionary.gettingAroundBlurbHTML,
                        }}
                    />
                </ContentBlock>
                <ContentBlock>
                    <SectionTitle>Things To Do</SectionTitle>
                    <SectionBlurb
                        dangerouslySetInnerHTML={{
                            __html: dictionary.enjoyBlurbHTML,
                        }}
                    />
                    <ItemTitle>Society Hill / Queens Village</ItemTitle>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: dictionary.societyHillBlurbHTML,
                        }}
                    />
                    <ItemTitle>Old City</ItemTitle>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: dictionary.oldCityBlurbHTML,
                        }}
                    />
                    <ItemTitle>Fishtown</ItemTitle>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: dictionary.fishtownBlurbHTML,
                        }}
                    />
                </ContentBlock>
                <ContentBlock>
                    <SectionTitle>Hotels & Places To Stay</SectionTitle>
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
                                    <HotelLink href={url}>
                                        Book &#11023;
                                    </HotelLink>
                                </Hotel>
                            )
                        })}
                    </HotelList>

                    <ItemTitle>Airbnb</ItemTitle>
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
