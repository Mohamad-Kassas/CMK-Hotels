import React, { Component } from "react";
import styles from "../Styles/Popup/PopupInput.module.css";

class PopupInput extends Component {
  state = {
    inputType: this.props.inputType,
  };
  render() {
    return (
      <div className={styles.containerDiv}>
        <input
          className={styles.inputBox}
          id={this.state.inputType + "Input"}
          type={this.state.inputType}
          name={this.state.inputType}
          placeholder={
            this.state.inputType.charAt(0).toUpperCase() +
            this.state.inputType.slice(1)
          }
        />
        <label className={styles.label} htmlFor={this.state.inputType}>
          {this.state.inputType.charAt(0).toUpperCase() +
            this.state.inputType.slice(1)}
        </label>
      </div>
    );
  }
}

export default PopupInput;
