import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'
import { PhotoModel } from '../../model/photoModel'

interface PhotosSliceInterface {
  data: Array<PhotoModel>
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
