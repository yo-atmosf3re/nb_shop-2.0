import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../@types/types';
import { NB373, NB574, NB670, NB920, NB5740, NBXR } from '../../../assets/img/sneakers';
import itemsSlice from '../../../redux/slices/itemsSlice';
import Receipt from './Receipt/Receipt';
import Sneakers from './SneakersBasket/Sneakers/Sneakers';

const Sidebar = () => {
   const dispatch = useDispatch();
   const { totalPrice, items } = useSelector((state: RootState) => state.items)
   const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0)
   return (
      <div className="content__sidebar">
         <div className='sidebar__container'>
            <div className="sidebar__mybaskets">
               <div className='sidebar__title'>My basket</div>
               {/* <Sneakers image={NB574} title={'New Balance 574 Vintage Brights'} price={'$ 650'} />
               <Sneakers image={NB920} title={'New Balance Made in UK 920 Chinese New Year'} price={'$ 1 200'} /> */}
               {
                  items.map((s) => <Sneakers {...s} key={s.id} />)
               }
            </div>
            <Receipt />
         </div>
      </div>
   )
}

export default Sidebar
