import React from 'react'
import styled from 'styled-components'
import { CgChevronDoubleDownR } from 'react-icons/cg'
import { useAppContext } from '../context'

const Hero = () => {
  const { scrollToSection, aboutRef } = useAppContext()

  return (
    <Wrapper>
      <div className='section'>
        <p className='title translate-up' style={{ '--i': 1 }}>
          Hi, my name is
        </p>
        <h4 className='name translate-up' style={{ '--i': 2 }}>
          Hung Thanh Bui
        </h4>
        <p className='description translate-up' style={{ '--i': 3 }}>
          I use programming knowledge to build websites that meet the needs of
          clients.{' '}
        </p>
        <button className='resume-btn translate-up' style={{ '--i': 4 }}>
          View my Resume
        </button>
        <CgChevronDoubleDownR
          className='down-icon'
          onClick={() => scrollToSection(aboutRef)}
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .section {
    max-width: 50vw;
    color: white;
    /* animation: animate-section 5s linear forward; */
  }

  .down-icon {
    position: absolute;
    left: 50%;
    bottom: 100px;
    color: var(--primary-x3);
    cursor: pointer;
    font-size: 2rem;
  }

  p,
  h4 {
    text-align: left;
  }
  .title {
    color: var(--primary-x1);
  }
  .name {
    color: var(--primary-300);
    font-size: x-large;
  }
  .description {
    color: var(--primary-100);
  }
  .resume-btn {
    cursor: pointer;
    background: none;
    padding: 0.5rem 1rem;
    color: var(--primary-x5);
    background: var(--primary-x1);
    border: 1px solid var(--primary-x1);
    border-radius: 2px;
    font-size: 0.8rem;
  }
  .resume-btn:hover {
    background: none;
    color: var(--primary-x);
  }

  .translate-up {
    opacity: 0;
    transform: translateY(100%);
    animation: animate-info 1s ease-in-out calc(0.2s * var(--i)) forwards;
  }

  ///////////////////////////////////////

  @media (min-width: 576px) {
    .section {
      max-width: 70vw;
    }
  }

  @media (min-width: 768px) {
    .section {
      max-width: 70vw;
    }
  }

  ///////////////////////////////////////

  @keyframes animate-info {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

export default Hero
