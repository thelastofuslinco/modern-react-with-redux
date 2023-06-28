import React from 'react'
import { Button } from '../../components'
import { GoBell, GoCloud, GoDatabase } from 'react-icons/go'

export const ButtonPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button warning rounded>
        <GoBell />
        sss
      </Button>
      <Button warning rounded>
        <GoCloud />
        sss
      </Button>

      <Button warning rounded>
        <GoDatabase />
        sss
      </Button>
    </div>
  )
}
