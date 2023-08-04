import { PhotoModel } from '../../../model/photoModel'
import { useRemovePhotoMutation } from '../../../store'
import Button from '../../Button'
import { GoTrash, GoXCircle } from 'react-icons/go'
interface Props {
  photo: PhotoModel
}

const RemovePhotoButton = ({ photo }: Props) => {
  const [removePhoto, { isLoading: loading, isError: error }] =
    useRemovePhotoMutation()

  return (
    <Button
      loading={loading}
      onClick={() => removePhoto({ id: photo.id })}
      danger={error}
    >
      {error ? <GoXCircle /> : <GoTrash />}
    </Button>
  )
}

export default RemovePhotoButton
