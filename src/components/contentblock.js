import React, { useContext } from 'react'
import styled from 'styled-components'

import Star from '../assets/star-icon.svg'
import DictionaryContext from '../dictionarycontext'

export default ({ children, isTitle = false, isQuestions = false }) => {
    const dictionary = useContext(DictionaryContext)
    const ContentBlock = styled.div`
        width: 100%;
        display: flex;
        padding: 20px 40px 40px 0;
        padding: 40px;
        padding-left: 0;
        border-bottom: 1px solid ${props => props.theme.red};

        @media (max-width: 920px) {
            width: 100vw;
            padding-right: 0;
        }

        :last-child {
            border-bottom: none;
        }
    `

    const StarIcon = styled(Star)`
        margin-top: 20px;
        margin-left: 40px;
        * {
            fill: currentColor;
        }
        @media (max-width: 920px) {
            transform: scale(0.7);
            margin: 0;
        }
    `

    const LeftRail = styled.div`
        width: 15%;
        display: flex;
        justify-content: center;
        color: ${props => props.theme.maroon};
        border-right: 1px solid ${props => props.theme.orange};
    `

    const RightRail = styled.div`
        width: ${dictionary.isMobile || isTitle || isQuestions ? 90 : 60}%;
    `

    const RightContent = styled.div`
        margin-left: 80px;
        padding: 20px 0;
        width: ${isTitle ? 90 : 70}%;

        @media (max-width: 920px) {
            width: ${isTitle ? 90 : 100}%;
            margin-left: 20px;
        }
    `

    return (
        <ContentBlock>
            {!dictionary.isMobile && (
                <LeftRail>{isTitle ? <StarIcon /> : ''}</LeftRail>
            )}
            <RightRail>
                <RightContent>{children}</RightContent>
            </RightRail>
        </ContentBlock>
    )
}
