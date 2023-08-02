import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react'
import { AlbumModel } from '../../model/albumModel'
import { UserModel } from '../../model/userModel'

const albumsApi = createApi({
  reducerPath: 'albums',
  tagTypes: ['Albums'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001'
  }),
  endpoints: (build) => ({
    getAlbums: build.query<AlbumModel[], UserModel>({
      query: (user) => ({ url: '/albums', params: { userId: user.id } }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Albums' as const, id })),
              { type: 'Albums', id: 'LIST' }
            ]
          : [{ type: 'Albums', id: 'LIST' }]
    }),
    addAlbum: build.mutation<AlbumModel, Partial<AlbumModel>>({
      query: ({ id, ...patch }) => ({
        url: '/albums',
        method: 'POST',
        body: patch
      }),
      invalidatesTags: [{ type: 'Albums', id: 'LIST' }]
    })
  })
})

export const { useGetAlbumsQuery, useAddAlbumMutation } = albumsApi
export default albumsApi
