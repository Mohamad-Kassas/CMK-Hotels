import React, { useState } from "react";
import styles from "../Styles/ Bookings Styles/Title.module.css";
import { AiFillStar } from "react-icons/ai";

function Title(props) {
  const [size, setSize] = useState(props.size);
  const [rating, setRating] = useState(props.rating);
  const [titleText, setTitleText] = useState(props.titleText);

  const getClassName = (size) => {
    if (size == "small") {
      return styles.titleTextSmall;
    } else if (size == "medium") {
      return styles.titleTextMedium;
    } else if (size == "large") {
      return styles.titleTextLarge;
    }
  };

  return rating === -1 ? (
    <div className={styles.titleContainer}>
      <div className={getClassName(size)}>
        {titleText}
      </div>
    </div>
  ) : (
    <div className={styles.titleContainer}>
      <div className={getClassName(size)}>
        {titleText}
      </div>
      <div>
        {Array(rating).fill(
          <AiFillStar color="#b06464" size="25px" />
        )}
      </div>
    </div>
  );
}
export default Title;
