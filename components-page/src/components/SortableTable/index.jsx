import React from 'react'
import Table from '../Table'
import useSort from '../../hooks/useSort'
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'

const SortableTable = ({ configs, data, ...props }) => {
  const { sortBy, sortOrder, sortedData, setSortData } = useSort(data, configs)

  const getIcons = (label) => {
    if (sortOrder === null || label !== sortBy) {
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

  const updateColumns = configs.map((column) => {
    if (!column.sort) {
      return column
    }

    return {
      ...column,
      header: () => (
        <th
          onClick={() => setSortData(column.label)}
          className="flex gap-2 items-center"
        >
          {column.label}
          {getIcons(column.label)}
        </th>
      )
    }
  })

  return <Table data={sortedData} configs={updateColumns} {...props} />
}

export default SortableTable
