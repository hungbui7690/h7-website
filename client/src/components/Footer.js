import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <p>Copyright © 2023</p>
      <p className='title'>🕸 My Corner - 📨 hungbui7690@gmail.com</p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;

  p {
    color: var(--primary-100);
    margin: 0 auto;
  }
`

export default Footer
