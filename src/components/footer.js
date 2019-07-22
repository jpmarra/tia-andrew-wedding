import React, { useContext } from 'react'
import styled from 'styled-components'

import DictionaryContext from '../dictionarycontext'
import NavBar from './navbar'
import Burst from '../assets/burst.svg'

const Footer = () => {
    const dictionary = useContext(DictionaryContext)

    const Wrapper = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.maroon};
    `
    const StarWrapper = styled.div`
        color: ${props => props.theme.orange};
        display: flex;
        margin-top: 50px;
    `
    const BurstIcon = styled(Burst)`
        fill: currentColor;
        margin: 0 10px;
    `
    const FooterText = styled.div`
        ${props => props.theme.h1Heading};
        margin-top: 15px;
        color: ${props => props.theme.orange};
        display: flex;
        flex-direction: column;

        p {
            text-align: center;
            margin: 0;
        }
    `
    const NavWrapper = styled.div`
        margin-top: 60px;
        margin-bottom: 20px;
    `

    const Credits = styled.div`
        font-family: 'Founders Grotesk Medium';
        font-size: 12px;
        letter-spacing: 0.5px;
        color: ${props => props.theme.cream};
        margin-bottom: 20px;
        a {
            text-decoration: none;
            color: ${props => props.theme.cream};

            &:hover {
                color: ${props => props.theme.red};
            }
        }
    `
    return (
        <Wrapper>
            <StarWrapper>
                <BurstIcon />
            </StarWrapper>
            <FooterText
                dangerouslySetInnerHTML={{ __html: dictionary.footerTextHTML }}
            />
            <NavWrapper>
                <NavBar color="cream" hoverColor="red" />
            </NavWrapper>
            <Credits>
                Website design by{' '}
                <a href="http://www.andrewmcqustion.com">A. Mcquiston</a>.
                &nbsp;Development by{' '}
                <a href="http://www.jpmarra.com">JP Marra</a>.
            </Credits>
        </Wrapper>
    )
}

export default Footer
