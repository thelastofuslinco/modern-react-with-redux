import React from 'react'
import { Accordion } from '../../components'

export const AccordionPage = () => {
  const items = [
    { id: 1, label: 'Can i use React', content: 'Yes you can use React' },
    { id: 2, label: 'Can i use Css', content: 'Yes you can use Css' },
    {
      id: 3,
      label: 'Can i use Javascript',
      content: 'Yes you can use Javascript'
    }
  ]

  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}
