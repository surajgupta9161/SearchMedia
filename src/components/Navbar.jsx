import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-3 px-10 bg-(--c1) search-container '>
            <Link to='/' className='font-medium text-2xl search-box'>MediaSearch</Link>
            <div className='flex gap-5 items-center search-btn '>
                <Link className='text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2 search-collection ' to='/'>Search</Link>
                <Link className='text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2 search-collection ' to='/collections'>Collections</Link>
            </div>
        </div>
    )
}

export default Navbar
