import React, { Component } from "react";
import styles from "../Styles/Popup/Popup.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import PopupInput from "./PopupInput";

class Popup extends Component {
  state = {
    login: this.props.login,
    signUp: this.props.signUp,
    employeePopup: this.props.employeePopup,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      login: nextProps.login,
      signUp: nextProps.signUp,
      employeePopup: nextProps.employeePopup,
    });
  }

  handleMainButtonClick() {
    const emailInputField = document.getElementById("emailInput");
    const passwordInputField = document.getElementById("passwordInput");

    const emailInput = emailInputField.value;
    const passwordInput = passwordInputField.value;

    const errorMessagesDiv = document.getElementById("errorMessagesDiv");

    const errorMessages = document.getElementById("errorMessages");

    let errorStatus = false;

    // Default values
    errorMessagesDiv.style.display = "none";

    if (this.state.signUp) {
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
  }

  handleChangeAuthenticationMethodButtonClick(numButton) {
    if (numButton === 1) {
      if (this.state.login || this.state.signUp) {
        this.setState({
          login: !this.state.login,
          signUp: !this.state.signUp,
        });
      } else {
        this.setState({ login: true, signUp: false, employeePopup: false });
      }

      const employeeBottomMessage = document.getElementById(
        "employeeBottomMessage"
      );
      employeeBottomMessage.style.display = "block";
    }

    if (numButton === 2) {
      this.setState({ login: false, signUp: false, employeePopup: true });

      const employeeBottomMessage = document.getElementById(
        "employeeBottomMessage"
      );
      employeeBottomMessage.style.display = "none";
    }

    const errorMessagesDiv = document.getElementById(
      "errorMessagesDiv"
    );

    errorMessagesDiv.style.display = "none";
  }

  handleExitButtonClick() {
    this.props.closePopup();
  }

  render() {
    return (
      <div className={styles.popupContainer}>
        <div className={styles.popupWindow}>
          <div
            className={styles.closeButtonDiv}
            onClick={() => this.handleExitButtonClick()}
          >
            <AiOutlineClose className={styles.closeButton} />
          </div>
          <h1 className={styles.header}>
            {this.state.login ? "Login" : ""}
            {this.state.signUp ? "Sign Up" : ""}
            {this.state.employeePopup ? "Employee Access" : ""}
          </h1>

          <PopupInput inputType="email" />
          <PopupInput inputType="password" />

          {this.state.signUp ? <PopupInput inputType="first Name" /> : null}

          {this.state.signUp ? <PopupInput inputType="last Name" /> : null}

          {this.state.signUp ? <PopupInput inputType="address" /> : null}

          {this.state.signUp ? <PopupInput inputType="city" /> : null}

          {this.state.signUp ? <PopupInput inputType="country" /> : null}

          {this.state.signUp ? <PopupInput inputType="postal Code" /> : null}

          <div className={styles.errorMessagesDiv} id="errorMessagesDiv">
            <RiErrorWarningFill className={styles.errorIcon} />
            <p className={styles.errorMessages} id="errorMessages">
              {" "}
              Hello world
            </p>
          </div>

          <button
            className={styles.mainButton}
            onClick={() => this.handleMainButtonClick()}
          >
            {this.state.login ? "Login" : ""}
            {this.state.signUp ? "Sign Up" : ""}
            {this.state.employeePopup ? "Gain Access" : ""}
          </button>

          <hr className={styles.lineBreak}></hr>
          <div>
            <p className={styles.popupBottomMessages}>
              {this.state.login
                ? "Don't have an account? "
                : "Already a customer? "}{" "}
              <button
                className={styles.ChangeAuthenticationMethodButton}
                onClick={() =>
                  this.handleChangeAuthenticationMethodButtonClick(1)
                }
              >
                <u>{this.state.login ? "Sign Up" : "Login"}</u>
              </button>
            </p>
            <p
              className={styles.popupBottomMessages}
              id="employeeBottomMessage"
            >
              Employee?
              <button
                className={styles.ChangeAuthenticationMethodButton}
                onClick={() =>
                  this.handleChangeAuthenticationMethodButtonClick(2)
                }
              >
                <u>Gain Access</u>
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
