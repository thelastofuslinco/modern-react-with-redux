import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'
import { AlbumModel } from '../../model/albumModel'

interface AlbumsSliceInterface {
  data: Array<AlbumModel>
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
