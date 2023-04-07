import React, { useState, useEffect } from "react";
import CostInput from "./CostInput";
import { BsDash } from "react-icons/bs";
import styles from "../Styles/Filter Box Styles/Cost.module.css";

function NumberOfRooms() {
  const [minRooms, setMinRooms] = useState(0);
  const [maxRooms, setMaxRooms] = useState(0);

  useEffect(() => {
    console.log(minRooms);
    console.log(maxRooms);
  }, [minRooms, maxRooms]);

  return (
    <div className={styles.container}>
      <CostInput
        text="Min Rooms "
        handleOnChange={() => {
          setMinRooms();
          props.setFilterMinRooms();
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
        handleOnChange={() => {
          setMaxRooms();
          props.setFilterMaxRooms();
        }}
      />
    </div>
  );
}

export default NumberOfRooms;
