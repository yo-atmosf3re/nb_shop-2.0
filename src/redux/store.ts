import { configureStore } from '@reduxjs/toolkit'
import items from './slices/itemsSlice'
import product from './slices/productSlice'

export const store = configureStore({
   reducer: {
      items,
      product,
   },
})