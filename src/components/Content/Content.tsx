import React from 'react'
import { NB373, NB574, NB670, NB920, NB5740, NBXR } from '../../assets/img/sneakers';
import Items from './Items/Items';
import Sidebar from './Sidebar/Sidebar';

const Content = React.memo(() => {
   return (
      <div className="content">
         <div className="content__container">
            <Items />
            <Sidebar />
         </div>
      </div>
   )
})

export default Content
