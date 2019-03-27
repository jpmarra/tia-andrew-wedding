import React from 'react'
import styled from 'styled-components'

const Container = ({ children }) => {
    const Wrapper = styled.div`
        margin: 0 40px;
        max-width: 1500px;
    `
    return <Wrapper>{children}</Wrapper>
}

export default Container
