import React from 'react'
import { NB373, NB574, NB670, NB920, NB5740, NBXR } from '../../../assets/img/sneakers';
import SneakersBlock from './SneakersBlock/SneakersBlock';

const sneakers = [
   { id: 1, image: NB574, title: 'New Balance 574 Vintage Brights', price: '$ 650' },
   { id: 2, image: NB920, title: 'New Balance Made in UK 920 Chinese New Year', price: '$ 1 200' },
   { id: 3, image: NB373, title: 'New Balance 373 Modern Classics', price: '$ 800' },
   { id: 4, image: NB670, title: 'New Balance Made in UK 670 Chinese New Year', price: '$ 780' },
   { id: 5, image: NBXR, title: 'New Balance X-Racer Utility', price: '$ 1 000' },
   { id: 6, image: NB5740, title: 'New Balance 5740 Think Colorfully', price: '$ 940' },
]

const Items = () => {
   return (
      <div className="content__items">
         {
            sneakers.map(s => <SneakersBlock {...s} key={s.id} />)
         }
      </div>
   )
}

export default Items