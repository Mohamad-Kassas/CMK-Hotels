import React, { useState } from "react";
import styles from "../Styles/Search Bar Styles/NumberOfPeopleInput.module.css";

function NumberOfPeopleInput(props) {
  const [rightOfSearchBar] = useState(props.rightOfSearchBar);
  const [allOfSearchBar] = useState(props.allOfSearchBar);

  const getStyle = () => {
    if (rightOfSearchBar) {
      return styles.rightOfSearchBar;
    } else if (allOfSearchBar) {
      return styles.allOfSearchBar;
    }
  };

  return (
    <>
      <input
        className={getStyle()}
        type="number"
        min="1"
        placeholder={allOfSearchBar ? "Room Number" : "Number of People"}
        onChange={(e) => {
          props.handleOnChange(e.target.value);
        }}
        id="numberOfPeople"
        name="numberOfPeople"
        required={true}
        pattern={"/^(?!(?:0|0.0|0.00)$)[+]?d+(.d|.d[0-9])?$/ "}
        autoComplete="off"
      />
    </>
  );
}

export default NumberOfPeopleInput;
