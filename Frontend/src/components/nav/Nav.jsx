import React from 'react';
import { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './nav.css';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#about'>About</a></p>
  <p><a href='#team'>Team</a></p>
  <p><a href='#info'>Info</a></p>
  </>
)

const Nav = () => {

  const [toggleMenu , setToggleMenu] = useState(false);

  return (
    <div className="facerecognition__navbar">
      <div className="facerecognition__navbar-links">
        <div className="facerecognition__navbar-links_logo">
          {/* <img src="#" alt="logo"  />   */}
          <h3 id="facerecognition__navbar-titleHead">Gpt3</h3>
        </div>
        <div className="facerecognition__navbar-links_container">
          <Menu />
        </div> 
      </div>
      <div className="facerecognition__navbar-menu"> 
        {toggleMenu 
          ? <RiCloseLine color="red" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
        }
        { toggleMenu && (
          <div className="facerecognition__navbar-menu_container scale-up-center">
            <div className='facerecognition__navbar-menu_container-links'>
              <Menu />
            </div>  
          </div>  

        )}

      </div>
    </div>
  )
}

export default Nav
