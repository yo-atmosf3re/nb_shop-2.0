import React from 'react'
import './scss/app.scss'
import Content from './components/Content/Content';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/Pages/MainLayout';
import ProductPage from './components/Pages/ProductPage';
import SidebarMenuPage from './components/Pages/SidebarMenuPage/SidebarMenuPage';


const App = React.memo(() => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Content />} />
        <Route path='*' element={<div>Not found, 404</div>} />
        <Route path='product/:title' element={<ProductPage />} />
        <Route path='product/sidebar' element={<SidebarMenuPage />} />
      </Route>
    </Routes>
  )
})

export default App;