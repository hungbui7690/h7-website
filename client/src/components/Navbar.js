import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { CgCloseR } from 'react-icons/cg'
import { useAppContext } from '../context'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const {
    showSidebar,
    setShowSidebar,
    scrollToSection,
    aboutRef,
    heroRef,
    contactRef,
  } = useAppContext()

  const { pathname } = useLocation()

  return (
    <Wrapper>
      <nav>
        <div className='logo'>
          <Link
            to={'/'}
            className='logo-link'
            onClick={() => scrollToSection(heroRef)}
          >
            <img src={logo} alt='' className='logo-img' />
          </Link>
        </div>
        <ul className='nav-links' style={{ '--i': 1 }}>
          <Link
            to={'/'}
            style={{ '--i': 3 }}
            className='link'
            onClick={() => scrollToSection(heroRef)}
          >
            Home
          </Link>

          {pathname === '/' && (
            <Link
              to={'/'}
              style={{ '--i': 4 }}
              className='link'
              onClick={() => scrollToSection(aboutRef)}
            >
              About
            </Link>
          )}
          <Link to={'/projects'} style={{ '--i': 5 }} className='link'>
            Projects
          </Link>
          {pathname === '/' && (
            <Link
              to={'/'}
              style={{ '--i': 6 }}
              className='call-out'
              onClick={() => scrollToSection(contactRef)}
            >
              Contact
            </Link>
          )}
        </ul>
        <div
          className={'hamburger-container'}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <div className={`hamburger ${showSidebar ? 'hide' : 'show'}`}></div>
          <CgCloseR
            className={` close-icon ${showSidebar ? 'show' : 'hide'}`}
          />
        </div>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100vw;
  height: 5rem;
  display: flex;
  justify-content: center;
  background-color: var(--primary-900);
  max-width: var(--max-width);
  margin: 0 auto;
  overflow: hidden;
  z-index: 999;
  position: fixed;
  top: 0;

  /////////////////////////////////////////
  nav {
    width: 90vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    color: white;
    max-width: var(--max-width);
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .link {
    position: relative;
    color: var(--white);
    text-decoration: none;
    padding: 0.7rem 1rem;
    cursor: pointer;
    transform: translateY(-200%);
    animation: animate-translate-right 0.5s linear calc(0.2s * var(--i))
      forwards;
    opacity: 0;
  }
  .link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: var(--primary-x);
    transition: all 0.5s;
  }
  .link:hover.link::before {
    width: 40%;
  }
  .link::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 50%;
    width: 0;
    height: 2px;
    background-color: var(--primary-x);
    transition: all 0.5s;
  }
  .link:hover.link::after {
    width: 40%;
  }

  /////////////////////////////////////////

  .logo {
    display: flex;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    animation: animate-translate-left linear 2s forwards;
  }
  .logo-img {
    display: block;
    pointer-events: none;
  }
  .logo-link {
    transition: all 0.5s linear;
  }

  .logo-link:hover {
    transform: rotate(360deg) scale(0.7);
  }

  /////////////////////////////////////////

  .nav-links {
    font-size: var(--fz-sm);
    display: none;
  }

  .call-out {
    text-decoration: none;
    padding: 0.7rem 1rem;
    cursor: pointer;
    border: 2px solid var(--primary-x2);
    color: var(--primary-x2);
    border-radius: 5px;
    transition: color, background 1s;

    transform: translateX(200%);
    animation: animate-callout 1s linear 1s forwards;
  }

  .call-out:hover {
    background: var(--primary-x);
    color: var(--primary-x5);
    border: 1px solid var(--primary-x5);
  }

  @keyframes animate-callout {
    0% {
      transform: translateX(200%);
    }
    50% {
      transform: translateX(-20%);
    }
    100% {
      transform: translateX(0);
    }
  }

  /////////////////////////////////////////
  .hamburger-container {
    position: relative;
    width: 25px;
    height: 25px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-200%);
    animation: animate-translate-right linear 0.5s forwards;
  }
  .hamburger {
    position: relative;
    height: 2px;
    width: 100%;
    right: 0;
    background-color: var(--white);
  }
  .hamburger::before {
    content: '';
    position: absolute;
    bottom: 7px;
    right: 0;
    width: 20px;
    height: 2px;
    background-color: var(--white);
  }
  .hamburger::after {
    content: '';
    position: absolute;
    top: 7px;
    right: 0;
    width: 23px;
    height: 2px;
    background-color: var(--white);
  }

  .hamburger.show {
    display: inline-block;
  }
  .hamburger.hide {
    display: none;
  }

  ///////////////////////////////////////////

  .close-icon.show {
    font-size: 2rem;
  }
  .close-icon.hide {
    display: none;
  }

  /////////////////////////////////////////
  @media (min-width: 576px) {
    .logo {
      width: 35px;
      height: 35px;
    }
    .logo-link:hover {
      transform: rotate(480deg) scale(0.5);
    }
    .nav-links {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .hamburger-container {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .nav-links {
      gap: 2rem;
    }
  }

  ////////////////////////////////////////
  @keyframes animate-translate-left {
    0% {
      transform: translateX(-200%) rotate(-360deg);
    }
    30% {
      transform: translateX(100%) rotate(360deg);
    }
    50% {
      transform: translateX(-30%) rotate(-90deg);
    }
    70% {
      transform: translateX(20%) rotate(45deg);
    }
    80% {
      transform: translateX(-10%) rotate(-25deg);
    }
    100% {
      transform: translateX(0) rotate(0);
    }
  }
  @keyframes animate-translate-right {
    0% {
      transform: translateY(-200%);
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

export default Navbar
