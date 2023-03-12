import { createContext, useContext, useState } from 'react'

export const GlobalContext = createContext()

const AppContext = (props) => {
  const [showIntro, setShowIntro] = useState(true)
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <GlobalContext.Provider
      value={{ showIntro, setShowIntro, showSidebar, setShowSidebar }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(GlobalContext)
}

export default AppContext
