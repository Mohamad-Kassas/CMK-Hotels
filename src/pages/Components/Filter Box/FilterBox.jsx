import React, { useState } from "react";
import Cost from "./Cost";
import NumberOfRooms from "./NumberOfRooms";
import HotelChainSelector from "./HotelChainSelector";
import Rating from "./Rating";
import BookingButton from "../Bookings/BookingButton";
import styles from "../Styles/Filter Box Styles/FilterBox.module.css";

function FilterBox() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [minRooms, setMinRooms] = useState(0);
  const [maxRooms, setMaxRooms] = useState(1000000);
  const [hotelChains, setHotelChains] = useState([
    "Paradise Hotels",
    "Hyatt Hotel",
    "Elite Hotels",
    "Hotel Grandeur",
    "Capital Hotels",
  ]);
  const [rating, setRating] = useState(0);

  //const applyFilters = () => {

  return (
    <div className={styles.container}>
      <div className={styles.titleText}>{"Filter By"}</div>
      <div className={styles.text}>{"Cost"}</div>
      <Cost setFilterMinPrice={setMinPrice} setFilterMaxPrice={setMaxPrice} />
      <div className={styles.text}>{"Total Number of Rooms"}</div>
      <NumberOfRooms
        setFilterMinRooms={setMinRooms}
        setFilterMaxRooms={setMaxRooms}
      />
      {/* <div className={styles.text}>{"Hotel Chain"}</div> */}
      <HotelChainSelector
        isMulti={true}
        setFilterHotelChains={setHotelChains}
        placeHolder="Select Hotel Chain"
        options={[
          { value: "paradise hotels", label: "Paradise Hotels" },
          { value: "hyatt hotel", label: "Hyatt Hotel" },
          { value: "hotel grandaeu", label: "Hotel Grandeur" },
          { value: "elite hotels", label: "Elite Hotels" },
          { value: "capital hotels", label: "Capital Hotels" },
        ]}
      />
      {/* <div className={styles.text}>{"Hotel Rating"}</div> */}
      <Rating setFilterRating={setRating} />
      <div className={styles.button}>
        <BookingButton buttonText="Apply Filters" />
      </div>
    </div>
  );
}

export default FilterBox;
