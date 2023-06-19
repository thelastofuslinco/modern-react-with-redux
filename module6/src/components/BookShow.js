import React, { useState } from 'react'
import { BookEdit } from './BookEdit'

export const BookShow = ({ book, onEdit, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false)

  return (
    <div className="book-show">
      <div className="actions">
        <button
          className="edit"
          onClick={() => setShowEdit(!showEdit)}
        ></button>
        <button className="delete" onClick={() => onDelete(book.id)}></button>
      </div>

      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />

      {showEdit ? (
        <BookEdit
          book={book}
          onSubmit={(value) => {
            onEdit(value)
            setShowEdit(!showEdit)
          }}
        />
      ) : (
        <p className="title">{book.title}</p>
      )}
    </div>
  )
}
