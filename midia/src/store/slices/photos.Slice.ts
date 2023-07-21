import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

interface Photo {
  id: number
  url: string
  albumId: number
}

interface PhotosSliceInterface {
  data: Array<Photo>
}

const photosSlice = createSlice<
  PhotosSliceInterface,
  SliceCaseReducers<PhotosSliceInterface>
>({
  name: 'photo',
  initialState: { data: [] },
  reducers: {}
})

export default photosSlice.reducer
