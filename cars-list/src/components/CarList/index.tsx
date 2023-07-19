import React from 'react'
import { removeCar } from '../../store'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { filterArrayByString } from '../../helper/filterArrayByString'

const CarList = () => {
  const { data, searchTerm } = useAppSelector((state) => state.cars)
  const { name } = useAppSelector((state) => state.form)

  const dispach = useAppDispatch()
  const filteredCars = filterArrayByString(data, 'name', searchTerm)

  return filteredCars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase())

    return (
      <div key={car.id} className={`panel ${bold && 'has-text-weight-bold'}`}>
        <p>
          {car.name} - {car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => dispach(removeCar(car))}
        >
          Remove car
        </button>
      </div>
    )
  })
}

export default CarList
