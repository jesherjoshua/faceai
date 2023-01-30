import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="facerecognition__header section__padding" id="home">
     <div className="facerecognition__header-content">
      <h1 className="gradient__text" id="header_text">GPT-3</h1>
      <br/>
      <p className="gradient__text" id="bottom_text">
         Upload your pics to group them using face recognition
      </p> <br/><br/>

      <div id="parent">
        <p className="gradient__text">Upload your target images here : </p>
        <input type="file" class="targetUpload" multiple/>
        <p className="gradient__text">Upload your main image here : </p>
        <input type="file" class="mainUpload"/>

      </div>
     </div>
      
    </div>
  )
}

export default Header
