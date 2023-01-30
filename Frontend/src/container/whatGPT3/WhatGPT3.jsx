import React from 'react';
import './whatGPT3.css';
import cloudmain1 from '../../assets/cloudmain1.png';

const WhatGPT3 = () => {
  return (
    <div className="facerecognition__Whatgpt3" id="about">
      <h1 id="Whatgpt3_about">About</h1>
     <div className="facerecognition__Whatgpt3-problem">
        <div className="facerecognition__Whatgpt3-problem_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente in atque, nemo debitis sint dolorem optio. Iure corporis assumenda necessitatibus vel, inventore impedit, recusandae magni tempora neque eaque sunt dolor quisquam odit quo dignissimos cupiditate. Hic placeat expedita, non modi molestiae alias ipsum fugiat necessitatibus totam esse, atque quibusdam officia.</div>
        <img src={cloudmain1} alt="NONE" className="facerecognition__Whatgpt3-problem_image"/>
     </div>
     <div className="facerecognition__Whatgpt3-solution">
        <img src={cloudmain1} alt="NONE" className="facerecognition__Whatgpt3-solution_image"/>
        <div className="facerecognition__Whatgpt3-solution_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente in atque, nemo debitis sint dolorem optio. Iure corporis assumenda necessitatibus vel, inventore impedit, recusandae magni tempora neque eaque sunt dolor quisquam odit quo dignissimos cupiditate. Hic placeat expedita, non modi molestiae alias ipsum fugiat necessitatibus totam esse, atque quibusdam officia.</div>
     </div>
     <div className="facerecognition__Whatgpt3-model">
        <div className="facerecognition__Whatgpt3-model_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente in atque, nemo debitis sint dolorem optio. Iure corporis assumenda necessitatibus vel, inventore impedit, recusandae magni tempora neque eaque sunt dolor quisquam odit quo dignissimos cupiditate. Hic placeat expedita, non modi molestiae alias ipsum fugiat necessitatibus totam esse, atque quibusdam officia.</div>
        <img src={cloudmain1} alt="NONE" className="facerecognition__Whatgpt3-model_image"/>
     </div>
      
    </div>
  )
}

export default WhatGPT3
