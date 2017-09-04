import React, {Component} from 'react';


class SignUp extends Component {
  constructor(props){
    super(props); 
    this.state = {
      email: '',
      password: '',
    }
    this.handleInput=this.handleInput.bind(this);
  }
  
  handleInput(e) {
    this.setState({
      email: this.email.value,
      password: this.password.value
    })
  }
  
  render() {
    return (

      <div className='signup-container'>

        <h1>Sign Up</h1>

          <form onSubmit={(e) => {
            e.preventDefault()
            this.props.action(this.state)
            }}> 
            <input ref={(el) => this.email=el}type='text' placeholder='email' value={this.state.email} onChange={this.handleInput}/>
            <br />
            <input ref={(el) => this.password=el} type='password' placeholder='password' value={this.state.password} onChange={this.handleInput} />
            <br />
            <br />
            <button className='btn waves-effect' type='submit'>Submit</button>
          </form>

      </div>
    )
  }
}




export default SignUp;