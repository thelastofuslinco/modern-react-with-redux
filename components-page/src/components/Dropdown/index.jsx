import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { GoChevronDown } from 'react-icons/go'
import Panel from '../Panel'

const Dropdown = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handler = (event) => {
      if (!dropdownRef.current) return
      if (!dropdownRef.current.contains(event.target)) setOpen(false)
    }

    document.addEventListener('click', handler, true)

    return () => document.removeEventListener('click', handler)
  }, [])

  const renderedItems = options?.map((option) => {
    return (
      <div
        onClick={() => {
          onChange(option)
          setOpen(false)
        }}
        key={option.value}
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
      >
        {option.label}
      </div>
    )
  })

  return (
    <div className="w-48 relative" ref={dropdownRef}>
      <Panel
        onClick={() => {
          setOpen((prevState) => !prevState)
        }}
        className="flex justify-between items-center cursor-pointer w-full"
      >
        {value?.label || 'Select...'} <GoChevronDown className="text-lg" />
      </Panel>

      {open && (
        <Panel className="absolute top-full w-full">{renderedItems}</Panel>
      )}
    </div>
  )
}

export default Dropdown

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  )
}
