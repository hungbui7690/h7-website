import { useOutletContext } from 'react-router-dom'
import Intro from './Intro'
import styled from 'styled-components'
import { FeaturedProjects, Hero, Sidebar } from '../components/'
import { useAppContext } from '../context'

const Home = () => {
  const showIntro = useOutletContext()
  const { showSidebar } = useAppContext()

  if (showIntro) return <Intro />

  return (
    !showIntro && (
      <Wrapper>
        <Hero />
        {showSidebar && <Sidebar />}
        <FeaturedProjects />
      </Wrapper>
    )
  )
}

const Wrapper = styled.section`
  width: 100%;
  max-width: var(--max-width);
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Home
