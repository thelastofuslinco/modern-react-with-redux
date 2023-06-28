import { useContext } from 'react'
import { BooksContext } from '../context/books'

const useBooksContext = () => {
  const context = useContext(BooksContext)
  return context
}

export default useBooksContext
