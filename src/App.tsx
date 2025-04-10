import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User from './Pages/User'
import './App.css'
import { Suspense} from 'react'
import Login from './Pages/Login'
import { Redirect } from './Pages/Redirect'

function App() {
  return <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Suspense fallback={'loading...'}><Login/></Suspense>}/>
        <Route path='/users' element={<Suspense fallback={'loading...'}><User/></Suspense>}/>
        <Route path='/' element={<Redirect/>}/>
      </Routes>
    </BrowserRouter>
}

export default App
