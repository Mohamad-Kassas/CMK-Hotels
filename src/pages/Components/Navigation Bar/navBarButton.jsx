import React, { Component } from "react";
import styles from "../Styles/Navigation Bar Styles/navBarButton.module.css"

class navBarButtons extends Component {
  state = {
    styles : styles,
    buttonText: this.props.buttonText,
    onClickFunction: this.props.onClickFunction
  };
  
  getButtonStyleClass(buttonText) {
    switch (buttonText) {
      case "Login":
        console.log("Login Case")
        return "authenticationButton"

      case "Sign Up":
        console.log("Sign Up Case")
          return "authenticationButton"
        
      default:
        console.log("Default Case")
        return "navigationButton"
    }
  }

  // If you need additional functionality for the onClickFunction that can only be done inside this specific component, then use the following:

  // handleOnClick() {
  //     this.props.loginOnClick();
  //     const popupContainer = document.getElementById("popupContainer");
  //     popupContainer.style.display = "flex";
  //   }

  render() {
    return (
      <button className={eval("this.state.styles." + this.getButtonStyleClass(this.state.buttonText))} onClick={() => this.state.onClickFunction()}>
        {this.state.buttonText}
      </button>
    );
  }
}

export default navBarButtons;