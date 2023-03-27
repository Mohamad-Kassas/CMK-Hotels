import React, { useState } from "react";
import styles from "../Styles/Bookings Styles/Date.module.css";
import { TbEdit } from "react-icons/tb";

function Date(props) {

  const [isCheckIn] = useState(props.isCheckIn);
  const [isEditable] = useState(props.isEditable);
  const [dateText] = useState(props.dateText);

  const getCheckInOrCheckOut = (isCheckIn) => {
    if (isCheckIn == true) {
      return "Check In:  ";
    } else {
      return "Check Out:  ";
    }
  }

  if (isEditable == false) {
    return (
      <div className={styles.dateText}>
        {getCheckInOrCheckOut(isCheckIn)}
        {dateText}
      </div>
    );
  } else {
    return (
      <div className={styles.dateContainer}>
        <div className={styles.dateText}>
          {getCheckInOrCheckOut(isCheckIn)}
          {dateText}
        </div>
        <div className={styles.editButton}>
          <TbEdit color="#864646" />
        </div>
      </div>
    );
  }
}
export default Date;
