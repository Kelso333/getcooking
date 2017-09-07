import React, { Component } from 'react';
import LogInForm from '../../components/LogInForm/LogInForm';

const LogInPage = (props) => {
  return(
    <div className='LogInPage'>
      <LogInForm
      {...props}
      handleLogIn={props.handleLogIn}
      />
    </div>
  );
};

export default LogInPage;