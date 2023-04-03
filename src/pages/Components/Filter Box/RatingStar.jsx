import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import styles from "../Styles/Filter Box Styles/Rating.module.css";

function RatingStar(props) {
  const [isFilled, setIsFilled] = useState(props.isFilled);

  useEffect(() => {
    setIsFilled(props.isFilled);
  }, [props.isFilled]);

  return (
    <AiFillStar
      className={isFilled ? styles.starFilled : styles.starUnfilled}
      size="30px"
      onClick={() => {
        props.onClickFunction();
      }}
    />
  );
}

export default RatingStar;
