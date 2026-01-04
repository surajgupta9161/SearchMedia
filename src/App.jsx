import React from 'react'
import Searchbar from './components/Searchbar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'

const App = () => {
  return (

    <div className='min-h-screen text-white w-full bg-gray-900 '>
      <Searchbar />
      <Tabs />
      <ResultGrid />
    </div>
  )
}

export default App
