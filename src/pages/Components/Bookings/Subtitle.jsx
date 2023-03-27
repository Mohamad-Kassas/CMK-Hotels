import React, { Component } from "react";
import styles from "../Styles/ Bookings Styles/Subtitle.module.css";
import { RxDotFilled } from "react-icons/rx";

class Subtitle extends Component {
  state = {
    city: this.props.city,
    numberOfNights: this.props.numberOfNights,
    price: this.props.price,
  };

  render() {
    return (
      <div className={styles.subtitleContainer}>
        <div className={styles.subtitleText}>{this.state.city} </div>

        <RxDotFilled />
        <div className={styles.subtitleText}>
          {this.state.numberOfNights == 1
            ? this.state.numberOfNights + "  Night"
            : this.state.numberOfNights + "  Nights"}
        </div>
        <RxDotFilled />
        <div className={styles.subtitleText}>$ {this.state.price}</div>
      </div>
    );
  }
}
export default Subtitle;
