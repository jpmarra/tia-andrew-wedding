import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Star from '../assets/star-icon.svg'

export default props => {
    const NavLink = styled(Link)`
        ${props => props.theme.h1Heading}
        text-decoration: none;
        text-align: center;
        margin: 40px 0;
        color: ${props => props.theme.cream};

        @media (max-width: 920px) {
            font-size: 30px;
        }
    `

    const MobileMenu = styled(Menu)`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: ${props => props.theme.maroon};
    `

    const StarWrapper = styled.div`
        width: 100%;
        display: flex !important;
        justify-content: center;
    `
    return (
        <MobileMenu {...props} right>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/story">Our Story</NavLink>
            <NavLink to="/schedule">Schedule</NavLink>
            <NavLink to="/faqs">FAQs</NavLink>
            <NavLink to="/accommodations">Accommodations</NavLink>
            <NavLink href="https://www.google.com">RSVP</NavLink>
            <NavLink href="https://www.google.com">Registry</NavLink>
            <StarWrapper>
                <Star />
            </StarWrapper>
        </MobileMenu>
    )
}
