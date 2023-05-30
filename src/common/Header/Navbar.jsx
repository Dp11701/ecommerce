import React, { useState } from 'react'
import {Link } from "react-router-dom";


export const Navbar = () => {
  const [MobileMenu, setMobilemenu] = useState(false);
  return (
    <div>
      <header className='header'>
        <div className="container d_flex">

          <div className="categrories d_flex">
          <span class="fa-solid fa-border-all"></span>
          <h4> Catgrories <i class="fa-solid fa-chevron-down"></i></h4>
          </div>

        <div className="navlink">
          <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobilemenu(false)} >
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/pages'>pages</Link></li>
            <li><Link to='/user'>user account</Link></li>
            <li><Link to='/vendor'>vendor account</Link></li>
            <li><Link to='/track'>track my oder</Link></li>
            <li><Link to='/contact'>contact</Link></li>
          </ul>
          <button className='toggle' onClick={() => setMobilemenu(!MobileMenu)}
          
          >
            {
            MobileMenu? <i className='fas fa-times close home-bth'></i> : <i className='fas fa-bars open'></i>
          }
          </button>
        </div>
        </div>
      </header>
    </div>
  )
}

