import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home/index'
import Favourites from './pages/Favourites/index'
import Details from './pages/Details/index'

function App() {
  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-lg text-gray-600'>
        <NavBar/>
        
        <Routes>
          <Route
          path='/'
          element={<Home/>}
          />
          <Route
          path='/favourites'
          element={<Favourites/>}
          />

          <Route
          path='/recipe-item/:id'
          element={<Details/>}
          />
        
        </Routes>

        
      </div>
    </div>
  )
}

export default App
