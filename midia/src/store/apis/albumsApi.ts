import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AlbumModel } from '../../model/albumModel'
import { UserModel } from '../../model/userModel'

const albumsApi = createApi({
  reducerPath: 'albums',
  tagTypes: ['Albums', 'AlbumsUser'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001'
  }),
  endpoints: (build) => ({
    getAlbums: build.query<AlbumModel[], UserModel>({
      query: (user) => ({ url: '/albums', params: { userId: user.id } }),
      providesTags: (result, error, user) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Albums' as const, id })),
              { type: 'AlbumsUser', id: user.id }
            ]
          : [{ type: 'AlbumsUser', id: user.id }]
    }),
    removeAlbum: build.mutation<AlbumModel, Partial<AlbumModel>>({
      query: (album) => ({ url: `albums/${album.id}`, method: 'DELETE' }),
      invalidatesTags: (result, error, album) => {
        console.log(album)

        return [{ type: 'Albums', id: album?.id }]
      }
    }),
    addAlbum: build.mutation<AlbumModel, Partial<AlbumModel>>({
      query: ({ id, ...patch }) => ({
        url: '/albums',
        method: 'POST',
        body: patch
      }),
      invalidatesTags: (result, error, album) => [
        { type: 'AlbumsUser', id: album?.userId }
      ]
    })
  })
})

export const {
  useGetAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation
} = albumsApi
export default albumsApi
