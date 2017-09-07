import React from 'react';
import {Navbar, NavItem, Dropdown, Button, SideNav, SideNavItem} from 'react-materialize';

const Nav = (props) => {
  return (
    props.user ?

  
  

      <Navbar className='navbar' right>
    <img className='logo' src='./images/getcooking_whitelogo-01.png' />
        
        <NavItem className='navlinks' href='/'>Home</NavItem>
        <NavItem className='navlinks' href='/recipes'>Recipes</NavItem>
        <NavItem className='navlinks' 
        href='/gettoknowus'>Get To Know Us</NavItem>
        <NavItem className='navlinks' href='/getintouch'>Get In Touch</NavItem>
        <NavItem className='navlinks' href='/getintouch'>Get In Touch</NavItem>
        <NavItem href='' onClick={props.handleLogOut}>Log Out</NavItem>
      
         <NavItem className='navlinks'><span> Hello, {props.user.name}</span></NavItem>
      </Navbar>
      :

      <Navbar className='navbar' right>

        <NavItem href='/'><img className='logo' src='./images/getcooking_whitelogo-01.png' /></NavItem>
        <NavItem className='navlinks' href='/'>Home</NavItem>
        <NavItem className='navlinks' href='/gettoknowus'>Get To Know Us</NavItem>
        <NavItem className='navlinks' href='/getintouch'>Get In Touch</NavItem>
       <NavItem className='navlinks' href='/signup'>Sign Up</NavItem>
        <NavItem className='navlinks' href='/login'>Log In</NavItem>
    </Navbar>
    );
}




export default Nav;




