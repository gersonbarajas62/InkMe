import React, {Component} from 'react';

class RegisterBox extends  React.Component { 
    constructor(props) {
      super(props);
      this.state = { username : "",
       email: "",
        password : "",
         errors: [],
        pwdState: null };
    }

    showValidationErr(elm, msg) {
      this.setState((prevState) => ( { errors: [...prevState.errors, { elm, msg }] } ))
    }

    clearValidationErr(elm) {
      this.setState((prevState) => {
        let newArr = [];
        for(let err of prevState.errors){
          if(elm != err.elm){
            newArr.push(err);
          }
        }
        return {errors: newArr};
      })

    }

    onUserNameChange(e){
      this.setState({ username: e.target.value });
      this.clearValidationErr("username");
    }

    onEmailChange(e){
      this.setState({ email: e.target.value })
      this.clearValidationErr("email");
    }

    onPassWordChange(e){
      this.setState({ password: e.target.value })
      this.clearValidationErr("password");

      this.setState({ pwdState: "weak"});
      if(e.target.value.length > 8) {
        this.setState({ pwdState: "medium"});
      }else if (e.target.value.length > 12) {
        this.setState({ pwdState: "strong" })
      }

    }

    submitRegister(e) {
      if(this.state.username == ""){
        this.showValidationErr("username", "username cannot be empty!");
      } if(this.state.email == ""){
        this.showValidationErr("email", "Email cannot be empty!");
      } if (this.state.password == "") {
        this.showValidationErr("password", "Password cannot be empty!")
      }


      
    }

    render() {
      let usernameErr = null, passwordErr
       = null, emailErr = null;
      for(let err of this.state.errors) {
        if(err.elm == "username") {
          usernameErr = err.msg;
        }if (err.elm == "password"){
          emailErr = err.msg;
        }if (err.elm == "email"){
          passwordErr = err.msg;
        }
      }
      let pwdWeak = false, pwdMedium = false, pwdStrong = false;
      if(this.state.pwdState == "weak"){
        pwdWeak = true;
      }else if (this.state.pwdState == "medium"){
        pwdWeak = true;
        pwdMedium = true;
      }else if (this.state.pwdState == "strong"){
        pwdWeak = true;
        pwdMedium = true;
        pwdStrong = true;
      }

      return(
        <div className="inner-container">
        <div className="header">
        
        </div>
        <div className="box">
        <div className="input-group">
        <label htmlFor="userName">username</label>
        
        <input 
        type="text" 
        name="username"
        className="login-input"
        placeholder="username"
        onChange={this.onUserNameChange.bind(this)}/>

        <small className="danger-error">{ usernameErr ? usernameErr: ""} </small>
        </div>
        
        <div className="input-grouṕ">
        <label htmlFor="Email">Email</label>
        <input type="text" 
        name="Email"
        className="login-input" 
        placeholder="Email" 
        onChange={this.onEmailChange.bind(this)}
        /> 
        <small className="danger-error">{ emailErr ? emailErr: ""} </small>
        </div>

        <div className="input-group">
        <label htmlFor="password">Password</label>
        <input 
        type="Password" 
        name="Password" 
        className="login-i9nput"
        placeholder="Password"
        onChange={this.onPassWordChange.bind(this)}/>
        <small className="danger-error">{ passwordErr ? passwordErr: ""} </small>
        
       {this.state.password && <div className="password-state">
        <div className={"pwd pwd-weak " + (pwdWeak ? "show" : "")}></div>
        <div className={"pwd pwd-medium " + (pwdMedium ? "show" : "")}></div>
        <div className={"pwd pwd-strong " + (pwdStrong ? "show" : "")}></div>

        </div>}
        </div>
        <button 
        type="button" 
        className="login-btn" 
        onClick={this.submitRegister.bind(this)}>Register</button>
        </div>

        </div>
      )
    }
  }

  export default RegisterBox;