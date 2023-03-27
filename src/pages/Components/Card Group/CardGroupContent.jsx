import React, { useState } from "react";
import styles from "../Styles/Card Group Styles/CardGroupContent.module.css";
import Title from "../Bookings/Title";

function CardGroupContent(props){

  const [titleText, setTitleText] = useState(props.titleText);

  const getImageClassName = (titleText) => {
    switch (titleText) {
      case "Paradise Hotels":
        return styles.paradiseHotels;
      case "Hyatt Hotel":
        return styles.hyattHotels;
      case "Hotel Grandeur":
        return styles.hotelGrandeur;
      case "Elite Hotels":
        return styles.eliteHotels;
      case "Capital Hotels":
        return styles.capitalHotels;
    }
  }

  return (
    <div className={styles.titleImageContainer}>
      <Title
        size="small"
        rating={-1}
        titleText={titleText}
      ></Title>
      <div className={getImageClassName(titleText)}></div>
    </div>
  );
}

export default CardGroupContent;
