import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {Navbar, NavItem, Dropdown, Button, SideNav, SideNavItem} from 'react-materialize';

const Nav = (props) => {
  return (
    props.user ?

      <Navbar className='nav-wrapper' right>
        <NavItem href='/'><img className='logo' src='./images/getcooking_whitelogo-01.png' /></NavItem>
        <NavItem className='navlinks' activeClassName='active' href='/'>Home</NavItem>
        <NavItem className='navlinks' activeClassName='active' href='/gettoknowus'>Get To Know Us</NavItem>
        <NavItem className='navlinks' activeClassName='active' href='/getintouch'>Get In Touch</NavItem>


        <Dropdown icon='arrow_drop_down' trigger={
          <Button><span className='usernav'> Hello, {props.user.name}</span></Button>
          }>

          <NavItem href='/'>Edit Profile</NavItem>
          <NavItem divider />
          <NavItem><a onClick={props.handleLogOut}>Log Out</a></NavItem>

        </Dropdown>
        
      </Navbar>
      :
      <Navbar className='nav-wrapper' right>

        <NavItem href='/'><img className='logo' src='./images/getcooking_whitelogo-01.png' /></NavItem>
        <NavItem className='navlinks' activeClassName='active' href='/'>Home</NavItem>
        <NavItem className='navlinks' activeClassName='active' href='/gettoknowus'>Get To Know Us</NavItem>
        <NavItem className='navlinks' activeClassName='active' href='/getintouch'>Get In Touch</NavItem>
        <NavItem className='navlinks' activeClassName='active' href='/signup'>Sign Up</NavItem>
        <NavItem className='navlinks' activeClassName='active' href='/login'>Log In</NavItem>

      </Navbar>
    );
}




export default Nav;




