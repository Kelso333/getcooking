import React from 'react';
import {Navbar, NavItem, Dropdown, Button, SideNav, SideNavItem} from 'react-materialize';

const Nav = (props) => {
  return (
    props.user ?

      <Navbar className='navbar' right>

        <NavItem href='/'><img className='logo' src='./images/getcooking_whitelogo-01.png' /></NavItem>
        <NavItem className='navlinks' activeClassName='active' href='/'>Home</NavItem>
        <NavItem className='navlinks' activeClassName='active' href='/gettoknowus'>Get To Know Us</NavItem>
        <NavItem className='navlinks' activeClassName='active' href='/getintouch'>Get In Touch</NavItem>

      
        <Dropdown className='userdropdown' trigger={
          <Button className='userdropdown btn waves-effect hoverable'><span> Hello, {props.user.name}</span></Button>
          }>

          <NavItem href='/'>Edit Profile</NavItem>
          <NavItem divider />
          <NavItem><a onClick={props.handleLogOut}>Log Out</a></NavItem>
        </Dropdown>
      

      </Navbar>
      :
      <Navbar className='navbar' right>

        <NavItem href='/'><img className='logo' src='./images/getcooking_whitelogo-01.png' /></NavItem>
        <NavItem className='navlinks' href='/'>Home</NavItem>
        <NavItem className='navlinks' href='/gettoknowus'>Get To Know Us</NavItem>
        <NavItem className='navlinks' href='/getintouch'>Get In Touch</NavItem>
       


       <Dropdown className='userdropdown' trigger={
        <Button className='userdropdown btn waves-effect hoverable'>Sign Up!</Button>
        }>
        <NavItem href='/signup'>Sign Up</NavItem>
        <NavItem divider />
        <NavItem href='/login'>Log In</NavItem>
      </Dropdown>

      </Navbar>
    );
}




export default Nav;




