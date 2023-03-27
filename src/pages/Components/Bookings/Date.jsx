import React, { Component } from "react";
import styles from "../Styles/ Bookings Styles/ate.module.css";
import { TbEdit } from "react-icons/tb";

class Date extends Component {
  state = {
    isCheckIn: this.props.isCheckIn,
    isEditable: this.props.isEditable,
    dateText: this.props.dateText,
  };

  getCheckInOrCheckOut(isCheckIn) {
    if (isCheckIn == true) {
      return "Check In:  ";
    } else {
      return "Check Out:  ";
    }
  }

  render() {
    if (this.state.isEditable == false) {
      return (
        <div className={styles.dateText}>
          {this.getCheckInOrCheckOut(this.state.isCheckIn)}
          {this.state.dateText}
        </div>
      );
    } else {
      return (
        <div className={styles.dateContainer}>
          <div className={styles.dateText}>
            {this.getCheckInOrCheckOut(this.state.isCheckIn)}
            {this.state.dateText}
          </div>
          <div className={styles.editButton}>
            <TbEdit color="#864646" />
          </div>
        </div>
      );
    }
  }
}
export default Date;
