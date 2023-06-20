import React from 'react'
import { ImageShow } from '../ImageShow'
import './styles.css'

export const ImageList = ({ images }) => {
  return (
    <div className="imageGrid">
      {images.map((image) => (
        <ImageShow key={image.id} src={image.urls.small} />
      ))}
    </div>
  )
}
