import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Nav from './Nav'

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

class Template extends React.Component {
  render() {
    const { children, title, color } = this.props

    return (
      <Container>
        <Nav title={title} />
        {children}
      </Container>
    )
  }
}

export default Template
