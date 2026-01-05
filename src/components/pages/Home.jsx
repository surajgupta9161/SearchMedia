import React from 'react'
import ResultGrid from '../ResultGrid'
import Tabs from '../Tabs'
import Searchbar from '../Searchbar'
import { useSelector } from 'react-redux'

const Home = () => {
    const { query } = useSelector((store) => store.search)
    return (
        <div>
            <Searchbar />
            {query != '' ? <div>  <Tabs />
                <ResultGrid /> </div> : ""}


        </div>
    )
}

export default Home
