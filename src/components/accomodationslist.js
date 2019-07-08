import React, { useContext } from 'react'
import styled from 'styled-components'

import DictionaryContext from '../dictionarycontext'
import Star from '../assets/star-icon.svg'
import NavBar from '../components/navbar'

export default () => {
    const dictionary = useContext(DictionaryContext)

    const PageTitle = styled.div`
        ${props => props.theme.h2Heading}
        margin-top: 8%;
        margin-bottom: 20px;
        color: ${props => props.theme.orange};
        display: flex;
        align-items: center;
    `

    const SectionWrapper = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        color: ${props => props.theme.cream};

        p {
            margin: 0;
        }
    `

    const Section = styled.div`
        width: 33%;
        &.right {
            padding-right: 30px;
        }
        &.middle {
            padding: 0 30px;
            border-left: 0.5px solid;
            border-right: 0.5px solid;
            border-color: ${props => props.theme.orange};
        }
        &.left {
            padding-left: 30px;
        }
    `

    const SectionTitle = styled.div`
        ${props => props.theme.h1Heading}
        color: ${props => props.theme.orange};
    `

    const ItemTitle = styled.div`
        ${props => props.theme.h3Heading}
        color: ${props => props.theme.orange};
        margin-top: 10px;
        margin-bottom: 5px;
    `

    const Hotel = styled.div`
        margin-bottom: 10px;
    `

    const HotelTitle = styled.div`
        ${props => props.theme.h3Heading}
        margin-bottom: 3px;
    `

    const HotelLink = styled.a`
        text-decoration: none;
        color: ${props => props.theme.orange};

        &:hover {
            color: ${props => props.theme.red};
        }
    `

    const NavContainer = styled.div`
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin-bottom: 20px;
    `

    return (
        <>
            <PageTitle>
                <Star />
                <div style={{ margin: `10px 0 0 15px` }}>Accomodations</div>
            </PageTitle>
            <SectionWrapper>
                <Section className="right">
                    <SectionTitle>Stay</SectionTitle>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: dictionary.stayBlurbHTML,
                        }}
                    />
                    <ItemTitle>Hotels</ItemTitle>
                    {dictionary.hotels.map(hotel => {
                        const { name, address, description, url } = hotel.node

                        return (
                            <Hotel>
                                <HotelTitle>{name}</HotelTitle>
                                <div>{address}</div>
                                <div>{description}</div>
                                <HotelLink href={url}>Book &#11023;</HotelLink>
                            </Hotel>
                        )
                    })}
                    <ItemTitle>Airbnb</ItemTitle>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: dictionary.airbnbBlurbHTML,
                        }}
                    />
                </Section>
                <Section className="middle">
                    <SectionTitle>Travel</SectionTitle>
                    <div
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
                </Section>
                <Section className="left">
                    <SectionTitle>Enjoy</SectionTitle>
                    <div
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
                </Section>
            </SectionWrapper>
            <NavContainer>
                    <NavBar color="orange" hoverColor="cream" />
            </NavContainer>
        </>
    )
}
