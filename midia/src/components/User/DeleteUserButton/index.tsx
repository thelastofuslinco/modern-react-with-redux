import Button from '../../Button'
import { deleteUser } from '../../../store'
import { useThunk } from '../../../hooks/useThunk'
import { GoTrash, GoXCircle } from 'react-icons/go'

interface Props {
  userId: number
}

const DeleteUserButton = ({ userId }: Props) => {
  const [runThunk, loading, error] = useThunk(deleteUser)

  const handleDeleteUser = (id: number) => {
    runThunk(id)
  }

  return (
    <Button
      onClick={() => handleDeleteUser(userId)}
      loading={loading}
      danger={error ? true : false}
    >
      {error ? <GoXCircle /> : <GoTrash />}
    </Button>
  )
}

export default DeleteUserButton
