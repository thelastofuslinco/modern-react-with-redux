import React, { useState } from 'react'
import { GoChevronDown, GoChevronRight } from 'react-icons/go'

export const Accordion = ({ items }) => {
  const [open, setOpen] = useState(1)

  const renderedItems = items.map((item, index) => {
    const expand = open === index
    const icon = expand ? <GoChevronDown /> : <GoChevronRight />

    return (
      <div key={item.id} onClick={() => setOpen(index)}>
        <div className="flex gap-2 items-center">
          {icon} {item.label}
        </div>
        {expand && <div>{item.content}</div>}
      </div>
    )
  })

  return <div>{renderedItems}</div>
}
