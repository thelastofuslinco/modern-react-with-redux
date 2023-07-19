import React from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { filterArrayByString } from '../../helper/filterArrayByString'

const CarValue = () => {
  const { data, searchTerm } = useAppSelector((state) => state.cars)
  const filteredCars = filterArrayByString(data, 'name', searchTerm)
  const value = filteredCars.reduce(
    (accumulator, car) => accumulator + car.cost,
    0
  )

  return (
    <footer
      className="footer"
      style={{ position: 'fixed', bottom: 0, width: '100vw' }}
    >
      <div className="content has-text-centered">Total value: ${value}</div>
    </footer>
  )
}

export default CarValue
