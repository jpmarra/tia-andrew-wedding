import React from 'react'
import styled from 'styled-components'

const Container = ({ children }) => {
    const Wrapper = styled.div`
        width: 100%;
        max-width: 1450px;
        display: flex;
        flex-flow: column;
    `
    return <Wrapper>{children}</Wrapper>
}

export default Container
