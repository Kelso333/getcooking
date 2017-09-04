import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Nav() {
  return (

  <nav>
    <div className="nav-wrapper">
      <div>Logo</div>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          
          <NavLink exact activeClassName='active' to='/'>Home</NavLink> 
          <NavLink activeClassName='active' to='/gettoknowus'>Get To Know Us</NavLink>
          <NavLink activeClassName='active' to='/getintouch'>Get In Touch</NavLink>
          <NavLink activeClassName='active' to='/signup'>Sign Up</NavLink>

        </li>
      </ul>
    </div>
  </nav>

    );
}




export default Nav;




