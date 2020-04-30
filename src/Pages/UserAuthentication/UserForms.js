import React, { Component } from "react";
import {
  Wrapper,
  LeftWrapper,
  RightWrapper,
  ImageWrapper,
  SignUpButton,
  LoginButton,
} from "./UserFormsStyle";
import SignUp from "./SignUp";
import Login from "./Login";
import formpage from "../../assests/images/formpage.jpeg";

class UserForms extends Component {
  state = {
    signUp: true,
    login: false,
    email: sessionStorage.getItem('email')
    
  };

  loginHandler = () => {
    this.setState({
      login: true,
      signUp: false,
    });
  };

  signUpHandler = () => {
    this.setState({
      login: false,
      signUp: true,
    });
  };

  
  render() {
    return (
      <Wrapper>
        <LeftWrapper>
          <ImageWrapper>
            <img src={formpage} alt="image" />
          </ImageWrapper>
        </LeftWrapper>
        <RightWrapper>
          {this.state.signUp && this.state.email=== null ? (
            <div>
              <SignUp/>
            </div>
          ) : null}
          {this.state.login || this.state.email!== null ? (
            <div>
              <Login/>
            </div>
          ) : null}

          <div>
            <SignUpButton
              onClick={this.signUpHandler}
              clicked={this.state.signUp}
            >
              {" "}
              NEW USER
            </SignUpButton>
            <LoginButton onClick={this.loginHandler} clicked={this.state.login}>
              ALREADY HAVE AN ACCOUNT
            </LoginButton>
          </div>
        </RightWrapper>
      </Wrapper>
    );
  }
}

export default UserForms;