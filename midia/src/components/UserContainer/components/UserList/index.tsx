import { useAppSelector } from '../../../../hooks/useAppSelector'
import { getUsers } from '../../../../store'
import { useEffect } from 'react'
import Skeleton from '../../../Skeleton'
import { useThunk } from '../../../../hooks/useThunk'
import DeleteUserButton from '../DeleteUserButton'

const UserList = () => {
  const { data } = useAppSelector((state) => state.users)
  const [runThunk, loading, error] = useThunk(getUsers)

  useEffect(() => {
    runThunk()
  }, [runThunk])

  if (loading) return <Skeleton times={10} />
  if (error) return <div>Error...</div>

  return (
    <div className="flex flex-col gap-2">
      {data.map((user) => {
        return (
          <div key={user.id} className="flex gap-2 mb-2 p-2 border rounded">
            <DeleteUserButton userId={user.id} />
            {user.name}
          </div>
        )
      })}
    </div>
  )
}

export default UserList
