import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <div className='logo'>
          <Link to={'/'} className='link logo-link'>
            <img src={logo} alt='' className='logo-img' />
          </Link>
        </div>
        <ul className='nav-links'>
          <Link to={'/'} className='link'>
            Home
          </Link>
          <Link to={'/projects'} className='link'>
            Projects
          </Link>
          <Link to={'/contact'} className='link call-out'>
            Contact
          </Link>
        </ul>
        <div className='hamburger-container'>
          <div className='hamburger'></div>
        </div>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: var(--primary-900);
  padding: 0 2rem;
  overflow-y: hidden;

  /////////////////////////////////////////
  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    color: white;
    max-width: var(--max-width);
  }
  img {
    width: 100%;
    overflow: hidden;
  }
  .link {
    color: var(--white);
    text-decoration: none;
    padding: 0.7rem 1rem;
    cursor: pointer;
  }

  /////////////////////////////////////////

  .logo {
    display: flex;
    align-items: center;
    width: 60px;
    height: 60px;
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
    transform: translateY(-200%);
    animation: animate-translate-right linear 0.5s forwards;
  }

  .call-out {
    border: 2px solid var(--primary-x);
    color: var(--primary-x);
    border-radius: 5px;
  }

  /////////////////////////////////////////
  .hamburger-container {
    width: 20px;
    height: 20px;
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
    width: 10px;
    background-color: var(--white);
  }
  .hamburger::before {
    content: '';
    position: absolute;
    bottom: 7px;
    right: 0;
    width: 15px;
    height: 2px;
    background-color: var(--white);
  }
  .hamburger::after {
    content: '';
    position: absolute;
    top: 7px;
    right: 0;
    width: 20px;
    height: 2px;
    background-color: var(--white);
  }

  /////////////////////////////////////////
  @media (min-width: 576px) {
    .logo {
      width: 70px;
      height: 70px;
    }
    .logo-link:hover {
      transform: rotate(480deg) scale(0.5);
    }
    .nav-links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    }
    .hamburger-container {
      display: none;
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
    }
  }
`

export default Navbar
