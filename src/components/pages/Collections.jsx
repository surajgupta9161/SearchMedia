import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../CollectionCard"
import { clearCollection } from '../../redux/feauters/collectionSlice'


const Collections = () => {

    const collection = useSelector(state => state.collection.items)

    const dispatch = useDispatch()

    const clearAll = () => {

        dispatch(clearCollection())
    }

    return (
        <div className=" overflow-auto px-8 py-4">
            {collection.length > 0 ? <div className="flex justify-between mb-6">
                <h2 className="text-xl collection font-medium">
                    Your Collection
                </h2>
                <button onClick={() => {
                    clearAll()
                }} className="active:scale-95 transition cursor-pointer bg-red-600 px-4 py-2 text-lg font-medium rounded clear-cl ">Clear Collection</button>
            </div> : <h2 className="text-2xl py-10 text-gray-300 text-center font-medium">
                Collection is Empty
            </h2>}

            <div className='flex w-full justify-between flex-wrap gap-2 overflow-auto px-2'>
                {collection.map((item, idx) => {
                    return <div key={idx}>
                        <CollectionCard item={item} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Collections