import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import DictionaryContext from '../dictionarycontext'

const NavBar = ({ color, hoverColor }) => {
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
        width: max-content;

        @media (max-width: 920px) {
            flex-direction: column;
            text-align: center;
        }
    `

    const NavItem = styled.a`
        ${props => props.theme.h3Heading};
        text-decoration: none;
        margin: 0 10px 0 10px;
        color: ${color ? color : '#641A1F'};

        &:hover {
            color: ${hoverColor ? hoverColor : '#FEF2E9'};
        }
    `
    const NavLink = styled(Link)`
        ${props => props.theme.h3Heading};
        text-decoration: none;
        margin: 0 10px 0 10px;
        color: ${color ? color : '#641A1F'};

        &:hover {
            color: ${hoverColor ? hoverColor : '#FEF2E9'};
        }
    `
    return (
        <Wrapper>
            <NavLink to="/story">Our Story</NavLink>
            <NavLink to="/schedule">Schedule</NavLink>
            <NavLink to="/details">Details</NavLink>
            <NavLink to="/accommodations">Accommodations</NavLink>
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
