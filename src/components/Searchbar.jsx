import { useState } from "react"
import { useDispatch } from "react-redux"

const Searchbar = () => {
    let [text, setText] = useState('')

    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        console.log(text)
        dispatch(text)
        setText('')
    }
    return (
        <div >
            <form onSubmit={handleSubmit} className=' px-14 py-5 flex gap-8 bg-gray-800 '>
                <input
                    className=' w-full border-2 px-4 p-2 rounded-2xl  text-white text-xl outline-none'
                    type="text" placeholder='search anyhting...'
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                    required />
                <button
                    className=' border-2 px-4 py-4 rounded-2xl text-white bg-green-800 cursor-pointer active:scale-95 text-xl'>
                    Search
                </button>
            </form>
        </div>
    )
}
export default Searchbar
