import React, { useState } from "react";
import styles from "../Styles/Bookings Styles/Date.module.css";

function Date(props) {
  const [isCheckIn] = useState(props.isCheckIn);
  const [dateText] = useState(props.dateText);

  const getCheckInOrCheckOut = (isCheckIn) => {
    if (isCheckIn == true) {
      return "Check In:  ";
    } else {
      return "Check Out:  ";
    }
  };

  return (
    <div className={styles.dateContainer}>
      <div className={styles.dateTextBold}>
        {getCheckInOrCheckOut(isCheckIn)}
      </div>
      <div className={styles.dateText}>{dateText}</div>
    </div>
  );
}
export default Date;
