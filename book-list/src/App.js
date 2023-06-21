import { BookCreate } from './components/BookCreate'
import { BookList } from './components/BookList'

function App() {
  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookCreate />
      <BookList />
    </div>
  )
}

export default App
