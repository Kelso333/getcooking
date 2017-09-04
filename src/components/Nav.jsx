import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Nav() {
  return (

  <nav>
    <div className='nav-wrapper'>
      <img className='logo' src='./images/getcooking_whitelogo-01.png' />
    
        <ul className='right hide-on-med-and-down'>

          <li><NavLink className='nav' exact activeClassName='active' to='/'>Home</NavLink></li>
          <li><NavLink className='nav' exact activeClassName='active' to='/gettoknowus'>Get To Know Us</NavLink></li>
          <li><NavLink className='nav' exact activeClassName='active' to='/getintouch'>Get In Touch</NavLink></li>
          <li><NavLink className='nav' exact activeClassName='active' to='/signup'>Sign Up</NavLink></li>
        </ul>
      
    </div>
  </nav>

    );
}




export default Nav;




