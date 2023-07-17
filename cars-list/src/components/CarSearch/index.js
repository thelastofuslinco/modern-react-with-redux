import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSearchTerm } from '../../store'

const CarSearch = () => {
  const { searchTerm } = useSelector((state) => state.cars)
  const dispach = useDispatch()

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
