import React, { useState } from "react";
import styles from "../Styles/Bookings Styles/Date.module.css";

function NumberOfPeople(props) {
  const [number] = useState(props.number);

  return (
    <div className={styles.dateContainer}>
      <div className={styles.dateTextBold}>{"Number of People:  "}</div>
      <div className={styles.dateText}>{number}</div>
    </div>
  );
}
export default NumberOfPeople;
