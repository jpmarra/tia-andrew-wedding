import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Burst from '../assets/burst.svg'
import Close from '../assets/close.svg'
import DictionaryContext from '../dictionarycontext'

export default props => {
    const dictionary = useContext(DictionaryContext)
    const NavLink = styled(Link)`
        ${props => props.theme.h1Heading}
        text-decoration: none;
        text-align: center;
        margin: 15px 0;
        color: ${props => props.theme.cream};
        cursor: pointer;

        @media (max-width: 920px) {
            font-size: 30px;
        }
    `

    const NavItem = styled.a`
        ${props => props.theme.h1Heading}
        text-decoration: none;
        text-align: center;
        margin: 15px 0;
        color: ${props => props.theme.cream};
        cursor: pointer;

        @media (max-width: 920px) {
            font-size: 30px;
        }
    `
    const MenuWrapper = styled.div`
        z-index: 1000;
        display: flex;
        position: fixed;
        align-items: center;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: ${props => props.theme.maroon};
    `
    const MobileMenu = styled.div`
        display: flex;
        height: 80%;
        width: 100%;
        flex-direction: column;
        color: ${props => props.theme.cream};
    `

    const CloseButton = styled(Close)`
        position: absolute;
        width: 26px;
        height: 20px;
        right: 26px;
        top: 20px;
        fill: currentColor;
    `

    const StarWrapper = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 40px;
    `
    return (
        <>
            {props.isOpen && (
                <MenuWrapper>
                    <MobileMenu>
                        <CloseButton onClick={() => props.setIsOpen(false)} />
                        <NavLink
                            to="/story"
                            onClick={() => props.setIsOpen(false)}
                        >
                            Our Story
                        </NavLink>
                        <NavLink
                            to="/schedule"
                            onClick={() => props.setIsOpen(false)}
                        >
                            Schedule
                        </NavLink>
                        <NavLink
                            to="/faqs"
                            onClick={() => props.setIsOpen(false)}
                        >
                            FAQs
                        </NavLink>
                        <NavLink
                            to="/travel"
                            onClick={() => props.setIsOpen(false)}
                        >
                            Travel
                        </NavLink>
                        <NavLink
                            to="/thingstodo"
                            onClick={() => props.setIsOpen(false)}
                        >
                            Things To Do
                        </NavLink>
                        <NavItem
                            target="_blank"
                            href={dictionary.rsvpButton.link}
                        >
                            {dictionary.rsvpButton.buttonText}
                        </NavItem>
                        <NavItem
                            target="_blank"
                            href={dictionary.registryButton.link}
                        >
                            {dictionary.registryButton.buttonText}
                        </NavItem>
                        <StarWrapper>
                            <Burst />
                        </StarWrapper>
                    </MobileMenu>
                </MenuWrapper>
            )}
        </>
    )
}
