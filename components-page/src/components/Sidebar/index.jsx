import React from 'react'
import Link from '../Link'

const Sidebar = ({ links }) => {
  return (
    <div className="flex flex-col gap-3 oveflow-y-scroll top-0 sticky items-start">
      {links.map((link) => (
        <Link to={link.to} key={link.label}>
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default Sidebar
