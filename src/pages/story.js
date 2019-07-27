import React, { useContext } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'

import QuestionList from '../components/questionlist'
import Footer from '../components/footer'
import StoryContent from '../components/storycontent'
export default ({ location }) => {
    const Wrapper = styled.div`
        width: 100%;
        min-height: calc(100vh - 141px);
        display: flex;
        justify-content: center;
        background-color: ${props => props.theme.cream};
    `
    return (
        <Layout>
            <Header location={location} />
            <Wrapper>
                <Container class="center">
                    <StoryContent />
                </Container>
            </Wrapper>
            <Footer />
        </Layout>
    )
}
