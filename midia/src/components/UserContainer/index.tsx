import UserList from './components/UserList'
import CreateUserButton from './components/CreateUserButton'

const UserContainer = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h1>Users</h1>
        <CreateUserButton />
      </div>

      <UserList />
    </div>
  )
}

export default UserContainer
