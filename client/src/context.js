import { createContext, useContext, useState, useRef } from 'react'

export const GlobalContext = createContext()

const AppContext = (props) => {
  const [showIntro, setShowIntro] = useState(true)
  const [showSidebar, setShowSidebar] = useState(false)
  const aboutRef = useRef(null)
  const heroRef = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current?.offsetTop - 5 * 16,
      behavior: 'smooth',
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        showIntro,
        setShowIntro,
        showSidebar,
        setShowSidebar,
        aboutRef,
        heroRef,
        scrollToSection,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(GlobalContext)
}

export default AppContext
