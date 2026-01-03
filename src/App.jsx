import React from 'react'
import { fetchPhotos } from './api/MediaApi'
import { fetchVideos } from './api/MediaApi'
import { fetchGif } from './api/MediaApi'
import Searchbar from './components/Searchbar'
import Tabs from './components/Tabs'

const App = () => {
  return (
    // <div className='h-screen w-full bg-gray-900 '>
    //   <button className='bg-green-400 px-4 py-2 m-5' onClick={async () => {
    //     const data = await fetchPhotos('cat')
    //     console.log(data.results)
    //   }}>
    //     Get Photos
    //   </button>
    //   <button className='bg-green-400 px-4 py-2 m-5' onClick={async () => {
    //     const data = await fetchVideos('cat')
    //     console.log(data.videos)
    //   }}>
    //     Get Videos
    //   </button>

    //   <button className='bg-green-400 px-4 py-2 m-5' onClick={async () => {
    //     const data = await fetchGif('cat')
    //     console.log(data.results)
    //   }}>
    //     Get Gif
    //   </button>

    // </div>

    <div className='h-screen w-full bg-gray-900 '>
      <Searchbar />
      <Tabs />
    </div>
  )
}

export default App
