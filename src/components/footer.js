import React, { useContext } from 'react'
import styled from 'styled-components'

import DictionaryContext from '../dictionarycontext'
import NavBar from './navbar'

const Footer = () => {
    const dictionary = useContext(DictionaryContext)

    const Wrapper = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.black};
    `
    const FooterText = styled.div`
        ${props => props.theme.h1Heading};
        margin-top: 60px;
        color: ${props => props.theme.red};
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
            <FooterText
                dangerouslySetInnerHTML={{ __html: dictionary.footerTextHTML }}
            />
            <NavWrapper>
                <NavBar color="#FEF2E9" hoverColor="#CA4D36" />
            </NavWrapper>
            <Credits>
                Website design by{' '}
                <a href="www.andrewmcqustion.com">A. Mcquiston</a>.
                &nbsp;Development by <a href="www.jpmarra.com">JP Marra</a>.
            </Credits>
        </Wrapper>
    )
}

export default Footer
