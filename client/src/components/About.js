import React from 'react'
import styled from 'styled-components'
import profileImg from '../assets/profile.png'
import { useAppContext } from '../context'

const About = () => {
  const { aboutRef } = useAppContext()

  return (
    <Wrapper ref={aboutRef}>
      <h3 className='title'>About Myself</h3>
      <div className='content'>
        <article className='info'>
          <p>
            Hi there! My name is Hung and I love to create websites. I have this
            interest for just some years as I saw some beautiful websites that
            was created with just HTML, CSS & Javascript.{' '}
          </p>
          <p>
            I graduated from <span>Aptech Approtrain</span> (a bootcamp of
            India) in VietNam. After that, I had a chance to work for a Hongkong
            company as a <span>Maximo Software Engineer</span> for{' '}
            <span>6 years</span> [Maximo is an asset management software of
            IBM]. I customized that software based on the needs of our clients,
            which are Gambling companies in Macau){' '}
          </p>
          <p>
            When I moved to USA in 2016, I studied as Electrical Engineer in
            Colorado University Boulder. But physics is not my taste, so I
            quitted, then started to learn Web Development by myself and fell in
            love with it.{' '}
          </p>
        </article>
        <img src={profileImg} alt='Profile' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  position: relative;
  margin-bottom: 10rem;

  .content {
    display: flex;
    flex-direction: column;
    max-width: 50vw;
  }
  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 576px) {
    .content {
      max-width: 70vw;
      gap: 3rem;
    }
    img {
      flex: 2;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  @media (min-width: 768px) {
    .content {
      flex-direction: row;
    }
    .info {
      flex: 8;
    }
  }

  ///////////////////////////
  .title,
  span {
    color: var(--primary-x1);
    text-align: left;
  }
  p {
    color: var(--primary-100);
  }
`

export default About
