import React, { useState } from 'react'
import { ImageList, SearchBar } from './components'
import { searchImages } from './api'

export const App = () => {
  const [images, setImages] = useState([])

  const handleSubmit = (value) => {
    searchImages(value).then(setImages)
  }

  return (
    <div>
      <SearchBar label={'Search term'} onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  )
}

export default App
