import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavBar = ({ color, hoverColor }) => {
    const Wrapper = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: max-content;
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
            <NavItem href="https://www.google.com">Our Story</NavItem>
            <NavLink to="/schedule">Schedule</NavLink>
            <NavLink to="/faqs">FAQs</NavLink>
            <NavLink to="/accomodations">Accomodations</NavLink>
            <NavItem href="https://www.google.com">RSVP &#11023;</NavItem>
            <NavItem href="https://www.google.com">Registry &#11023;</NavItem>
        </Wrapper>
    )
}
export default NavBar
