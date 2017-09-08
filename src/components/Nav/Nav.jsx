import React from 'react';
import {Navbar, NavItem, Dropdown, Button} from 'react-materialize';

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
      
         <Dropdown trigger={
          <Button className='usernav' ><span> Hello, {props.user.name}</span></Button>
          }>
          <NavItem className='dropdown'>Edit Profile</NavItem>
          <NavItem divider />
          <NavItem className='dropdown' href='' onClick={props.handleLogOut}>Log Out</NavItem>
         </Dropdown>

      </Navbar>
      :

      <Navbar className='navbar' right>
        <img className='logo' src='./images/getcooking_whitelogo-01.png' />

        <NavItem className='navlinks' href='/'>Home</NavItem>
        <NavItem className='navlinks' href='/gettoknowus'>Get To Know Us</NavItem>
        <NavItem className='navlinks' href='/getintouch'>Get In Touch</NavItem>

        <Dropdown trigger={
          <Button className='usernav'><span>Sign Up</span></Button>
          }>
          <NavItem className='dropdown' href='/signup'>Sign Up</NavItem>

          <NavItem divider />

          <NavItem className='dropdown' href='/login'>Log In</NavItem>
        </Dropdown>

    </Navbar>
    );
}




export default Nav;




