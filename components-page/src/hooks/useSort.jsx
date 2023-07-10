import { useState } from 'react'

const useSort = (data, configs) => {
  const [sortOrder, setSortOrder] = useState(null)
  const [sortBy, setSortBy] = useState(null)

  const setSortData = (label) => {
    if (sortOrder === null || sortBy !== label) {
      setSortOrder('asc')
      setSortBy(label)
    } else if (sortOrder === 'asc') {
      setSortOrder('desc')
      setSortBy(label)
    } else {
      setSortOrder(null)
      setSortBy(null)
    }
  }

  let sortedData = data
  if (sortOrder && sortBy) {
    const { sort } = configs.find((config) => config.label === sortBy)
    sortedData = [...data].sort((a, b) => {
      const valueA = sort(a)
      const valueB = sort(b)

      const reverseOrder = sortOrder === 'asc' ? 1 : -1

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder
      } else {
        return (valueA - valueB) * reverseOrder
      }
    })
  }

  return { sortBy, sortOrder, sortedData, setSortData }
}

export default useSort
