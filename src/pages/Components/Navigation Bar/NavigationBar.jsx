import React, { useState } from "react";
import styles from "../Styles/Navigation Bar Styles/NavigationBar.module.css";
import Logo from "./Logo";
import NavBarButton from "./NavBarButton";
import UserProfile from "./Dropdown Menu/UserProfile";

function NavigationBar(props) {
  const [loggedIn, setLoggedIn] = useState(props.loggedIn);
  const [name, setName] = useState(props.name);

  const toggleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  const homeButtonOnClick = () => {
    console.log("Home button clicked");
  };

  const aboutUsButtonOnClick = () => {
    console.log("About Us button clicked");
  };

  const contactUsButtonOnClick = () => {
    console.log("Contact Us button clicked");
  };

  return (
    <div className={styles.navigationBarContainer}>
      <Logo></Logo>
      <div className={styles.navigationButtonsContainer}>
        <NavBarButton
          buttonText="Home"
          onClickFunction={homeButtonOnClick}
        ></NavBarButton>
        <NavBarButton
          buttonText="About Us"
          onClickFunction={aboutUsButtonOnClick}
        ></NavBarButton>
        <NavBarButton
          buttonText="Contact Us"
          onClickFunction={contactUsButtonOnClick}
        ></NavBarButton>
      </div>
      {loggedIn ? (
        <UserProfile name={name} />
      ) : (
        <div className={styles.authenticationButtonsContainer}>
          <NavBarButton
            buttonText="Sign Up"
            onClickFunction={() => props.toggleSignUpPopup()}
          ></NavBarButton>
          <div className={styles.lineBreak}></div>
          <NavBarButton
            buttonText="Login"
            onClickFunction={() => props.toggleLoginPopup()}
          ></NavBarButton>
        </div>
      )}
    </div>
  );
}

export default NavigationBar;
