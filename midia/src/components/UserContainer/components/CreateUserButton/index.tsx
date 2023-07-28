import { useThunk } from '../../../../hooks/useThunk'
import { addUser } from '../../../../store'
import Button from '../../../Button'
import { faker } from '@faker-js/faker'
import { GoXCircle } from 'react-icons/go'

const CreateUserButton = () => {
  const [runThunk, loading, error] = useThunk(addUser)

  const handleAddUser = () => {
    const name = faker.person.fullName()
    runThunk(name)
  }

  return (
    <Button
      loading={loading}
      onClick={handleAddUser}
      danger={error ? true : false}
    >
      {error ? <GoXCircle /> : 'add user'}
    </Button>
  )
}

export default CreateUserButton
