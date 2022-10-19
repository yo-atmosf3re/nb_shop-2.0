import { useDispatch } from "react-redux"
import { store } from "../redux/store"

// ** Types of components
// ** Sneakers.tsx
export type SneakersPropsType = {
   price: number
   title: string
   image: string
   id: number
   count: number
}
// ** SneakersBlock.tsx
export type SneakersBlockPropsType = {
   price: number
   title: string
   image: string
   id: number
   count: number
}
// ** Receipt.tsx
export type ReceiptPropsType = {
   totalPrice: number
}

// ?? Typing for RTK
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
// ?? itemsSlice.ts 
export type ItemsInitialType = {
   id: number
   price: number
   title: string
   image: string
   count: number
}
export interface ItemsSliceStateType {
   items: ItemsInitialType[]
   totalPrice: number
   totalCount: number
}
// ?? productSlice.ts
export interface ProductSliceStateType {
   products: ItemsInitialType[]
}