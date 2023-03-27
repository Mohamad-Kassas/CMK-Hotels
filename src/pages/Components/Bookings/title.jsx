import React, { Component } from "react";
import styles from "../Styles/ Bookings Styles/Title.module.css";
import { AiFillStar } from "react-icons/ai";

class Title extends Component {
  state = {
    rating: this.props.rating,
    titleText: this.props.titleText,
  };

  render() {
    if (this.state.rating == -1) {
      return (
        <div className={styles.titleContainer}>
          <div className={styles.titleText}>{this.state.titleText}</div>
        </div>
      );
    } else {
      return (
        <div className={styles.titleContainer}>
          <div className={styles.titleText}>{this.state.titleText}</div>
          <div>
            {Array(this.state.rating).fill(
              <AiFillStar color="#b06464" size="25px" />
            )}
          </div>
        </div>
      );
    }
  }
}
export default Title;
