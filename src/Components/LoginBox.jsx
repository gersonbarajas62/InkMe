import React, {Component} from 'react';

 class LoginBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  

      };
      this.submitLogin =this.submitLogin.bind(this);
    }
    
    submitLogin(e) {

    }

    render() {
      return(
        <div className="inner-container">
         <div className="header">
      
        </div>
        <div className="box">
        <div className="input-group">
        <label htmlFor="userName"> Username</label>
        <input type="text" 
        name="username" 
        className="login-input"
         placeholder="username"/>
        </div>
        
        <div className="input-group">
        <label htmlFor="password">password</label>
        <input 
        type="text" 
        name="password" 
        className="login-input" 
        placeholder="Password"/>
        </div>
        <button type="button" 
        className="login-btn" 
        onClick={this.submitLogin.bind(this)}>Login</button>
        </div>

        </div>
      )
    }
  }
  export default LoginBox;