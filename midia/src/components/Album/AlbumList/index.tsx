import { UserModel } from '../../../model/userModel'
import { useGetAlbumsQuery } from '../../../store'
import ExpandablePanel from '../../ExpandablePanel'
import PhotoList from '../../Photo/PhotoList/PhotoList'
import Skeleton from '../../Skeleton'
import AddAlbumButton from '../AddAlbumButton'
import RemoveAlbumButton from '../RemoveAlbumButton'

interface Props {
  user: UserModel
}

const AlbumList = ({ user }: Props) => {
  const { data: albums, isFetching: loading, error } = useGetAlbumsQuery(user)

  let content
  if (loading) content = <Skeleton times={3} />
  else if (error) content = <div>Error get albums</div>
  else
    content = albums?.map((album) => {
      const header = (
        <div className="flex justify-between w-full items-center gap-2">
          <RemoveAlbumButton album={album} />
          Album #{album.id} / {album.title}
        </div>
      )
      return (
        <ExpandablePanel key={album.id} header={header}>
          <PhotoList album={album} />
        </ExpandablePanel>
      )
    })

  return (
    <div>
      <div className="flex gap-2 items-center justify-between mb-2">
        Albums by {user.name} <AddAlbumButton user={user} />
      </div>
      <div className="flex flex-col gap-2">{content}</div>
    </div>
  )
}

export default AlbumList
