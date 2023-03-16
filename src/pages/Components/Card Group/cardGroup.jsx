import React, { Component } from "react";
import styles from "../Styles/Card Group Styles/cardGroup.module.css";

class cardGroup extends Component {
  render() {
    return (
      <div className={styles.cardGroupHolder}>
        <div className={styles.cardGroup}>
          <div className={styles.bigCard}></div>
          <div className={styles.bigCard}></div>
          <div className={styles.bigCard}></div>
          <div className={styles.bigCard}></div>
          <div className={styles.bigCard}></div>
        </div>
      </div>
    );
  }
}

export default cardGroup;
