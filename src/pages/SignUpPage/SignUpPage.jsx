import React, {Component} from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }
  
  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='SignUpPage'>
        <SignUpForm
        {...this.props}
        handleSignUp={this.props.handleSignUp}
        updateMessage={this.updateMessage}
        />

        <p>{this.state.message}</p>
      </div>
    );
  }
};

export default SignUpPage;