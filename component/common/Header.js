import Image from 'next/image';
import React from 'react';
import logo from '/public/images/logo.png';

export default function Header() {
  return (
    <header>
      <div className='container' >
        <div className='row' >
          <div className='col-md-5' >
            <nav className='navigation' >
              <ul>
                <li> <a href='/' >Home</a> </li>
                <li><a href='#' >Team</a></li>
                <li><a href='#' >Projects</a></li>
                <li><a href='#' >News</a></li>
                <li><a href='#' >Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className='col-md-2' >
            <div className='logo' >
              <Image
                src={logo}
              /> 
            </div>
          </div>
          <div className='col-md-5' >
            <div className='header-contact-btn' >
              <button>Contact</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
