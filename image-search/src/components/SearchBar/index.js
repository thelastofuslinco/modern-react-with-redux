import React, { useState } from 'react'
import './styles.css'

export const SearchBar = ({ label, onSubmit }) => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="searchBarContainer">
      <label>{label}</label>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') onSubmit(searchValue)
        }}
      />
    </div>
  )
}
