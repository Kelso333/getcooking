import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';

class LogInForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    userService.login(this.state)
    .then(() => {
      this.props.handleLogIn();
      this.props.history.push('/');
    })
    // invalid credentials - DON'T USE alert!
    .catch(err => console.log('Invalid Credentials!'));
  }

  handleChange = (field, e) => {
    this.setState({
    // Using ES2015 Computed Property Names
    [field]: e.target.value
    });
  } 

  isFormInvalid() {
    return !(this.state.email && this.state.password);
  }

  render() {
    return(
      <div className='login-container'>
        <h1>Log In</h1>

        <form className='form-horizontal' onSubmit={this.handleSubmit} >

          <input type='email' className='form-control' placeholder='Email' value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
      
          <input type='password' className='form-control' placeholder='Password' value={this.state.password} onChange={(e) => this.handleChange('password', e)} />
        
          <button className='btn waves-effect hoverable' disabled={this.isFormInvalid()}>Log In</button>&nbsp;&nbsp;&nbsp;

          <Link className='btn waves-effect hoverable' to='/'>Cancel</Link>

        </form>
      </div>
    )
  }
}

export default LogInForm;