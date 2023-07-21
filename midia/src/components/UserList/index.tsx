import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { addUser, deleteUser, getUsers } from '../../store/thunks/users'
import { useEffect } from 'react'
import Skeleton from '../Skeleton'
import { faker } from '@faker-js/faker'
import Button from '../Button'

const UserList = () => {
  const dispatch = useAppDispatch()
  const { data, isLoading, error } = useAppSelector((state) => state.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const handleAddUser = () => {
    const name = faker.person.fullName()
    dispatch(addUser(name))
  }

  const handleDeleteUser = (id: number) => {
    dispatch(deleteUser(id))
  }

  if (isLoading) return <Skeleton />
  if (error) return <div>Error...</div>

  return (
    <div>
      UserList
      <Button onClick={handleAddUser} rounded>
        add user
      </Button>
      {data.map((user) => {
        return (
          <div key={user.id} className="flex">
            <Button onClick={() => handleDeleteUser(user.id)} rounded>
              delete user
            </Button>
            {user.name}
          </div>
        )
      })}
    </div>
  )
}

export default UserList
