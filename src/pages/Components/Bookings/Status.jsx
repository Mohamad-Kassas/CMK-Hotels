import React, { Component } from "react";
import styles from "../Styles/ Bookings Styles/Date.module.css";
import { TbEdit } from "react-icons/tb";

class Status extends Component {
  state = {
    isCheckedIn: this.props.isCheckedIn,
  };

  getStatus(isCheckedIn) {
    if (isCheckedIn == true) {
      return "Checked In";
    } else {
      return "Not Checked In";
    }
  }

  render() {
    return (
      <div className={styles.dateContainer}>
        <div className={styles.dateText}>
          {"Status: "}
          {this.getStatus(this.state.isCheckedIn)}
        </div>
        <div className={styles.editButton}>
          <TbEdit color="#864646" />
        </div>
      </div>
    );
  }
}
export default Status;
