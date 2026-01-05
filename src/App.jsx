import React from 'react'
import Searchbar from './components/Searchbar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Collections from './components/pages/Collections'
import Navbar from './components/Navbar'

const App = () => {
  return (

    <div className='min-h-screen text-white w-full bg-gray-800 '>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>

    </div>
  )
}

export default App
