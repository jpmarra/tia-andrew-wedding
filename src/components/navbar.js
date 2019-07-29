import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import DictionaryContext from '../dictionarycontext'

const NavBar = ({ color, hoverColor, location }) => {
    const dictionary = useContext(DictionaryContext)
    const colors = {
        white: `#FFFFFF`,
        black: `#111111`,
        cream: `#FEF2E9`,
        orange: `#F3793B`,
        red: `#CA4D36`,
        maroon: `#641A1F`,
    }

    color = colors[color]
    hoverColor = colors[hoverColor]

    const Wrapper = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: max-content;
        height: 100%;

        @media (max-width: 920px) {
            flex-direction: column;
            text-align: center;
        }
    `

    const NavItem = styled.a`
        ${props => props.theme.h3Heading};
        text-decoration: none;
        margin: 0 10px -5px 10px;
        color: ${color ? color : '#641A1F'};

        &:hover {
            color: ${hoverColor ? hoverColor : '#FEF2E9'};
        }
    `
    const LinkWrapper = styled.div`
        display: flex;
        align-items: center;
        height: 100%;
        border-bottom: ${props =>
            props.isSelected ? '3px solid' + color : 'none'};
    `

    const NavLink = styled(Link)`
        ${props => props.theme.h3Heading};
        text-decoration: none;
        margin: 0 10px 0 10px;
        margin-bottom: ${props => (props.isSelected ? '-8px' : '-5px')};
        color: ${color ? color : '#641A1F'};

        &:hover {
            color: ${hoverColor ? hoverColor : '#FEF2E9'};
        }
    `
    return (
        <Wrapper>
            <LinkWrapper isSelected={location && location.pathname === '/'}>
                <NavLink
                    isSelected={location && location.pathname === '/'}
                    to="/"
                >
                    Home
                </NavLink>
            </LinkWrapper>
            <LinkWrapper
                isSelected={location && location.pathname === '/story'}
            >
                <NavLink
                    isSelected={location && location.pathname === '/story'}
                    to="/story"
                >
                    Our Story
                </NavLink>
            </LinkWrapper>
            <LinkWrapper
                isSelected={location && location.pathname === '/schedule'}
            >
                <NavLink
                    isSelected={location && location.pathname === '/schedule'}
                    to="/schedule"
                >
                    Schedule
                </NavLink>
            </LinkWrapper>
            <LinkWrapper
                isSelected={location && location.pathname === '/travel'}
            >
                <NavLink
                    isSelected={location && location.pathname === '/travel'}
                    to="/travel"
                >
                    Travel
                </NavLink>
            </LinkWrapper>
            <LinkWrapper
                isSelected={location && location.pathname === '/thingstodo'}
            >
                <NavLink
                    isSelected={location && location.pathname === '/thingstodo'}
                    to="/thingstodo"
                >
                    Things To Do
                </NavLink>
            </LinkWrapper>
            <LinkWrapper isSelected={location && location.pathname === '/faqs'}>
                <NavLink
                    isSelected={location && location.pathname === '/faqs'}
                    to="/faqs"
                >
                    FAQs
                </NavLink>
            </LinkWrapper>
            <NavItem target="_blank" href={dictionary.rsvpButton.link}>
                {dictionary.rsvpButton.buttonText}
            </NavItem>
            <NavItem target="_blank" href={dictionary.registryButton.link}>
                {dictionary.registryButton.buttonText}
            </NavItem>
        </Wrapper>
    )
}
export default NavBar
