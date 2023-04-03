import React, { useState } from "react";
import styles from "../Styles/Navigation Bar Styles/NavigationBar.module.css";
import Logo from "./Logo";
import NavBarButton from "./NavBarButton";
import UserProfile from "./Dropdown Menu/UserProfile";
import DropdownMenu from "./Dropdown Menu/DropdownMenu";

function NavigationBar(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [loggedIn, setLoggedIn] = useState(props.loggedIn);
  const [name, setName] = useState(props.name);
  const [customer, setCustomer] = useState(props.customer);
  const [employee, setEmployee] = useState(props.employee);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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
        <>
          <UserProfile name={name} onClickFunction={toggleDropdown} />
          {showDropdown ? (
            <DropdownMenu customer={customer} employee={employee} />
          ) : null}
        </>
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
