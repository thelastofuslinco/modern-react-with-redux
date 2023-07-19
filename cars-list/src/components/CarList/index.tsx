import React from 'react'
import { removeCar } from '../../store'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'

const CarList = () => {
  const { cars, searchTerm } = useAppSelector((state) => state.cars)
  const dispach = useAppDispatch()

  return (
    <div>
      {searchTerm}
      {cars.map((car) => {
        return (
          <div key={car.id}>
            {car.name} - {car.cost}
            <button onClick={() => dispach(removeCar(car))}>removeCar</button>
          </div>
        )
      })}
    </div>
  )
}

export default CarList
