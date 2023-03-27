import React, { useState, useEffect } from "react";
import styles from "../Styles/Popup/Popup.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import PopupInput from "./PopupInput";

function Popup(props) {
  const [login, setLogin] = useState(props.login);
  const [signUp, setSignUp] = useState(props.signUp);
  const [employeePopup, setEmployeePopup] = useState(props.employeePopup);

  useEffect(() => {
    setLogin(props.login);
    setSignUp(props.signUp);
    setEmployeePopup(props.employeePopup);
  }, []);



  

  const handleMainButtonClick = () => {
    const emailInputField = document.getElementById("emailInput");
    const passwordInputField = document.getElementById("passwordInput");

    const emailInput = emailInputField.value;
    const passwordInput = passwordInputField.value;

    const errorMessagesDiv = document.getElementById("errorMessagesDiv");

    const errorMessages = document.getElementById("errorMessages");

    let errorStatus = false;

    // Default values
    errorMessagesDiv.style.display = "none";

    if (signUp) {
      const firstNameInputField = document.getElementById("first NameInput");
      const lastNameInputField = document.getElementById("last NameInput");
      const addressInputField = document.getElementById("addressInput");
      const cityInputField = document.getElementById("cityInput");
      const countryInputField = document.getElementById("countryInput");
      const postalCodeInputField = document.getElementById("postal CodeInput");

      const firstNameInput = firstNameInputField.value;
      const lastNameInput = lastNameInputField.value;
      const addressInput = addressInputField.value;
      const cityInput = cityInputField.value;
      const countryInput = countryInputField.value;
      const postalCodeInput = postalCodeInputField.value;

      if (firstNameInput === "") {
        errorMessages.innerText = "First name cannot be empty";
        errorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }

      if (lastNameInput === "") {
        errorMessages.innerText = "Last name cannot be empty";
        errorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }

      if (addressInput === "") {
        errorMessages.innerText = "Address cannot be empty";
        errorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }

      if (cityInput === "") {
        errorMessages.innerText = "City cannot be empty";
        errorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }

      if (countryInput === "") {
        errorMessages.innerText = "Country cannot be empty";
        errorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }

      if (postalCodeInput === "") {
        errorMessages.innerText = "Postal code cannot be empty";
        errorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }

      if (postalCodeInput.length < 5 || postalCodeInput.length > 10) {
        errorMessages.innerText = "Invalid postal code";
        errorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }
    }

    if (passwordInput.length < 8 || passwordInput.length > 20) {
      errorMessages.innerText = "Password must be between 8 and 20 characters";
      errorMessagesDiv.style.display = "flex";
      errorStatus = true;
    }

    if (passwordInput === "") {
      errorMessages.innerText = "Password cannot be empty";
      errorMessagesDiv.style.display = "flex";
      errorStatus = true;

      if (emailInput.length < 4 || emailInput.length > 30) {
        errorMessages.innerText = "email must be between 4 and 30 characters";
        errorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }

      if (emailInput === "") {
        errorMessages.innerText = "email cannot be empty";
        errorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }
    } else {
      // authentication database code, check that email and password are in db and the user checks out
    }

    if (!errorStatus) {
      // authentication database code
    }
  };

  const handleChangeAuthenticationMethodButtonClick = (numButton) => {
    if (numButton === 1) {
      if (login || signUp) {
        setLogin(!login);
        setSignUp(!signUp);
      } else {
        setLogin(true);
        setSignUp(false);
        setEmployeePopup(false);
      }

      const employeeBottomMessage = document.getElementById(
        "employeeBottomMessage"
      );
      employeeBottomMessage.style.display = "block";
    }

    if (numButton === 2) {
      setLogin(false);
      setSignUp(false);
      setEmployeePopup(true);

      const employeeBottomMessage = document.getElementById(
        "employeeBottomMessage"
      );
      employeeBottomMessage.style.display = "none";
    }

    const errorMessagesDiv = document.getElementById("errorMessagesDiv");

    errorMessagesDiv.style.display = "none";
  };

  const handleExitButtonClick = () => {
    props.closePopup();
  };

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupWindow}>
        <div
          className={styles.closeButtonDiv}
          onClick={() => handleExitButtonClick()}
        >
          <AiOutlineClose className={styles.closeButton} />
        </div>
        <h1 className={styles.header}>
          {login ? "Login" : ""}
          {signUp ? "Sign Up" : ""}
          {employeePopup ? "Employee Access" : ""}
        </h1>

        <PopupInput inputType="email" />
        <PopupInput inputType="password" />

        {signUp ? <PopupInput inputType="first Name" /> : null}

        {signUp ? <PopupInput inputType="last Name" /> : null}

        {signUp ? <PopupInput inputType="address" /> : null}

        {signUp ? <PopupInput inputType="city" /> : null}

        {signUp ? <PopupInput inputType="country" /> : null}

        {signUp ? <PopupInput inputType="postal Code" /> : null}

        <div className={styles.errorMessagesDiv} id="errorMessagesDiv">
          <RiErrorWarningFill className={styles.errorIcon} />
          <p className={styles.errorMessages} id="errorMessages">
            {" "}
            Hello world
          </p>
        </div>

        <button
          className={styles.mainButton}
          onClick={() => handleMainButtonClick()}
        >
          {login ? "Login" : ""}
          {signUp ? "Sign Up" : ""}
          {employeePopup ? "Gain Access" : ""}
        </button>

        <hr className={styles.lineBreak}></hr>
        <div>
          <p className={styles.popupBottomMessages}>
            {login ? "Don't have an account? " : "Already a customer? "}{" "}
            <button
              className={styles.ChangeAuthenticationMethodButton}
              onClick={() => handleChangeAuthenticationMethodButtonClick(1)}
            >
              <u>{login ? "Sign Up" : "Login"}</u>
            </button>
          </p>
          <p className={styles.popupBottomMessages} id="employeeBottomMessage">
            Employee?
            <button
              className={styles.ChangeAuthenticationMethodButton}
              onClick={() => handleChangeAuthenticationMethodButtonClick(2)}
            >
              <u>Gain Access</u>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Popup;
