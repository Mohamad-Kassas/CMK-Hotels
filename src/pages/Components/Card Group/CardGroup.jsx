import React from "react";
import styles from "../Styles/Card Group Styles/CardGroup.module.css";
import CardGroupContent from "./CardGroupContent";

function CardGroup(){
  return (
    <div className={styles.cardGroupHolder}>
      <div className={styles.cardGroup}>
        <div className={styles.bigCard}>
          <CardGroupContent titleText="Paradise Hotels" />
        </div>
        <div className={styles.bigCard}>
          <CardGroupContent titleText="Hyatt Hotel" />
        </div>
        <div className={styles.bigCard}>
          <CardGroupContent titleText="Hotel Grandeur" />
        </div>
        <div className={styles.bigCard}>
          <CardGroupContent titleText="Elite Hotels" />
        </div>
        <div className={styles.bigCard}>
          <CardGroupContent titleText="Capital Hotels" />
        </div>
      </div>
    </div>
  );
}

export default CardGroup;
