import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './feauters/searchSlice'
export const store = configureStore({
    reducer: {
        search: searchSlice
    },
})