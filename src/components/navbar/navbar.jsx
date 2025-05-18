import React from 'react'
import './navbar.css'
import Logo from '../../assets/images/Logo.png';

const NavBar = () => {
  return (
    <nav className='container'> 
         <img src={Logo} alt="Company Logo" className="logo" />
         <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>SERVICES</li>
            <li>LOANS</li>
            <li>CONTACT US</li>
            <li><button className='btn'>LOGIN</button></li>
            <li><button className='btn'>REGISTER</button></li>
         </ul>
    </nav>
  )
}

export default NavBar