import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'
import DropdownPage from './pages/DropdownPage'
import Route from './components/Route'
import Sidebar from './components/Sidebar'
import ModalPage from './pages/ModalPage'

const App = () => {
  const links = [
    { label: 'Button', to: '/button' },
    { label: 'Accordion', to: '/accordion' },
    { label: 'Dropdown', to: '/dropdown' },
    { label: 'Modal', to: '/modal' }
  ]

  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar links={links} />

      <div className="col-span-5">
        <Route path={'/button'}>
          <ButtonPage />
        </Route>
        <Route path={'/accordion'}>
          <AccordionPage />
        </Route>
        <Route path={'/dropdown'}>
          <DropdownPage />
        </Route>
        <Route path={'/modal'}>
          <ModalPage />
        </Route>
      </div>
    </div>
  )
}

export default App
