import React from 'react'
import useBooksContext from '../hooks/useBooksContext'

export const BookCreate = () => {
  const { createBook } = useBooksContext()

  const handleSubmit = (event) => {
    event.preventDefault()
    const { title } = event.target
    createBook(title.value)
  }

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" name="title" />
        <button className="button">Create!</button>
      </form>
    </div>
  )
}
