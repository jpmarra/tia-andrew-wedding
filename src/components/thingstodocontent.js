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

    const Button = styled.a`
        ${props => props.theme.h3Heading}
        display: flex;
        justify-content: center;
        align-items: center;
        width: 210px;
        height: 45px;
        margin-top: 30px;
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

    const Link = styled.a`
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
                <PageTitle
                    dangerouslySetInnerHTML={{
                        __html: dictionary.thingsToDoTitleHTML,
                    }}
                />
                <PageHeader
                    dangerouslySetInnerHTML={{
                        __html: dictionary.thingsToDoHeaderHTML,
                    }}
                />
            </ContentBlock>
            <SectionWrapper>
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
                    <Button
                        target="_blank"
                        href={dictionary.viewMapButton.link}
                    >
                        <ButtonText>
                            {dictionary.viewMapButton.buttonText}
                        </ButtonText>
                    </Button>
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
                    <Link
                        target="_blank"
                        href={dictionary.societyHillLink.link}
                    >
                        {dictionary.societyHillLink.buttonText}
                    </Link>
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
                    <Link
                        target="_blank"
                        href={dictionary.queenVillageLink.link}
                    >
                        {dictionary.queenVillageLink.buttonText}
                    </Link>
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
                    <Link target="_blank" href={dictionary.fishtownLink.link}>
                        {dictionary.fishtownLink.buttonText}
                    </Link>
                </ContentBlock>
            </SectionWrapper>
        </>
    )
}
