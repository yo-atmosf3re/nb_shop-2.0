import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemsInitialType, ItemsSliceStateType } from '../../@types/types';
import { NB373, NB574, NB670, NB920, NB5740, NBXR } from '../../assets/img/sneakers';
import { calcTotalPrice } from '../../utils/calcTotalPrice';

const initialState: ItemsSliceStateType = {
   items: [
      { id: 1, image: NB574, title: 'New Balance 574 Vintage Brights', price: 650, count: 1, },
      { id: 2, image: NB920, title: 'New Balance Made in UK 920 Chinese New Year', price: 1200, count: 1, },
      // { id: 3, image: NB373, title: 'New Balance 373 Modern Classics', price: 800, count: 1 },
      // { id: 4, image: NB670, title: 'New Balance Made in UK 670 Chinese New Year', price: 780, count: 1, },
      // { id: 5, image: NBXR, title: 'New Balance X-Racer Utility', price: 1000, count: 1, },
      // { id: 6, image: NB5740, title: 'New Balance 5740 Think Colorfully', price: 940, count: 1, },
   ],
   totalPrice: 1850,
   totalCount: 0,
}

const itemsSlice = createSlice({
   name: 'items',
   initialState,
   reducers: {
      addItems(state, action: PayloadAction<ItemsInitialType>) {
         const findItem = state.items.find((o) => o.id === action.payload.id)
         if (findItem?.count) {
            findItem.count++;
            state.totalPrice = calcTotalPrice(state.items)
         } else {
            state.items.push({
               ...action.payload, count: 1,
            })
         }
      },
      minusItem(state, action: PayloadAction<number>) {
         const findItem = state.items.find(obj => obj.id === action.payload);
         if (findItem) findItem.count--;
         state.totalPrice = calcTotalPrice(state.items)
      },
      removeItem(state, action: PayloadAction<number>) {
         state.items = state.items.filter((obj) => obj.id !== action.payload)
         state.totalPrice = calcTotalPrice(state.items)
      },
   }
})

export const { addItems, removeItem, minusItem } = itemsSlice.actions;
export default itemsSlice.reducer;