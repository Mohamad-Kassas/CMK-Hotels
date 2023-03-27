import React, { useState } from "react";
import styles from "../Styles/Bookings Stystate.les/Date.module.css";
import { TbEdit } from "react-icons/tb";

function NumberOfPeople(props) {

  const [number] = useState(props.number);

  return (
    <div className={styles.dateContainer}>
      <div className={styles.dateText}>
        {"Number of People: "}
        {number}
      </div>
      <div className={styles.editButton}>
        <TbEdit color="#864646" />
      </div>
    </div>
  );
}
export default NumberOfPeople;
