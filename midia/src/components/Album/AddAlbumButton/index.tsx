import { faker } from '@faker-js/faker'
import { useAddAlbumMutation } from '../../../store'
import Button from '../../Button'
import { UserModel } from '../../../model/userModel'
import { GoXCircle } from 'react-icons/go'

interface Props {
  user: UserModel
}

const AddAlbumButton = ({ user }: Props) => {
  const [addAlbum, { isLoading: loading, isError: error }] =
    useAddAlbumMutation()

  return (
    <Button
      loading={loading}
      onClick={() =>
        addAlbum({
          title: faker.music.songName(),
          userId: user.id
        })
      }
      danger={error}
    >
      {error ? <GoXCircle /> : 'add album'}
    </Button>
  )
}

export default AddAlbumButton
