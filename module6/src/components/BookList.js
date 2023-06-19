import React from 'react'
import { BookShow } from './BookShow'

export const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div className="book-list">
      {books.map((book) => {
        return (
          <BookShow
            onEdit={onEdit}
            onDelete={onDelete}
            key={book.id}
            book={book}
          />
        )
      })}
    </div>
  )
}
