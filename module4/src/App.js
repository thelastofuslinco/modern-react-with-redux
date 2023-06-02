import { useState } from 'react'
import AnimalShow from './AnimalShow'
import './App.css'

const getRandomAnimal = () => {
  const animals = ['cat', 'dog', 'horse', 'bird', 'gator', 'cow']
  return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
  const [animals, setAnimals] = useState([])
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }

  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  })

  return (
    <div className="app">
      <div>
        <button onClick={handleClick}>Get a random animal</button>
        <div className="animalList">{renderAnimals}</div>
      </div>
    </div>
  )
}

export default App
