import { useEffect, useState } from 'react'
import axios from 'axios'
import { BookCreate } from './components/BookCreate'
import { BookList } from './components/BookList'

function App() {
  const [books, setBooks] = useState([])

  const getBooks = async () => {
    const response = await axios.get('http://localhost:3001/books')

    setBooks(response.data)
  }

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title
    })

    setBooks((prevState) => [...prevState, response.data])
  }

  const editBook = async ({ title, id }) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title
    })

    const newBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data }
      }

      return book
    })

    setBooks(newBooks)
  }

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)

    const newBooks = books.filter((book) => book.id !== id)
    setBooks(newBooks)
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
    </div>
  )
}

export default App
