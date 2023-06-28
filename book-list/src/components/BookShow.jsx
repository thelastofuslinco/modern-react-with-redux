import React, { useState } from 'react'
import { BookEdit } from './BookEdit'
import useBooksContext from '../hooks/useBooksContext'

export const BookShow = ({ book }) => {
  const { deleteBook, editBook } = useBooksContext()
  const [showEdit, setShowEdit] = useState(false)

  return (
    <div className="book-show">
      <div className="actions">
        <button
          className="edit"
          onClick={() => setShowEdit(!showEdit)}
        ></button>
        <button className="delete" onClick={() => deleteBook(book.id)}></button>
      </div>

      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />

      {showEdit ? (
        <BookEdit
          book={book}
          onSubmit={(value) => {
            editBook(value)
            setShowEdit(!showEdit)
          }}
        />
      ) : (
        <p className="title">{book.title}</p>
      )}
    </div>
  )
}
