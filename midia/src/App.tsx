import CreateUserButton from './components/User/CreateUserButton'
import UserList from './components/User/UserList'

function App() {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex justify-between items-center">
        <h1>Users</h1>
        <CreateUserButton />
      </div>

      <UserList />
    </div>
  )
}

export default App
