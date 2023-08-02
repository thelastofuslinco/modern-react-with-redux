import { UserModel } from '../../../model/userModel'
import { useGetAlbumsQuery } from '../../../store'
import ExpandablePanel from '../../ExpandablePanel'
import Skeleton from '../../Skeleton'
import AddAlbumButton from '../AddAlbumButton'

interface Props {
  user: UserModel
}

const AlbumList = ({ user }: Props) => {
  const { data: albums, isLoading, error } = useGetAlbumsQuery(user)

  let content
  if (isLoading) content = <Skeleton times={3} />
  else if (error) content = <div>Error get albums</div>
  else
    content = albums?.map((album) => {
      const header = (
        <div>
          Album #{album.id} / {album.title}
        </div>
      )
      return (
        <ExpandablePanel key={album.id} header={header}>
          Album photos
        </ExpandablePanel>
      )
    })

  return (
    <div>
      <div className="flex gap-2 items-center">
        Albums by {user.name} <AddAlbumButton user={user} />
      </div>
      <div>{content}</div>
    </div>
  )
}

export default AlbumList
