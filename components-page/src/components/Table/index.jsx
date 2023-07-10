import React from 'react'

const Table = ({ data, configs, fnKey }) => {
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {configs.map((column) => {
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
        {data.map((row) => (
          <tr key={fnKey(row)} className="border-b">
            {configs.map((column) => (
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
