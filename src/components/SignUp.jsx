import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class SignUp extends Component {
  constructor(props){
    super(props); 
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleInput=this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      name: this.name.value,
      email: this.email.value,
      password: this.password.value
    })
  }

  
  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password);
  }

  render() {
    return (

      <div className='signup-container'>
        <h1>Sign Up</h1>

          <form onSubmit={(e) => {
            e.preventDefault()
            this.props.action(this.state)
            }}>

            <input ref={(el) => this.name=el} type='text' placeholder='name' value={this.state.name} onChange={this.handleInput}/>
            <br />

            <input ref={(el) => this.email=el} type='text' placeholder='email' value={this.state.email} onChange={this.handleInput}/>
            <br />

            <input ref={(el) => this.password=el} type='password' placeholder='password' value={this.state.password} onChange={this.handleInput} />
            <br />
            <br />
            <button className='btn waves-effect hoverable' type='submit' disabled={this.isFormInvalid()}>Submit</button>&nbsp;&nbsp;
            
            <Link className='btn waves-effect hoverable' to='/'>Cancel</Link>

          </form>
      </div>
    );
  }
}




export default SignUp;