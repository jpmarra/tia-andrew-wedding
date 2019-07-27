import React, { useContext, useState, useLayoutEffect } from 'react'
import styled from 'styled-components'

import Star from '../assets/star-icon.svg'
import DictionaryContext from '../dictionarycontext'

export default ({
    children,
    isTitle = false,
    isQuestions = false,
    isImages = false,
}) => {
    const dictionary = useContext(DictionaryContext)
    const [ssrDone, setSsrDone] = useState(false)

    useLayoutEffect(() => {
        setSsrDone(true)
        if (typeof window !== undefined) {
            dictionary.setIsMobile(window.innerWidth < 920)
        }
    }, [])
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
        width: 95%;
    `

    const RightContent = styled.div`
        margin-left: 80px;
        padding: 20px 0 60px 0;
        width: ${dictionary.isMobile || isTitle || isQuestions || isImages
            ? 90
            : 55}%;

        @media (max-width: 920px) {
            width: ${dictionary.isMobile || isTitle || isQuestions ? 90 : 100}%;
            margin-left: 20px;
        }
    `

    return (
        <ContentBlock>
            {ssrDone && !dictionary.isMobile && (
                <LeftRail>{isTitle ? <StarIcon /> : ''}</LeftRail>
            )}
            <RightRail>
                <RightContent>{children}</RightContent>
            </RightRail>
        </ContentBlock>
    )
}
