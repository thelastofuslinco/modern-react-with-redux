import Button from '../../Button'
import { useRemoveAlbumMutation } from '../../../store'
import { AlbumModel } from '../../../model/albumModel'
import { GoTrash, GoXCircle } from 'react-icons/go'
interface Props {
  album: AlbumModel
}

const RemoveAlbumButton = ({ album }: Props) => {
  const [removeAlbum, { isLoading: loading, isError: error }] =
    useRemoveAlbumMutation()

  return (
    <Button
      loading={loading}
      onClick={() => removeAlbum({ id: album.id })}
      danger={error}
    >
      {error ? <GoXCircle /> : <GoTrash />}
    </Button>
  )
}

export default RemoveAlbumButton
