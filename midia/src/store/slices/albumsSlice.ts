import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

interface Album {
  id: number
  title: string
  userId: number
}

interface AlbumsSliceInterface {
  data: Array<Album>
}

const albumsSlice = createSlice<
  AlbumsSliceInterface,
  SliceCaseReducers<AlbumsSliceInterface>
>({
  name: 'album',
  initialState: { data: [] },
  reducers: {}
})

export default albumsSlice.reducer
