import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Container from '../components/container'

import Questions from '../components/questions'
import Footer from '../components/footer'
import Star from '../assets/star-icon.svg'

const FAQs = () => {
    const Wrapper = styled.div`
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        background-color: ${props => props.theme.cream};
    `

    const Content = styled.div`
        display: flex;
        flex-flow: column;
        width: 40%;
        max-width: 900px;
    `

    const PageTitle = styled.div`
        ${props => props.theme.h2Heading}
        margin-top: 8%;
        margin-bottom: 20px;
        color: ${props => props.theme.orange};
        display: flex;
        align-items: center;
    `
    return (
        <Layout color="maroon">
            <Wrapper>
                <Content>
                    <PageTitle>
                        <Star />
                        <div style={{ margin: `10px 0 0 15px` }}>FAQs</div>
                    </PageTitle>
                    <Questions />
                </Content>
            </Wrapper>
            <Footer />
        </Layout>
    )
}

export default FAQs
