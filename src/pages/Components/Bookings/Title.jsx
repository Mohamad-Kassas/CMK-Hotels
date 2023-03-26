import React, { Component } from "react";
import styles from "../Styles/ Bookings Styles/Title.module.css";
import { AiFillStar } from "react-icons/ai";

class Title extends Component {
  state = {
    size : this.props.size,
    rating: this.props.rating,
    titleText: this.props.titleText,
  };

  getClassName(size) {
    if (size == "small") {
      return styles.titleTextSmall;
    } else if (size == "medium") {
      return styles.titleTextMedium;
    } else if (size == "large") {
      return styles.titleTextLarge;
    }
  }

  render() {
    if (this.state.rating == -1) {
      return (
        <div className={styles.titleContainer}>
          <div className={this.getClassName(this.state.size)}>{this.state.titleText}</div>
        </div>
      );
    } else {
      return (
        <div className={styles.titleContainer}>
          <div className={this.getClassName(this.state.size)}>{this.state.titleText}</div>
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
