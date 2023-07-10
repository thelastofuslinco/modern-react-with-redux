import React, { useState } from 'react'
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go'
import Table from '../Table'

const SortableTable = ({ columns, rows, ...props }) => {
  const [sortOrder, setSortOrder] = useState(null)
  const [sortBy, setSortBy] = useState(null)

  const getIcons = (label) => {
    if (label !== sortBy)
      return (
        <div className="flex flex-col">
          <GoTriangleUp />
          <GoTriangleDown />
        </div>
      )

    if (setSortOrder === null) {
      return (
        <div className="flex flex-col">
          <GoTriangleUp />
          <GoTriangleDown />
        </div>
      )
    } else if (sortOrder === 'asc') {
      return (
        <div className="flex flex-col">
          <GoTriangleUp />
        </div>
      )
    } else if (sortOrder === 'desc') {
      return (
        <div className="flex flex-col">
          <GoTriangleDown />
        </div>
      )
    }
  }

  const handleClick = (label) => {
    // sort order cycle
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

  let sortedRows = rows
  if (sortOrder && sortBy) {
    const { sort } = columns.find((column) => column.label === sortBy)
    sortedRows = [...rows].sort((a, b) => {
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

  const updateColumns = columns.map((column) => {
    if (!column.sort) {
      return column
    }

    return {
      ...column,
      header: () => (
        <th
          onClick={() => handleClick(column.label)}
          className="flex gap-2 items-center"
        >
          {column.label}
          {getIcons(column.label)}
        </th>
      )
    }
  })

  return <Table rows={sortedRows} columns={updateColumns} {...props} />
}

export default SortableTable
