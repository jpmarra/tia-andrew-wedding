import React, { useContext } from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import DictionaryContext from '../dictionarycontext'

import AccomodationsList from '../components/accomodationslist'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default () => {
    const dictionary = useContext(DictionaryContext)
    console.log(DictionaryContext)

    const Wrapper = styled.div`
        width: 100%;
        min-height: max-content;
        display: flex;
        flex-direction: column;
        background-color: ${props => props.theme.maroon};
    `

    return (
        <Layout color="orange">
            <Wrapper>
                <Container>
                    <AccomodationsList />
                    <NavBar color="orange" hoverColor="cream" />
                </Container>
            </Wrapper>
            <Footer />
        </Layout>
    )
}
