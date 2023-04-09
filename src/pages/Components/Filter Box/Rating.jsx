import RatingStar from "./RatingStar";
import styles from "../Styles/Filter Box Styles/Rating.module.css";
import { useState } from "react";

function Rating() {
  const [rating, setRating] = useState(0);
  const [star1Filled, setStar1Filled] = useState(false);
  const [star2Filled, setStar2Filled] = useState(false);
  const [star3Filled, setStar3Filled] = useState(false);
  const [star4Filled, setStar4Filled] = useState(false);
  const [star5Filled, setStar5Filled] = useState(false);

  const handleStar1Click = () => {
    setStar1Filled(true);
    setStar2Filled(false);
    setStar3Filled(false);
    setStar4Filled(false);
    setStar5Filled(false);
    setRating(1);
  };

  const handleStar2Click = () => {
    setStar1Filled(true);
    setStar2Filled(true);
    setStar3Filled(false);
    setStar4Filled(false);
    setStar5Filled(false);
    setRating(2);
  };

  const handleStar3Click = () => {
    setStar1Filled(true);
    setStar2Filled(true);
    setStar3Filled(true);
    setStar4Filled(false);
    setStar5Filled(false);
    setRating(3);
  };

  const handleStar4Click = () => {
    setStar1Filled(true);
    setStar2Filled(true);
    setStar3Filled(true);
    setStar4Filled(true);
    setStar5Filled(false);
    setRating(4);
  };

  const handleStar5Click = () => {
    setStar1Filled(true);
    setStar2Filled(true);
    setStar3Filled(true);
    setStar4Filled(true);
    setStar5Filled(true);
    setRating(5);
  };

  return (
    <div className={styles.ratingContainer}>
      <RatingStar isFilled={star1Filled} onClickFunction={handleStar1Click} />
      <RatingStar isFilled={star2Filled} onClickFunction={handleStar2Click} />
      <RatingStar isFilled={star3Filled} onClickFunction={handleStar3Click} />
      <RatingStar isFilled={star4Filled} onClickFunction={handleStar4Click} />
      <RatingStar isFilled={star5Filled} onClickFunction={handleStar5Click} />
      <div className={styles.ratingText}>{rating}</div>
    </div>
  );
}

export default Rating;
