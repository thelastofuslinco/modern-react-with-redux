import React, { useReducer } from 'react'
import Panel from '../../components/Panel'
import Button from '../../components/Button'

const reducer = (state, action) => {
  if (action.type === 'incremented_count') {
    return {
      ...state,
      count: state.count + 1
    }
  } else if (action.type === 'decrement_count') {
    return {
      ...state,
      count: state.count - 1
    }
  } else if (action.type === 'change_value_to_add') {
    return {
      ...state,
      valueToAdd: action.nextValue
    }
  } else if (action.type === 'add_value') {
    return {
      count: state.count + state.valueToAdd,
      valueToAdd: 0
    }
  }

  throw Error('Unknown action.')
}

const CounterPage = ({ initialCount }) => {
  //   const [count, setCount] = useState(initialCount)
  //   const [valueToAdd, setValueToAdd] = useState(0)
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0
  })

  const increment = () => dispatch({ type: 'incremented_count' })
  const decrement = () => dispatch({ type: 'decrement_count' })

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0

    dispatch({
      type: 'change_value_to_add',
      nextValue: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch({
      type: 'add_value'
    })
  }

  return (
    <Panel className={'m-3'}>
      <h1 className="text-lg">Counter is {state.count}</h1>
      <div className="flex flex-row gap-2">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />

        <Button>Add it!</Button>
      </form>
    </Panel>
  )
}

export default CounterPage
