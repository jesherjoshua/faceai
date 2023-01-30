import React from 'react';
import {Footer,WhatGPT3,Header} from './container';
import {Brand,Team,Nav} from './components';
import './app.css';

const App = () => {
  return (
    <div className = "App">
      <div className='gradient__bg'>
          <Nav />
          <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Team />
      <Footer />
    </div>
  )
}

export default App
