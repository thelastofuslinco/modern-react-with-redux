import React from 'react'
import { changeSearchTerm } from '../../store'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'

const CarSearch = () => {
  const { searchTerm } = useAppSelector((state) => state.cars)
  const dispach = useAppDispatch()

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => dispach(changeSearchTerm(event.target.value))}
      />
    </div>
  )
}

export default CarSearch
