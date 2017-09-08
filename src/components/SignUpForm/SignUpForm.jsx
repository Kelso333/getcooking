import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';


class SignUpForm extends Component {
  constructor(props){
    super(props); 
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConf: ''
    }
  }

  handleChange = (field, e) => {
    this.props.updateMessage('');
    this.setState({
    // Using ES2015 Computed Property Names
    [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    userService.signup(this.state)
    // successfully signed up - show GamePage
    .then(() => {
      this.props.handleSignUp();
      this.props.history.push('/')
    })
   // invalid user data
   .catch(err => this.props.updateMessage(err.message));
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (

      <div className='signup'>
        <h1>Sign Up</h1>
        <br />
        <br />

          <form className="form-horizontal" onSubmit={this.handleSubmit} >

            <input type='text' className='form-control' placeholder='name' value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
            <br />
            <input type='email' className='form-control' placeholder='Email' value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
            <br />
            <input type='password' className='form-control' placeholder='Password' value={this.state.password} onChange={(e) => this.handleChange('password', e)}
            />
            <br />
            <input type='password' className='form-control' placeholder='Confirm Password' value={this.state.passwordConf} onChange={(e) => this.handleChange('passwordConf', e)}
            />
            <br />
            <br />
            <button className='btn waves-effect hoverable' type='submit' disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
            
            <Link className='btn waves-effect hoverable' to='/'>Cancel</Link>

          </form>
      </div>
    );
  }
};




export default SignUpForm;