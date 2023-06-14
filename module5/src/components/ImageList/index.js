import React from 'react'
import { ImageShow } from '../ImageShow'
import './styles.css'

export const ImageList = ({ images }) => {
  return (
    <div className="imageGrid">
      {images.map((image, index) => (
        <ImageShow key={index} src={image} />
      ))}
    </div>
  )
}
