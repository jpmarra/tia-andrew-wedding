import React, { useContext } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'

import QuestionList from '../components/questionlist'
import Footer from '../components/footer'
import ScheduleContent from '../components/schedulecontent'
export default () => {
    const Wrapper = styled.div`
        width: 100%;
        min-height: calc(100vh - 141px);
        display: flex;
        justify-content: center;
        background-color: ${props => props.theme.cream};
    `
    return (
        <Layout>
            <Header />
            <Wrapper>
                <Container class="center">
                    <ScheduleContent />
                </Container>
            </Wrapper>
            <Footer />
        </Layout>
    )
}
