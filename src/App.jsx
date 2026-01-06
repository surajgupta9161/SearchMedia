
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Collections from './components/pages/Collections'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (

    <div className='min-h-screen text-white w-full bg-gray-800 '>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
      <ToastContainer />

    </div>
  )
}

export default App
