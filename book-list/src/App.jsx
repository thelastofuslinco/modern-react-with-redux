import { BookCreate } from './components/BookCreate'
import { BookList } from './components/BookList'
import useBooksContext from './hooks/useBooksContext'
import { useEffect } from 'react'

function App() {
  const { getBooks } = useBooksContext()

  useEffect(() => {
    getBooks()
  }, [getBooks])

  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookCreate />
      <BookList />
    </div>
  )
}

export default App
