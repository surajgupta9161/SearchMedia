import { useState } from "react"

const Searchbar = () => {
    let [text, setText] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        console.log(text)
        setText('')
    }
    return (
        <div >
            <form onSubmit={handleSubmit} className=' px-14 py-8 flex gap-8 bg-gray-800 '>
                <input
                    className=' w-full border-2 px-4 py-2 rounded-2xl  text-white text-xl outline-none'
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
