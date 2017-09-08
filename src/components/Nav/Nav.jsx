import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Navbar, NavItem, Dropdown, Button} from 'react-materialize';

const Nav = (props) => {
  return (
    props.user ?

      <Navbar className='navbar' right>

        <Link to='/'><img className='logo' src='./images/getcooking_whitelogo-01.png'/></Link>
        
        <NavItem className='navlinks'> 
          <NavLink exact to='/' activeClassName='active'>Home</NavLink>
          </NavItem>

        <NavItem className='navlinks'> 
          <NavLink exact to='/recipes' activeClassName='active'>Recipes</NavLink>
          </NavItem>

        <NavItem className='navlinks'> 
          <NavLink exact to='/gettoknowus' activeClassName='active'>Get To Know Us</NavLink></NavItem>

        <NavItem className='navlinks'> 
          <NavLink exact to='/getintouch' activeClassName='active'>Get In Touch</NavLink></NavItem>
          
         <Dropdown trigger={
          <Button className='usernav btn waves-effect hoverable' ><span> Hello, {props.user.name}</span></Button>
          }>
          <NavItem className='dropdown'>
            <NavLink exact to='/' activeClassName='active'>Edit Profile</NavLink></NavItem>
          <NavItem divider />
          <NavItem className='dropdown' onClick={props.handleLogOut}>
            <NavLink exact to='' activeClassName='active'>Log Out</NavLink></NavItem>
         </Dropdown>

      </Navbar>
      :

      <Navbar className='navbar' right>
        <Link exact to='/'><img className='logo' src='./images/getcooking_whitelogo-01.png'/></Link>

        <NavItem className='navlinks'> 
          <NavLink exact to='/' activeClassName='active'>Home</NavLink></NavItem>
        <NavItem className='navlinks'>
          <NavLink exact to='/gettoknowus' activeClassName='active'>Get To Know Us</NavLink></NavItem>
        <NavItem className='navlinks'> 
          <NavLink exact to='/getintouch' activeClassName='active'>Get In Touch</NavLink></NavItem>

        <Dropdown trigger={
          <Button className='usernav btn waves-effect hoverable'><span>Sign Up</span></Button>
          }>
          <NavItem className='dropdown'>
            <NavLink exact to='/signup'>Sign Up</NavLink></NavItem>

          <NavItem divider />
          <NavItem className='dropdown'>
            <NavLink exact to='/login' activeClassName='active'>Log In</NavLink></NavItem>
        </Dropdown>

    </Navbar>
    );
}


export default Nav;




