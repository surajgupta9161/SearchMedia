import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './feauters/searchSlice'
import collectionReducer from './feauters/collectionSlice'
export const store = configureStore({
    reducer: {
        search: searchReducer,
        collection: collectionReducer
    },
})