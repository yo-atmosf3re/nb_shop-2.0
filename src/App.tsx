import React from 'react'
import './scss/app.scss'

import Header from './components/Header/Header';
import Content from './components/Content/Content';


const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Content />
    </div>
  );
}

export default App;
