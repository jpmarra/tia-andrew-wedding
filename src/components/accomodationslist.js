import React, { useContext } from 'react'
import styled from 'styled-components'

import DictionaryContext from '../dictionarycontext'
import Star from '../assets/star-icon.svg'

export default () => {
    const dictionary = useContext(DictionaryContext)

    const PageTitle = styled.div`
        ${props => props.theme.h2Heading}
        margin-top: 10%;
        color: ${props => props.theme.orange};
        display: flex;
        align-items: center;
    `

    const SectionTitle = styled.div`
        ${props => props.theme.h1Heading}
        color: ${props => props.theme.orange};
    `

    const ItemTitle = styled.div`
        ${props => props.theme.h3Heading}
        color: ${props => props.theme.orange};
    `

    return (
        <>
            <PageTitle>
                <Star />
                <div style={{ margin: `10px 0 0 15px` }}>Accomodations</div>
            </PageTitle>
            <div>
                <SectionTitle>Stay</SectionTitle>
                <div
                    dangerouslySetInnerHTML={{
                        __html: dictionary.stayBlurbHTML,
                    }}
                />
                <ItemTitle>Airbnb</ItemTitle>
                <div
                    dangerouslySetInnerHTML={{
                        __html: dictionary.airbnbBlurbHTML,
                    }}
                />
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
        </>
    )
}
