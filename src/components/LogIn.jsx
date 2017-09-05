import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }


  isFormInvalid() {
    return !(this.state.email && this.state.password);
  }

  render() {
    return(

      <div className='login-container'>
        <h1>Log In</h1>

      </div>
    );
  }
};

export default LogIn;