import React from 'react'
import Table from '../../components/Table'
import SortableTable from '../../components/SortableTable'

const TablePage = () => {
  const rows = [
    { name: 'Orange', color: 'bg-orange-400', score: 5 },
    { name: 'Apple', color: 'bg-red-400', score: 3 },
    { name: 'Banana', color: 'bg-yellow-400', score: 2 },
    { name: 'Lime', color: 'bg-green-400', score: 4 }
  ]

  const columns = [
    {
      label: 'Name',
      render: (row) => row.name,
      header: () => <th className="bg-red-500">Score</th>,
      sort: (row) => row.name
    },
    {
      label: 'Color',
      render: (row) => <div className={`${row.color} p-3 m-2`} />
    },
    {
      label: 'Score',
      render: (row) => row.score,
      header: () => <th className="bg-red-500">Score</th>,
      sort: (row) => row.score
    }
  ]

  const fnKey = (row) => row.name

  return (
    <div className="flex flex-col gap-10">
      <SortableTable rows={rows} columns={columns} fnKey={fnKey} />
      <Table rows={rows} columns={columns} fnKey={fnKey} />
    </div>
  )
}

export default TablePage
