import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import GetToKnowUs from './components/GetToKnowUs';
import GetInTouch from './components/GetInTouch';
import SignUp from './components/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  NavLink,
  Route,
  Redirect
} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null,
    }
    this.handleSignUp=this.handleSignUp.bind(this)
  }
  

   /*---------- Callback Methods ----------*/

  handleSignUp(data) {
    console.log(data)
    fetch('http://localhost:3000/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({
        user: res
      })
      // STORE TOKEN IN LOCAL STORAGE 
      // window.localStorage.setItem('user', res)
    })
  }
  
  
  
   /*---------- Helper Methods (GET) ----------*/
  
  

  
  
  
  
   /*---------- Lifecycle Methods ----------*/
  
  componentWillMount() {
    let user = window.localStorage.getItem('user')
    if (user) {
      // cross-check user.token with the server and
      // if it's all good, log user in
    } else {
      // present signup form or whatever
    }
  }
  
  
  render() {
    return (

       <div>

          <Router>
            
            <div>
              <Nav />
              
              <Route exact path='/' component={Home} />
              <Route exact path='/gettoknowus' component={GetToKnowUs} />
              <Route exact path='/getintouch' component={GetInTouch} />
              <Route exact path='/signup' component={SignUp} />
            </div>
          </Router>
        
    
      {/*{
        this.state.user
        ?
        <p>hello {this.state.user.email}</p>
        :
        <SignUp action={this.handleSignUp}/>     
      }*/}

        
      </div>
    );
  }
}

export default App;
