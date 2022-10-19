import { ItemsInitialType, ProductSliceStateType } from './../../@types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NB373, NB574, NB5740, NB670, NB920, NBXR } from '../../assets/img/sneakers';

const initialState: ProductSliceStateType = {
   products: [
      { id: 1, image: NB574, title: 'New Balance 574 Vintage Brights', price: 650, count: 1, },
      { id: 2, image: NB920, title: 'New Balance Made in UK 920 Chinese New Year', price: 1200, count: 1, },
      { id: 3, image: NB373, title: 'New Balance 373 Modern Classics', price: 800, count: 1 },
      { id: 4, image: NB670, title: 'New Balance Made in UK 670 Chinese New Year', price: 780, count: 1, },
      { id: 5, image: NBXR, title: 'New Balance X-Racer Utility', price: 1000, count: 1, },
      { id: 6, image: NB5740, title: 'New Balance 5740 Think Colorfully', price: 940, count: 1, },
   ],
}

export const productSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {
      setItem(state, action: PayloadAction<ItemsInitialType[]>) {
         state.products = action.payload
      }
   }
})

export const { setItem } = productSlice.actions;
export default productSlice.reducer;