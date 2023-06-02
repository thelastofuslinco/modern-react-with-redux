import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import dog from './svg/dog.svg'
import cow from './svg/cow.svg'
import gator from './svg/gator.svg'
import horse from './svg/horse.svg'
import heart from './svg/heart.svg'
import { useState } from 'react'

const svgs = {
  bird,
  cat,
  dog,
  cow,
  gator,
  horse
}

const AnimalShow = ({ type }) => {
  const [click, setClick] = useState(0)

  const handleClick = () => {
    setClick(click + 1)
  }

  return (
    <div className="animal" onClick={handleClick}>
      <img className="animalImg" src={svgs[type]} alt="animal" />
      <img
        className="heart"
        src={heart}
        alt="heart"
        style={{ width: 10 + 10 * click }}
      />
    </div>
  )
}

export default AnimalShow
