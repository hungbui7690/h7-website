import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Sidebar = () => {
  return (
    <Wrapper>
      <div className='sidebar'>
        <Link to={'/'} style={{ '--i': 1 }} className='link'>
          Home
        </Link>
        <Link to={'/about'} style={{ '--i': 2 }} className='link'>
          About
        </Link>
        <Link to={'/projects'} style={{ '--i': 3 }} className='link'>
          Projects
        </Link>
        <Link to={'/contact'} style={{ '--i': 4 }} className='call-out'>
          Contact
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--primary-900);

  /////////////////////////////////////////

  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .link {
    position: relative;
    color: var(--white);
    text-decoration: none;
    padding: 0.7rem 1rem;
    cursor: pointer;
    transform: translateY(-200%);
    animation: animate-translate-right 0.2s linear calc(0.1s * var(--i))
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

  .call-out {
    text-decoration: none;
    padding: 0.7rem 1rem;
    cursor: pointer;
    border: 2px solid var(--primary-x2);
    color: var(--primary-x2);
    border-radius: 5px;
    transition: color, background 1s;

    transform: translateX(400%);
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

  ///////////////////////////////////

  .sidebar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
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
  @media (min-width: 576px) {
    display: none;
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

export default Sidebar
