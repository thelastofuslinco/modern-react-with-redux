import { useEffect, useState, createContext } from 'react'

const NavigationContext = createContext()

const NavigationProvider = ({ children }) => {
  const [navigationPath, setNavigationPath] = useState(window.location.pathname)

  useEffect(() => {
    const handle = () => {
      setNavigationPath(window.location.pathname)
    }

    window.addEventListener('popstate', handle)

    return () => {
      window.removeEventListener('popstate', handle)
    }
  }, [])

  const navigate = (to) => {
    window.history.pushState({}, '', to)
    setNavigationPath(to)
  }

  return (
    <NavigationContext.Provider value={{ navigationPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  )
}

export { NavigationProvider }
export default NavigationContext
