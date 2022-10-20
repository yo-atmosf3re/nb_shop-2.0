import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { RootState } from '../../@types/types';
import FullPageItems from './FullPageItems';

const SneakersPage = React.memo(() => {
   const { title } = useParams();
   const { products } = useSelector((state: RootState) => state.product)
   const item = products.filter(i => i.title === title)
   return (
      <div className='content__fullpage'>
         <Link to={'/'} style={{ textDecoration: 'none' }}>
            <div className="fullpage__button-back">
               Back in catalog
            </div>
         </Link>
         <>
            {
               item.map(f => <FullPageItems {...f} />)
            }
         </>
      </div>
   )
})

export default SneakersPage
