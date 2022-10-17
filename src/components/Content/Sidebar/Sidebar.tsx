import React from 'react'
import { NB373, NB574, NB670, NB920, NB5740, NBXR } from '../../../assets/img/sneakers';
import Receipt from './Receipt/Receipt';
import SneakersBasket from './SneakersBasket/SneakersBasket';

const Sidebar = () => {
   return (
      <div className="content__sidebar">
         <div className='sidebar__container'>
            <SneakersBasket />
            <Receipt />
         </div>
      </div>
   )
}

export default Sidebar
