import React, { useContext } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'

import QuestionList from '../components/questionlist'
import Footer from '../components/footer'
export default () => {
    const Wrapper = styled.div`
        width: 100%;
        min-height: calc(100vh - 141px);
        display: flex;
        justify-content: center;
        background-color: ${props => props.theme.red};
    `

    const FourOhFour = styled.div`
        ${props => props.theme.primaryHeading}
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `
    return (
        <Layout>
            <Header />
            <Wrapper>
                <Container class="center">404</Container>
            </Wrapper>
            <Footer />
        </Layout>
    )
}
