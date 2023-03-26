import React, { Component } from "react";
import styles from "../Styles/Navigation Bar Styles/NavigationBar.module.css";
import Logo from "./Logo";
import NavBarButton from "./NavBarButton";

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
            onClickFunction={() => this.props.toggleSignUpPopup()}
          ></NavBarButton>
          <div className={styles.lineBreak}></div>
          <NavBarButton
            buttonText="Login"
            onClickFunction={() => this.props.toggleLoginPopup()}
          ></NavBarButton>
        </div>
      </div>
    );
  }
}

export default NavigationBar;