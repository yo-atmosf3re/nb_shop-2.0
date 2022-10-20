import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../@types/types';
import SneakersBlock from './SneakersBlock/SneakersBlock';

const Items = React.memo(() => {
   const { products } = useSelector((state: RootState) => state.product)
   return (
      <div className="content__items">
         {
            products.map(s => <SneakersBlock {...s} key={s.id} />)
         }
      </div>
   )
})

export default Items