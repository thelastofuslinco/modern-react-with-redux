import React from 'react'
import useNavigation from '../../hooks/useNavigation'

const Link = ({ to, children }) => {
  const { navigate, navigationPath } = useNavigation()

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) return
    event.preventDefault()
    navigate(to)
  }

  return (
    <a
      className={`hover:font-bold text-blue-500 ${
        navigationPath === to && 'font-bold border-l-4 border-blue-500 pl-2'
      }`}
      onClick={handleClick}
      href={to}
    >
      {children}
    </a>
  )
}

export default Link
