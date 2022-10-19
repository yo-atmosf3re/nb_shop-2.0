import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../@types/types';
import { NB373, NB574, NB670, NB920, NB5740, NBXR } from '../../../assets/img/sneakers';
import SneakersBlock from './SneakersBlock/SneakersBlock';

const sneakers = [
   { id: 1, image: NB574, title: 'New Balance 574 Vintage Brights', price: '$ 650', count: 1 },
   { id: 2, image: NB920, title: 'New Balance Made in UK 920 Chinese New Year', price: '$ 1 200', count: 1 },
   { id: 3, image: NB373, title: 'New Balance 373 Modern Classics', price: '$ 800', count: 1 },
   { id: 4, image: NB670, title: 'New Balance Made in UK 670 Chinese New Year', price: '$ 780', count: 1 },
   { id: 5, image: NBXR, title: 'New Balance X-Racer Utility', price: '$ 1 000', count: 1 },
   { id: 6, image: NB5740, title: 'New Balance 5740 Think Colorfully', price: '$ 940', count: 1 },
]

const Items = () => {
   const { products } = useSelector((state: RootState) => state.product)
   return (
      <div className="content__items">
         {
            products.map(s => <SneakersBlock {...s} key={s.id} />)
         }
      </div>
   )
}

export default Items