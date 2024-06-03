
'use client'

import { useContext, createContext, useState } from 'react'

const ApplicationContext = createContext()

export const ApplicationProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [txtSearch, setTxtSearch] = useState('')
  const [activeApi, setActiveApi] = useState('')
  const [characters, setCharacters] = useState([])
  const [userInfo, setUserInfo] = useState({})

  return (
    <ApplicationContext.Provider value={{ userInfo, setUserInfo, isLoading,  setIsLoading, txtSearch, setTxtSearch, activeApi, setActiveApi, characters, setCharacters }}>
      {children}
    </ApplicationContext.Provider>
  )
}

export const useApplication = () => {
  const context = useContext(ApplicationContext)
  if (!context) {
    throw new Error('useApplication must be used within a ApplicationProvider')
  }
  return context
}
