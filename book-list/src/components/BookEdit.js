import React, { useState } from 'react'

export const BookEdit = ({ onSubmit, book }) => {
  const [title, setTitle] = useState(book.title)

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ title, id: book.id })
  }

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="input"
      />
      <button className="button is-primary">save</button>
    </form>
  )
}
