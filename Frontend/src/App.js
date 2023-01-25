import React from 'react';
import {Blog,Footer,Possibility,Features,WhatGPT3,Header} from './container';
import {Brand,Cta,Nav} from './components';
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
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />


    </div>
  )
}

export default App
