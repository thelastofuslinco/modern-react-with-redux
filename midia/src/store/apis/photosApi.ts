import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PhotoModel } from '../../model/photoModel'
import { AlbumModel } from '../../model/albumModel'

const photosApi = createApi({
  reducerPath: 'photos',
  tagTypes: ['Photos', 'PhotosAlbum'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001'
  }),
  endpoints: (build) => ({
    getPhotos: build.query<PhotoModel[], AlbumModel>({
      query: (album) => ({ url: '/photos', params: { albumId: album.id } }),
      providesTags: (result, error, album) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Photos' as const, id })),
              { type: 'PhotosAlbum', id: album.id }
            ]
          : [{ type: 'PhotosAlbum', id: album.id }]
    }),
    removePhoto: build.mutation<PhotoModel, Partial<PhotoModel>>({
      query: (photo) => ({ url: `photos/${photo.id}`, method: 'DELETE' }),
      invalidatesTags: (result, error, photo) => [
        { type: 'Photos', id: photo?.id }
      ]
    }),
    addPhoto: build.mutation<PhotoModel, Partial<PhotoModel>>({
      query: ({ id, ...patch }) => ({
        url: '/photos',
        method: 'POST',
        body: patch
      }),
      invalidatesTags: (result, error, photo) => [
        { type: 'PhotosAlbum', id: photo?.albumId }
      ]
    })
  })
})

export const {
  useGetPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation
} = photosApi
export default photosApi
