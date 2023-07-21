import React from 'react'

const Panel = (props) => {
  return (
    <div
      {...props}
      className={`border rounded p-3 shadow bg-white ${props.className}`}
    />
  )
}

export default Panel
