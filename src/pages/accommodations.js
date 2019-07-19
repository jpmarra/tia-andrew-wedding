import React, { useContext } from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'
import AccomodationsList from '../components/accomodationslist'
import Footer from '../components/footer'

export default () => {
    const Wrapper = styled.div`
        width: 100%;
        height: 100vh;
        min-height: max-content;
        display: flex;
        justify-content: center;
        background-color: ${props => props.theme.cream};
    `

    return (
        <Layout color="orange">
            <Header />
            <Wrapper>
                <Container class="center">
                    <AccomodationsList />
                </Container>
            </Wrapper>
            <Footer />
        </Layout>
    )
}