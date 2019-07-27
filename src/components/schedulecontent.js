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
        margin-top: 30px;
    `

    const Button = styled.a`
        ${props => props.theme.h3Heading}
        display: flex;
        justify-content: center;
        align-items: center;
        width: 210px;
        height: 45px;
        margin-bottom: 20px;
        cursor: pointer;
        color: ${props => props.theme.maroon};
        background-color: ${props => props.theme.cream};
        border: 1px solid ${props => props.theme.maroon};

        &:last-child {
            margin-bottom: 0;
        }

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
                    <div
                        dangerouslySetInnerHTML={{
                            __html: dictionary.scheduleTitleHTML,
                        }}
                    />
                </PageTitle>
                <PageHeader
                    dangerouslySetInnerHTML={{
                        __html: dictionary.scheduleHeaderHTML,
                    }}
                />
            </ContentBlock>
            <ContentBlock>
                <SectionTitle
                    dangerouslySetInnerHTML={{
                        __html: dictionary.ceremonySectionTitleHTML,
                    }}
                />
                <div
                    dangerouslySetInnerHTML={{
                        __html: dictionary.ceremonyBlurbHTML,
                    }}
                />
                <ItemTitle
                    dangerouslySetInnerHTML={{
                        __html: dictionary.scheduleDateHTML,
                    }}
                />
                <div
                    dangerouslySetInnerHTML={{
                        __html: dictionary.venueAddressLine1HTML,
                    }}
                />
                <div
                    style={{ marginBottom: '20px' }}
                    dangerouslySetInnerHTML={{
                        __html: dictionary.venueAddressLine2HTML,
                    }}
                />
                <ItemTitle
                    dangerouslySetInnerHTML={{
                        __html: dictionary.ceremonyInfoLine1HTML,
                    }}
                />
                <ItemTitle
                    style={{ marginTop: '0px', marginBottom: '20px' }}
                    dangerouslySetInnerHTML={{
                        __html: dictionary.ceremonyInfoLine2HTML,
                    }}
                />
                <Button target="_blank" href={dictionary.viewMapButton.link}>
                    <ButtonText>
                        {dictionary.viewMapButton.buttonText}
                    </ButtonText>
                </Button>
                <Button
                    target="_blank"
                    href={dictionary.getDirectionsButton.link}
                >
                    <ButtonText>
                        {dictionary.getDirectionsButton.buttonText}
                    </ButtonText>
                </Button>
            </ContentBlock>
            <ContentBlock>
                <SectionTitle
                    dangerouslySetInnerHTML={{
                        __html: dictionary.afterpartySectionTitleHTML,
                    }}
                />
                <div
                    dangerouslySetInnerHTML={{
                        __html: dictionary.afterpartyBlurbHTML,
                    }}
                />
                <ItemTitle
                    dangerouslySetInnerHTML={{
                        __html: dictionary.scheduleDateHTML,
                    }}
                />
                <div
                    dangerouslySetInnerHTML={{
                        __html: dictionary.venueAddressLine1HTML,
                    }}
                />
                <div
                    style={{ marginBottom: '20px' }}
                    dangerouslySetInnerHTML={{
                        __html: dictionary.venueAddressLine2HTML,
                    }}
                />
                <ItemTitle
                    style={{ marginBottom: '20px' }}
                    dangerouslySetInnerHTML={{
                        __html: dictionary.afterpartyInfoLine1HTML,
                    }}
                />
                <Button target="_blank" href={dictionary.viewMapButton.link}>
                    <ButtonText>
                        {dictionary.viewMapButton.buttonText}
                    </ButtonText>
                </Button>
                <Button
                    target="_blank"
                    href={dictionary.getDirectionsButton.link}
                >
                    <ButtonText>
                        {dictionary.getDirectionsButton.buttonText}
                    </ButtonText>
                </Button>
            </ContentBlock>
        </>
    )
}
