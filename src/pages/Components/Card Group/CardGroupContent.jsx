import React, { Component } from "react";
import styles from "../Styles/Card Group Styles/CardGroupContent.module.css";
import Title from "../Bookings/Title";

class CardGroupContent extends Component {
  state = {
    titleText: this.props.titleText,
  };

  getImageClassName(titleText) {
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

  render() {
    return (
      <div className={styles.titleImageContainer}>
        <Title
          size="small"
          rating={-1}
          titleText={this.state.titleText}
        ></Title>
        <div className={this.getImageClassName(this.state.titleText)}></div>
      </div>
    );
  }
}

export default CardGroupContent;
