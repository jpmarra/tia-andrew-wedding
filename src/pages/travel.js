import React, { useContext } from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'
import AccommodationsList from '../components/accommodationslist'
import Footer from '../components/footer'

export default ({ location }) => {
    const Wrapper = styled.div`
        width: 100%;
        min-height: max-content;
        display: flex;
        justify-content: center;
        background-color: ${props => props.theme.cream};
    `

    return (
        <Layout color="orange">
            <Header location={location} />
            <Wrapper>
                <Container class="center">
                    <AccommodationsList />
                </Container>
            </Wrapper>
            <Footer />
        </Layout>
    )
}
