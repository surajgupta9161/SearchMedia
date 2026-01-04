import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './feauters/searchSlice'
export const store = configureStore({
    reducer: {
        search: searchReducer
    },
})