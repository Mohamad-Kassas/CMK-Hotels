import React, { useState, useEffect } from "react";
import CostInput from "./CostInput";
import { BsDash } from "react-icons/bs";
import styles from "../Styles/Filter Box Styles/Cost.module.css";

function Cost() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  return (
    <div className={styles.container}>
      <CostInput
        text="Min Price"
        handleOnChange={() => {
          setMinPrice();
          props.setFilterMinPrice();
        }}
      />
      <BsDash
        size={40}
        color={"#d3756b"}
        display={"flex"}
        justifyContent={"center"}
      />
      <CostInput
        text="Max Price"
        handleOnChange={() => {
          setMaxPrice();
          props.setFilterMaxPrice();
        }}
      />
    </div>
  );
}

export default Cost;
