import React from 'react'
import { changeSearchTerm } from '../../store'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'

const CarSearch = () => {
  const { searchTerm } = useAppSelector((state) => state.cars)
  const dispach = useAppDispatch()

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem'
      }}
    >
      <h1 className="title">My Car</h1>
      <div>
        <input
          className="input"
          type="text"
          value={searchTerm}
          onChange={(event) => dispach(changeSearchTerm(event.target.value))}
        />
      </div>
    </div>
  )
}

export default CarSearch
