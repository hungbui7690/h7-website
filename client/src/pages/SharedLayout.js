import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const SharedLayout = () => {
  const [isIntro, setIsIntro] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsIntro(false)
    }, 2200)
  })

  return (
    <Wrapper>
      {!isIntro && <Navbar />}
      <section className='container'>
        <Outlet context={isIntro} />
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  overflow-x: hidden;
`

export default SharedLayout
