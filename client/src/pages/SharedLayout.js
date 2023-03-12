import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { useEffect } from 'react'
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiLogIn,
} from 'react-icons/fi'
import { SiGmail } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'
import '../index.css'
import { useAppContext } from '../context'

const SharedLayout = () => {
  const { setShowIntro, showIntro } = useAppContext()

  useEffect(() => {
    setTimeout(() => {
      setShowIntro(false)
    }, 2200)
  })

  return (
    <Wrapper className='wrapper'>
      {!showIntro && <Navbar />}
      <section className='container'>
        <Outlet context={showIntro} />
        {!showIntro && (
          <div className='social-icons'>
            <a
              href='https://github.com/hungbui7690'
              target='_blank'
              rel='noreferrer'
            >
              <FiGithub className='icon' />
            </a>
            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noreferrer'
            >
              <FiInstagram className='icon' />
            </a>
            <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
              <FiFacebook className='icon' />
            </a>
            <a
              href='https://www.linkedin.com/in/hung-bui-10a174264/'
              target='_blank'
              rel='noreferrer'
            >
              <FiLinkedin className='icon' />
            </a>
            <a
              href='https://t.me/hungthanhbui'
              target='_blank'
              rel='noreferrer'
            >
              <FaTelegramPlane className='icon' />
            </a>
            <a
              href='mailto:hungbui7690@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <SiGmail className='icon' />
            </a>
            <button className='link-btn'>
              <FiLogIn className='icon' />
            </button>
          </div>
        )}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: var(--max-width);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    position: relative;
    overflow-x: hidden;
  }
  .icon {
    font-size: 1.2rem;
    color: var(--primary-200);
  }
  .social-icons {
    position: fixed;
    /* top: 0; */
    bottom: 10rem;
    left: calc((100vw - 90vw) / 2);
    width: 10px;
    height: 100px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    opacity: 0;
    transform: translateY(100%);
    animation: animate-icons 1s ease-in-out 1s forwards;
  }
  .link-btn {
    background: none;
    padding: 0;
    text-align: left;
    display: inline-block;
    width: 100%;
    border: none;
    cursor: pointer;
  }
  .icon {
    transition: transform 0.2s ease-in-out;
  }
  .icon:hover {
    transform: translateX(-20%);
    color: var(--primary-x1);
  }

  @media (min-width: 1120px) {
    .social-icons {
      left: calc((100vw - 1120px) / 2 - 5px);
    }
  }

  /////////////////////////////////////

  @keyframes animate-icons {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    50% {
      transform: translateY(130%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

export default SharedLayout
