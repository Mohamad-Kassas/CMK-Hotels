import React, { useState, useEffect } from "react";
import CostInput from "./CostInput";
import { BsDash } from "react-icons/bs";
import styles from "../Styles/Filter Box Styles/Cost.module.css";

function NumberOfRooms(props) {
  const [minRooms, setMinRooms] = useState(0);
  const [maxRooms, setMaxRooms] = useState(0);

  return (
    <div className={styles.container}>
      <CostInput
        text="Min Rooms "
        handleOnChange={(e) => {
          setMinRooms(e);
          props.setFilterMinRooms(e);
        }}
      />
      <BsDash
        size={40}
        color={"#d3756b"}
        display={"flex"}
        justifyContent={"center"}
      />
      <CostInput
        text="Max Rooms "
        handleOnChange={(e) => {
          setMaxRooms(e);
          props.setFilterMaxRooms(e);
        }}
      />
    </div>
  );
}

export default NumberOfRooms;
