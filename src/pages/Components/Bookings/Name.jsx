import React, { useState } from "react";
import styles from "../Styles/ Bookings Styles/Date.module.css";

function Name(props) {

  const [name] = useState(props.name);

  return (
    <div className={styles.dateText}>
      {"Name: "}
      {name}
    </div>
  );
}
export default Name;
