import styled from 'styled-components'
import IntroIcon from '../components/IntroIcon'

const Intro = () => {
  return (
    <Wrapper>
      <h4 className='title' data-text='Welcome'>
        Welcome
      </h4>
      <div className='icon'>
        <IntroIcon />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .title {
    position: relative;
    color: #03e9f4;
    letter-spacing: 3px;
    font-size: 1.2rem;
    text-transform: uppercase;

    animation: typing 2.2s steps(7) forwards;
    overflow: hidden;
  }
  .title::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background-color: red;
    animation: blink-cursor 1s steps(3) infinite;
  }

  @keyframes blink-cursor {
    0%,
    75% {
      opacity: 1;
    }
    76%,
    100% {
      opacity: 0;
    }
  }
  @keyframes typing {
    0%,
    90%,
    100% {
      width: 0;
    }
    30%,
    60% {
      width: 114.19px;
    }
  }

  @media (min-width: 576px) {
    .title {
      font-size: 2rem;
      animation: typing 2.2s steps(10) forwards;
      overflow: hidden;
    }
    @keyframes typing {
      0%,
      90%,
      100% {
        width: 0;
      }
      30%,
      60% {
        width: 176.3px;
      }
    }
  }
`

export default Intro
