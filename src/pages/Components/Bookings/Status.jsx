import React, { useState } from "react";
import styles from "../Styles/Bookings Styles/Date.module.css";
import { TbEdit } from "react-icons/tb";

function Status(props) {
  const [status] = useState(props.status);
  const [isEditable] = useState(props.isEditable);

  return (
    <div className={styles.dateContainer}>
      <div className={styles.dateTextBold}>{"Status:  "}</div>
      <div className={styles.dateText}>{status}</div>
      {isEditable ? (
        <div className={styles.editButton}>
          <TbEdit color="#864646" />
        </div>
      ) : null}
    </div>
  );
}
export default Status;
