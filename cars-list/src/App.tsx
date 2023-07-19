import CarForm from './components/CarForm'
import CarList from './components/CarList'
import CarSearch from './components/CarSearch'
import CarValue from './components/CarValue'

function App() {
  return (
    <div style={{ height: '100vh', padding: '1rem' }}>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  )
}

export default App
