import React, { Component } from "react";
import styles from "../Styles/ Bookings Styles/Date.module.css";

class Name extends Component {
  state = {
    name: this.props.name,
  };

  render() {
    return (
      <div className={styles.dateText}>
        {"Name: "}
        {this.state.name}
      </div>
    );
  }
}
export default Name;
