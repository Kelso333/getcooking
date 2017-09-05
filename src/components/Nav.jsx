import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Nav = () => {
  return (

  <nav>

    <div className='nav-wrapper'>

      <Link to='/'><img className='logo' src='./images/getcooking_whitelogo-01.png' /></Link>
    
        <ul className='right hide-on-med-and-down'>

          <li className='navlinks'><NavLink exact activeClassName='active' to='/'>Home</NavLink></li>
          <li className='navlinks'><NavLink exact activeClassName='active' to='/gettoknowus'>Get To Know Us</NavLink></li>
          <li className='navlinks'><NavLink exact activeClassName='active' to='/getintouch'>Get In Touch</NavLink></li>
          <li className='navlinks'><NavLink exact activeClassName='active' to='/signup'>Sign Up</NavLink></li>
          <li className='navlinks'><NavLink exact activeClassName='active' to='/login'>Log In</NavLink></li>
        </ul>
      
    </div>
  </nav>

    );
}




export default Nav;




