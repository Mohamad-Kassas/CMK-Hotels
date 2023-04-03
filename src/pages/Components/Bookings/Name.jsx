import React, { useState } from "react";
import styles from "../Styles/Bookings Styles/Date.module.css";

function Name(props) {
  const [name] = useState(props.name);

  return (
    <div className={styles.dateContainer}>
      <div className={styles.dateTextBold}>{"Name:  "}</div>
      <div className={styles.dateText}>{name}</div>
    </div>
  );
}
export default Name;
