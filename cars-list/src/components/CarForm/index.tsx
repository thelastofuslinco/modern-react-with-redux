import React from 'react'
import { addCar, changeCost, changeName } from '../../store'
import { MdPriceChange, MdDirectionsCar } from 'react-icons/md'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'

const CarForm = () => {
  const { name, cost } = useAppSelector((state) => state.form)
  const dispach = useAppDispatch()

  const clearInput = () => {
    dispach(changeName(''))
    dispach(changeCost(''))
  }

  const isDisabled = name === '' || cost === 0

  return (
    <section className="hero is-small is-primary">
      <div className="hero-body">
        <div className="subtitle">
          <div className="columns card">
            <div className="field column">
              <label className="label">Car name</label>
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
              <label className="label">Car cost</label>
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
                  }}
                  disabled={isDisabled}
                >
                  addCar
                </button>
              </div>
              <div className="control">
                <button
                  className="button is-link is-light"
                  onClick={clearInput}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarForm
