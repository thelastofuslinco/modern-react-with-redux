import { AlbumModel } from '../../../model/albumModel'
import { useGetPhotosQuery } from '../../../store'
import Skeleton from '../../Skeleton'
import CreatePhotoButton from '../CreatePhotoButton/CreatePhotoButton'
import RemovePhotoButton from '../RemovePhotoButton/RemovePhotoButton'

interface Props {
  album: AlbumModel
}

const PhotoList = ({ album }: Props) => {
  const { data: photos, isFetching: loading, error } = useGetPhotosQuery(album)

  let content
  if (loading) content = <Skeleton times={3} />
  else if (error) content = <div>Error get photos</div>
  else
    content = photos?.map((photo) => {
      return (
        <div key={photo.id} className="">
          <RemovePhotoButton photo={photo} />
          <img className="" src={photo.url} alt={photo.id + ' photo'} />
        </div>
      )
    })

  return (
    <div>
      <div className="flex gap-2 items-center justify-between mb-2">
        Albums by {album.title} <CreatePhotoButton album={album} />
      </div>
      <div className="flex flex-col gap-2">{content}</div>
    </div>
  )
}

export default PhotoList
