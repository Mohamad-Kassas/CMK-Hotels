import React, { useState } from "react";
import styles from "../../Styles/Navigation Bar Styles/Dropdown Styles/UserProfile.module.css";
import { BsPersonCircle } from "react-icons/bs";

function UserProfile(props) {
  const [name, setName] = useState(props.name);

  return (
    <div className={styles.userProfileContainer} onClick={props.onClickFunction}>
      <BsPersonCircle className={styles.userProfileIcon}/>
      <div className={styles.userProfileTextContainer}>
        <span className={styles.welcomeSpan}>welcome</span>
        <span className={styles.nameSpan}>{name}</span>
      </div>
    </div>
  );
}

export default UserProfile;
