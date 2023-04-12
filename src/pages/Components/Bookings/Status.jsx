import React, { useState } from "react";
import styles from "../Styles/Bookings Styles/Date.module.css";

function Status(props) {
  const [status] = useState(props.status);

  return (
    <div className={styles.dateContainer}>
      <div className={styles.dateTextBold}>{"Status:  "}</div>
      <div className={styles.dateText}>{status}</div>
    </div>
  );
}
export default Status;
