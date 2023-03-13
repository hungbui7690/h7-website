import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context'

const Contact = () => {
  const { contactRef } = useAppContext()

  return (
    <Wrapper ref={contactRef}>
      <h2 className='title'>Buzz Me 📞</h2>
      <p>I am opening to you. </p>
      <p>
        So just give me an email or a text message in Linkedin, and I will
        answer you ASAP 🚀
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  color: white;
  min-height: 100vh;
  max-width: 60vw;
  display: flex;
  flex-direction: column;

  .title,
  span {
    color: var(--primary-x1);
    text-align: left;
  }
  p {
    color: var(--primary-100);
  }
`

export default Contact
