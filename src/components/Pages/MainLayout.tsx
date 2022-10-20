import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Content/Sidebar/Sidebar'
import Header from '../Header/Header'

const MainLayout = React.memo(() => {
   return (
      <div className='wrapper'>
         <Header />
         <div className="content">
            <Outlet />
         </div>
      </div>
   )
})

export default MainLayout
