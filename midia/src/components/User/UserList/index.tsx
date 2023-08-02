import { useAppSelector } from '../../../hooks/useAppSelector'
import { getUsers } from '../../../store'
import { useEffect } from 'react'
import Skeleton from '../../Skeleton'
import { useThunk } from '../../../hooks/useThunk'
import DeleteUserButton from '../DeleteUserButton'
import ExpandablePanel from '../../ExpandablePanel'
import AlbumList from '../../Album/AlbumList'

const UserList = () => {
  const { data } = useAppSelector((state) => state.users)
  const [runThunk, loading, error] = useThunk<any, void>(getUsers)

  useEffect(() => {
    runThunk()
  }, [runThunk])

  if (loading) return <Skeleton times={10} />
  if (error) return <div>Error...</div>

  return (
    <>
      {data.map((user) => {
        const header = (
          <div className="flex gap-2 items-center">
            <DeleteUserButton userId={user.id} />
            {user.name}
          </div>
        )

        return (
          <ExpandablePanel key={user.id} header={header}>
            <AlbumList user={user} />
          </ExpandablePanel>
        )
      })}
    </>
  )
}

export default UserList
