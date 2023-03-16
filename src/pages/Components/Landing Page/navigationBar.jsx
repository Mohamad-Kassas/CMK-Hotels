import React, { Component } from "react";
import styles from "../Styles/Landing Page Styles/navigationBar.module.css";

import Logo from "./logo";
import NavBarButton from "./navBarButton";

class NavigationBar extends Component {
  homeButtonOnClick = () => {
    console.log("Home button clicked");
  };

  aboutUsButtonOnClick = () => {
    console.log("About Us button clicked");
  };

  contactUsButtonOnClick = () => {
    console.log("Contact Us button clicked");
  };

  signUpButtonOnClick = () => {
    console.log("Sign Up button clicked");
  };

  loginButtonOnClick = () => {
    console.log("Login button clicked");
  };

  render() {
    return (
      <div className={styles.navigationBarContainer}>
        <Logo></Logo>
        <div className={styles.navigationButtonsContainer}>
          <NavBarButton
            buttonText="Home"
            onClickFunction={() => this.homeButtonOnClick()}
          ></NavBarButton>
          <NavBarButton
            buttonText="About Us"
            onClickFunction={() => this.aboutUsButtonOnClick()}
          ></NavBarButton>
          <NavBarButton
            buttonText="Contact Us"
            onClickFunction={() => this.contactUsButtonOnClick()}
          ></NavBarButton>
        </div>
        <div className={styles.authenticationButtonsContainer}>
          <NavBarButton
            buttonText="Sign Up"
            onClickFunction={() => this.signUpButtonOnClick()}
          ></NavBarButton>
          <div className={styles.lineBreak}></div>
          <NavBarButton
            buttonText="Login"
            onClickFunction={() => this.loginButtonOnClick()}
          ></NavBarButton>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
