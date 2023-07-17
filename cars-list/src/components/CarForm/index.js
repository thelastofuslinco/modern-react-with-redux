import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCar, changeCost, changeName } from '../../store'
import { MdPriceChange, MdDirectionsCar } from 'react-icons/md'

const CarForm = () => {
  const { name, cost } = useSelector((state) => state.form)
  const dispach = useDispatch()

  const clearInput = () => {
    dispach(changeName(''))
    dispach(changeCost(''))
  }

  const isDisabled = name === '' || cost === ''

  return (
    <div className="columns">
      <div className="field column">
        <label class="label">Car name</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            placeholder="Car name"
            value={name}
            onChange={(event) => dispach(changeName(event.target.value))}
          />
          <span className="icon is-small is-left">
            <MdDirectionsCar />
          </span>
        </div>
      </div>

      <div className="field column">
        <label class="label">Car cost</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="number"
            placeholder="Car cost"
            value={cost || ''}
            onChange={(event) =>
              dispach(changeCost(parseInt(event.target.value)))
            }
          />
          <span className="icon is-small is-left">
            <MdPriceChange />
          </span>
        </div>
      </div>

      <div className="field is-grouped column">
        <div className="control">
          <button
            className="button is-link"
            onClick={() => {
              dispach(addCar({ name, cost }))
              clearInput()
            }}
            disabled={isDisabled}
          >
            addCar
          </button>
        </div>
        <div className="control">
          <button className="button is-link is-light" onClick={clearInput}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default CarForm
