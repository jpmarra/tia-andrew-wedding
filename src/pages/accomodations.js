import React, { useContext } from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import DictionaryContext from '../dictionarycontext'

import AccomodationsList from '../components/accomodationslist'
import Footer from '../components/footer'

export default () => {
    const dictionary = useContext(DictionaryContext)

    const Wrapper = styled.div`
        width: 100%;
        min-height: 100vh;
        display: flex;
        background-color: ${props => props.theme.maroon};
    `

    return (
        <Layout color="orange">
            <Wrapper>
                <Container class="center">
                    <AccomodationsList />
                </Container>
            </Wrapper>
            <Footer />
        </Layout>
    )
}
