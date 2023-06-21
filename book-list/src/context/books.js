import axios from 'axios'
import { createContext, useEffect, useMemo, useState } from 'react'

export const BooksContext = createContext()

export const BooksContextProvider = ({ children }) => {
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

  const data = useMemo(() => {
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

    return {
      books,
      getBooks,
      createBook,
      deleteBook,
      editBook
    }
  }, [books])

  useEffect(() => {
    getBooks()
  }, [])

  return <BooksContext.Provider value={data}>{children}</BooksContext.Provider>
}
