import { useDispatch, useSelector } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount
} from './store/slices/counterSlice'
import { useState } from 'react'
import './index.css'
import { reset } from './store/actions'
import { addSong, removeSong } from './store/slices/songsSlice'
import { addMovie, removeMovie } from './store/slices/moviesSlice'

function App() {
  const count = useSelector((state) => state.counter)
  const songs = useSelector((state) => state.songs)
  const movies = useSelector((state) => state.movies)
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState(0)

  return (
    <div className="counterContainer">
      app {count}
      <input
        type="number"
        value={inputValue || ''}
        onChange={(event) => setInputValue(parseInt(event.target.value) || 0)}
      />
      <button onClick={() => dispatch(incrementByAmount(inputValue))}>
        increment by amount
      </button>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(addSong('song'))}>addSong</button>
      <button onClick={() => dispatch(addMovie('movie'))}>addMovie</button>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {songs.map((song) => (
          <div style={{ backgroundColor: 'red' }}>
            {song}{' '}
            <button onClick={() => dispatch(removeSong(song))}>
              removeSong
            </button>
          </div>
        ))}
        {movies.map((movie) => (
          <div style={{ backgroundColor: 'blue' }}>
            {movie}{' '}
            <button onClick={() => dispatch(removeMovie(movie))}>
              removeMovies
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
