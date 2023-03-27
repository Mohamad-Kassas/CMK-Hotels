import React, { useState } from "react";
import styles from "../Styles/Navigation Bar Styles/NavBarButton.module.css";

function NavBarButtons(props) {
  const [styling] = useState(styles);
  const [buttonText] = useState(props.buttonText);

  const getButtonStyleClass = (buttonText) => {
    switch (buttonText) {
      case "Login":
        return "authenticationButton";

      case "Sign Up":
        return "authenticationButton";

      default:
        return "navigationButton";
    }
  };

  // If you need additional functionality for the onClickFunction that can only be done inside this specific component, then use the following:

  // handleOnClick() {
  //     props.loginOnClick();
  //     const popupContainer = document.getElementById("popupContainer");
  //     popupContainer.style.display = "flex";
  //   }

  return (
    <button
      className={eval("styling." + getButtonStyleClass(buttonText))}
      onClick={() => props.onClickFunction()}
    >
      {buttonText}
    </button>
  );
}

export default NavBarButtons;
