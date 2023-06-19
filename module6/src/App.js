import { useState } from 'react'
import { BookCreate } from './components/BookCreate'
import { BookList } from './components/BookList'

function App() {
  const [books, setBooks] = useState([{ id: 1, title: 'harry potter' }])

  const createBook = (title) => {
    setBooks((prevState) => [...prevState, { id: books.length + 1, title }])
  }

  const editBook = ({ title, id }) => {
    const newBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title }
      }

      return book
    })

    setBooks(newBooks)
  }

  const deleteBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id)
    setBooks(newBooks)
  }

  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
    </div>
  )
}

export default App
