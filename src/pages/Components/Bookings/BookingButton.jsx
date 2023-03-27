import React, { Component } from "react";
import styles from "../Styles/ Bookings Styles/BookingButton.module.css";

class BookingButton extends Component {
  state = {
    styles: styles,
    buttonText: this.props.buttonText,
    onClickFunction: this.props.onClickFunction,
  };

  render() {
    return (
      <button
        className={this.state.styles.bookingButton}
        onClick={() => this.state.onClickFunction()}
      >
        {this.state.buttonText}
      </button>
    );
  }
}

export default BookingButton;
