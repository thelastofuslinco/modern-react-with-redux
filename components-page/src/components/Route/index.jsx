import useNavigation from '../../hooks/useNavigation'

const Route = ({ path, children }) => {
  const { navigationPath } = useNavigation()

  if (path === navigationPath) return children

  return null
}

export default Route
