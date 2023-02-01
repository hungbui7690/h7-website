import { Link, Outlet, useOutletContext } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import Intro from './Intro'
import styled from 'styled-components'

const Home = () => {
  const isIntro = useOutletContext()

  if (isIntro) return <Intro />

  return !isIntro && <div>Homepage</div>
}
export default Home
