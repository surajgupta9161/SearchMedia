import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/feauters/searchSlice'

const Tabs = () => {
    const tab = ["photos", "videos", "gif"]
    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)
    return (
        <div className='flex gap-5 p-5 '>
            {tab.map((elem, idx) => {
                return (
                    <button className={`${(activeTab == elem ? 'bg-blue-600' : 'bg-amber-100 ')} text-black transition gap-5 px-4 py-2 w-25 rounded-xl cursor-pointer active:scale-95 uppercase`}
                        key={idx}
                        onClick={() => {
                            dispatch(setActiveTab(elem))
                        }}
                    >
                        {elem}
                    </button>
                )
            })}
        </div>
    )
}

export default Tabs
