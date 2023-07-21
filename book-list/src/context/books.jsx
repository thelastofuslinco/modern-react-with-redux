import { createContext, useMemo, useState, useCallback } from 'react'
import axios from 'axios'

export const BooksContext = createContext()

export const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState([])

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title
    })

    setBooks((prevState) => [...prevState, response.data])
  }

  const getBooks = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/books')

    setBooks(response.data)
  }, [])

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

  const data = useMemo(() => {
    return {
      books,
      getBooks,
      createBook,
      deleteBook,
      editBook
    }
  }, [books])

  return <BooksContext.Provider value={data}>{children}</BooksContext.Provider>
}
