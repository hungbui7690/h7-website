import { useOutletContext } from 'react-router-dom'
import Intro from './Intro'
import styled from 'styled-components'
import {
  FeaturedProjects,
  Hero,
  Sidebar,
  About,
  Skills,
  Contact,
} from '../components/'
import { useAppContext } from '../context'

const Home = () => {
  const showIntro = useOutletContext()
  const { showSidebar, heroRef } = useAppContext()

  if (showIntro) return <Intro />

  return (
    !showIntro && (
      <Wrapper ref={heroRef}>
        <Hero />
        {showSidebar && <Sidebar />}
        <About />
        <Skills />
        <Contact />
        <FeaturedProjects />
      </Wrapper>
    )
  )
}

const Wrapper = styled.article`
  width: 100%;
  max-width: var(--max-width);
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export default Home
