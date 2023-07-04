import React, { useState } from 'react'
import Dropdown from '../../components/Dropdown'

const DropdownPage = () => {
  const [selected, setSelected] = useState(null)

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' }
  ]

  return (
    <div>
      <Dropdown
        options={options}
        value={selected}
        onChange={(value) => setSelected(value)}
      />
    </div>
  )
}

export default DropdownPage
