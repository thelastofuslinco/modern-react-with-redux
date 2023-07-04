import React from 'react'
import Button from '../../components/Button'
import { GoDatabase } from 'react-icons/go'

const ButtonPage = () => {
  return (
    <div>
      <Button>default button</Button>
      <Button rounded>rounded button</Button>
      <Button rounded warning>
        Warning button
      </Button>
      <Button rounded warning outline>
        Outline button
      </Button>
      <Button rounded warning outline>
        <GoDatabase />
        With icon
      </Button>
    </div>
  )
}

export default ButtonPage
