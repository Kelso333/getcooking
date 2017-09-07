import React, { Component } from 'react';
import './App.css';
import Home from '../../components/Home/Home';
import Nav from '../../components/Nav/Nav';
import GetToKnowUs from '../../components/GetToKnowUs/GetToKnowUs';
import GetInTouch from '../../components/GetInTouch/GetInTouch';
import SignUpPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LogInPage'
import userService from '../../utils/userService';
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
  }
  

  /*---------- Callback Methods ----------*/

  handleLogOut = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignUp = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogIn = () => {
    this.setState({user: userService.getUser()});
  }
  
   /*---------- Helper Methods (GET) ----------*/
  
  

   /*---------- Lifecycle Methods ----------*/
   
   componentDidMount() {
     let user = userService.getUser();
     this.setState({user});
   }
  
  
  render() {
    return (

       <div>
          <Router>
            <div>
              <Nav 
              user={this.state.user}
              handleLogOut={this.handleLogOut}
            />

              <Switch>
                <Route exact path='/' render={(props) =>
                  <Home
                    user={this.props.user}
                    handleLogOut={this.handleLogOut}
                    />
                  }/>
                <Route exact path='/gettoknowus' component={GetToKnowUs} />
                <Route exact path='/getintouch' component={GetInTouch} />
                <Route exact path='/signup' render={(props) =>
                  <SignUpPage
                    {...props}
                    handleSignUp={this.handleSignUp}
                  />
                }/>

                <Route exact path='/login' render={(props) =>
                  <LogInPage
                  {...props}
                  handleLogIn={this.handleLogIn}
                  />
                }/>

              </Switch>

            </div>
          </Router>

      </div>
    );
  }
}

export default App;
