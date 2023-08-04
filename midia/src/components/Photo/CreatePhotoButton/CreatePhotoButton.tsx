import { faker } from '@faker-js/faker'
import { useAddPhotoMutation } from '../../../store'
import Button from '../../Button'
import { GoXCircle } from 'react-icons/go'
import { AlbumModel } from '../../../model/albumModel'

interface Props {
  album: AlbumModel
}

const CreatePhotoButton = ({ album }: Props) => {
  const [addPhoto, { isLoading: loading, isError: error }] =
    useAddPhotoMutation()

  return (
    <Button
      loading={loading}
      onClick={() =>
        addPhoto({
          url: faker.image.url(),
          albumId: album.id
        })
      }
      danger={error}
    >
      {error ? <GoXCircle /> : 'add photo'}
    </Button>
  )
}

export default CreatePhotoButton
