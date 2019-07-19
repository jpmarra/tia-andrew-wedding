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
    return (
        <>
            <ContentBlock isTitle>
                <PageTitle>
                    <div>Frequently Asked Questions</div>
                </PageTitle>
                <PageHeader
                    dangerouslySetInnerHTML={{
                        __html: dictionary.faqHeaderHTML,
                    }}
                />
            </ContentBlock>
            <ContentBlock isQuestions>
                <Questions />
            </ContentBlock>
        </>
    )
}
