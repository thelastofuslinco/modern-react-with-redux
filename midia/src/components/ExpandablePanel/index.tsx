import { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'

interface Props {
  header: React.ReactNode
  children: React.ReactNode
}

const ExpandablePanel = ({ header, children }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false)

  return (
    <div className="mb-2 border rounded">
      <div
        onClick={() => setExpanded((prevState) => !prevState)}
        className="flex p-2 justify-between items-center cursor-pointer"
      >
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        {expanded ? <GoChevronDown /> : <GoChevronLeft />}
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  )
}

export default ExpandablePanel
