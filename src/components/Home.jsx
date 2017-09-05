import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Link,
  NavLink,
  Route,
  Redirect
} from 'react-router-dom';


class Home extends Component {
  render(){
    
    return(

      <div className='home-container'>

        <h1>Home</h1>

        <div className='slider'>
          <ul className='slides'>

            <li className='carousel'>
              <img src='./images/crab-ceviche.jpg' /> 
              <div className='caption center-align'>
                <h2>Crab Ceviche</h2>
              </div>
            </li>

            <li className='carousel'>
              <img src='./images/danish-pancake.jpg' /> 
              <div className='caption center-align'>
                <h2>Danish Pancake</h2>
             </div>
            </li>

            <li className='carousel'>
              <img src='./images/Coffee-Chocolate-Cinnamon-Pecan-Pie.jpg' /> 
              <div className='caption center-align'>
                <h2>Chocolate Coffee Pecan Pie</h2>
              </div>
            </li>

          </ul>
        </div>

      </div>

    )
  }
}



export default Home;