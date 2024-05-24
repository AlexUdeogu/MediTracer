import React, { useState } from 'react'
import './navbar.css'
const Navbar = () => {


  return (
    <nav>
      <a href='#' className='logo'> Medi<span className='logo-half'>Tracer</span></a>
       <ul>
        <li><a href="#service">Don't have an account?</a></li>
        <li><a href="#"> <botton type="submit" className="item-container" > Sign Up </botton></a></li>
      </ul>
    </nav>
  )
}

export default Navbar
