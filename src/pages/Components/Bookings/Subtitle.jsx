import React, { useState } from "react";
import styles from "../Styles/ Bookings Styles/Subtitle.module.css";
import { RxDotFilled } from "react-icons/rx";

function Subtitle(props) {
  state = {
    city: props.city,
    numberOfNights: props.numberOfNights,
    price: props.price,
  };

  const [city] = useState(props.city);
  const [numberOfNights] = useState(props.numberOfNights);
  const [price] = useState(props.price);

  return (
    <div className={styles.subtitleContainer}>
      <div className={styles.subtitleText}>{city} </div>

      <RxDotFilled />
      <div className={styles.subtitleText}>
        {numberOfNights == 1
          ? numberOfNights + "  Night"
          : numberOfNights + "  Nights"}
      </div>
      <RxDotFilled />
      <div className={styles.subtitleText}>$ {price}</div>
    </div>
  );
}
export default Subtitle;
