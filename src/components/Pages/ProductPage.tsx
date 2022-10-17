import React from 'react'
import Sidebar from '../Content/Sidebar/Sidebar'
import SneakersPage from './SneakersPage'

const ProductPage = () => {
   return (
      <div className='content'>
         <div className='content__container'>
            <SneakersPage />
            <Sidebar />
         </div>
      </div>
   )
}

export default ProductPage
