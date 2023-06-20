import React from 'react'

export const BookCreate = ({ onCreate }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const { title } = event.target
    onCreate(title.value)
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
