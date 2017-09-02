import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

class App extends Component {
  
  
  
  
  
  
   /*---------- Helper Methods ----------*/
  
  
  
   /*---------- Callback Methods ----------*/
  
  
  
  
   /*---------- Lifecycle Methods ----------*/
  
  
  
  render() {
    return (
      <div>

        <div className="App-nav">
          <h2>Get Cooking</h2>
        </div>

        
        <img className="Cooking-logo" src="./images/getcooking_whitelogo-01.png" />
        
        <div>
          <p className="App-content">
          Get Cooking!
          </p>
        </div>
      </div>
    );
  }
}

export default App;
