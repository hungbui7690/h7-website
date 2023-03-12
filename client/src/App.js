import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SharedLayout, Home, Contact, Projects, Error } from './pages'
import 'normalize.css'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
