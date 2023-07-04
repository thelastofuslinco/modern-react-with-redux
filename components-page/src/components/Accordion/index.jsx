import React, { useState } from 'react'
import { GoChevronDown, GoChevronRight } from 'react-icons/go'
import PropTypes from 'prop-types'

const Accordion = ({ options }) => {
  const [open, setOpen] = useState(1)

  const handleClick = (accordionIndex) => {
    setOpen((prevState) => {
      if (prevState === accordionIndex) {
        return -1
      } else {
        return accordionIndex
      }
    })
  }

  const renderedItems = options?.map((option, index) => {
    const expand = open === index
    const icon = expand ? (
      <GoChevronDown className="text-2xl" />
    ) : (
      <GoChevronRight className="text-2xl" />
    )

    return (
      <div key={option.id} onClick={() => handleClick(index)}>
        <div className="flex justify-between p-3 bg-gray-50 items-center cursor-pointer ">
          {option.label} {icon}
        </div>
        {expand && <div className="p-3 ">{option.content}</div>}
      </div>
    )
  })

  return <div>{renderedItems}</div>
}

export default Accordion

Accordion.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      content: PropTypes.node
    })
  )
}
