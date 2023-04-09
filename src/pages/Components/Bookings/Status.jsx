import React, { useState } from "react";
import styles from "../Styles/Bookings Styles/Date.module.css";
import { TbEdit } from "react-icons/tb";

function Status(props) {
  const [isCheckedIn] = useState(props.isCheckedIn);

  const getStatus = (isCheckedIn) => {
    if (isCheckedIn == true) {
      return "Checked In";
    } else {
      return "Not Checked In";
    }
  };

  return (
    <div className={styles.dateContainer}>
      <div className={styles.dateTextBold}>{"Status:  "}</div>
      <div className={styles.dateText}>{getStatus(isCheckedIn)}</div>
      <div className={styles.editButton}>
        <TbEdit color="#864646" />
      </div>
    </div>
  );
}
export default Status;
