import React from 'react'
import { NB373, NB574, NB670, NB920, NB5740, NBXR } from '../../../../assets/img/sneakers';
import Sneakers from './Sneakers/Sneakers';

const SneakersBasket = () => {
   return (
      <div className="sidebar__mybaskets">
         <div className='sidebar__title'>My basket</div>
         <Sneakers image={NB574} title={'New Balance 574 Vintage Brights'} price={'$ 650'} />
         <Sneakers image={NB920} title={'New Balance Made in UK 920 Chinese New Year'} price={'$ 1 200'} />
      </div>
   )
}

export default SneakersBasket
