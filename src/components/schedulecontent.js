import React, { useContext } from 'react'
import styled from 'styled-components'
import ContentBlock from './contentblock.js'
import DictionaryContext from '../dictionarycontext'

import Questions from '../components/questions'

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

    const SectionTitle = styled.div`
        ${props => props.theme.h1Heading}
        margin-bottom: 20px;
        color: ${props => props.theme.maroon};
    `

    const ItemTitle = styled.div`
        ${props => props.theme.h3Heading}
        color: ${props => props.theme.maroon};
        margin-top: 10px;
    `

    const Button = styled.button`
        ${props => props.theme.h3Heading}
        display: block;
        width: 210px;
        height: 45px;
        margin-bottom: 20px;
        background-color: ${props => props.theme.cream};
        cursor: pointer;
        color: ${props => props.theme.maroon};
        border: 1px solid ${props => props.theme.maroon};

        &:hover {
            color: ${props => props.theme.orange};
            border: 1px solid ${props => props.theme.orange};
        }
    `

    const ButtonText = styled.div`
        margin-top: 5px;
    `

    return (
        <>
            <ContentBlock isTitle>
                <PageTitle>
                    <div>Schedule</div>
                </PageTitle>
                <PageHeader
                    dangerouslySetInnerHTML={{
                        __html: dictionary.scheduleHeaderHTML,
                    }}
                />
            </ContentBlock>
            <ContentBlock>
                <SectionTitle>Ceremony & Reception</SectionTitle>
                <div
                    dangerouslySetInnerHTML={{
                        __html: dictionary.ceremonyBlurbHTML,
                    }}
                />
                <ItemTitle>Saturday, September 28th, 2019</ItemTitle>
                <div>321 South 4th Street</div>
                <div style={{ marginBottom: '20px' }}>
                    Philadelphia, PA 19106
                </div>
                <ItemTitle>Ceremony begins at 5:30pm</ItemTitle>
                <ItemTitle style={{ marginTop: '0px', marginBottom: '20px' }}>
                    Reception to immediately follow
                </ItemTitle>
                <Button>
                    <ButtonText>View Map</ButtonText>
                </Button>
                <Button>
                    <ButtonText>Get Directions</ButtonText>
                </Button>
            </ContentBlock>
            <ContentBlock>
                <SectionTitle>Afterparty</SectionTitle>
                <div
                    dangerouslySetInnerHTML={{
                        __html: dictionary.afterpartyBlurbHTML,
                    }}
                />
                <ItemTitle>Saturday, September 28th, 2019</ItemTitle>
                <div>321 South 4th Street</div>
                <div style={{ marginBottom: '20px' }}>
                    Philadelphia, PA 19106
                </div>
                <ItemTitle style={{ marginBottom: '20px' }}>
                    Afterparty follows the reception around 11:00pm
                </ItemTitle>
                <Button>
                    <ButtonText>View Map</ButtonText>
                </Button>
                <Button>
                    <ButtonText>Get Directions</ButtonText>
                </Button>
            </ContentBlock>
        </>
    )
}
