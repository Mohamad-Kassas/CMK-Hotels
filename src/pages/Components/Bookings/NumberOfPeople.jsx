import React, { Component } from "react";
import styles from "../Styles/ Bookings Styles/Date.module.css";
import { TbEdit } from "react-icons/tb";

class NumberOfPeople extends Component {
  state = {
    number: this.props.number,
  };

  render() {
    return (
      <div className={styles.dateContainer}>
        <div className={styles.dateText}>
          {"Number of People: "}
          {this.state.number}
        </div>
        <div className={styles.editButton}>
          <TbEdit color="#864646" />
        </div>
      </div>
    );
  }
}
export default NumberOfPeople;
