import React from 'react'

const Table = ({ rows, columns, fnKey }) => {
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {columns.map((column) => {
            if (column.header)
              return (
                <React.Fragment key={column.label}>
                  {column.header()}
                </React.Fragment>
              )
            return <th key={column.label}>{column.label}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={fnKey(row)} className="border-b">
            {columns.map((column) => (
              <td key={column.label} className="p-3">
                {column.render(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
