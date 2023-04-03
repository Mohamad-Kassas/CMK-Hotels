import Cost from "./Cost";
import NumberOfRooms from "./NumberOfRooms";
import HotelChainSelector from "./HotelChainSelector";
import Rating from "./Rating";
import BookingButton from "../Bookings/BookingButton";
import styles from "../Styles/Filter Box Styles/FilterBox.module.css";

function FilterBox() {
  return (
    <div className={styles.container}>
      <div className={styles.titleText}>{"Filter By"}</div>
      <div className={styles.text}>{"Cost"}</div>
      <Cost />
      <div className={styles.text}>{"Total Number of Rooms in Hotel"}</div>
      <NumberOfRooms />
      <div className={styles.text}>{"Hotel Chain"}</div>
      <HotelChainSelector
        isMulti={true}
        placeHolder="Select Hotel Chain"
        options={[
          { value: "paradise hotels", label: "Paradise Hotels" },
          { value: "hyatt hotel", label: "Hyatt Hotel" },
          { value: "hotel grandaeu", label: "Hotel Grandeur" },
          { value: "elite hotels", label: "Elite Hotels" },
          { value: "capital hotels", label: "Capital Hotels" },
        ]}
      />
      <div className={styles.text}>{"Hotel Rating"}</div>
      <Rating />
      <div className={styles.button}>
        <BookingButton buttonText="Apply Filters" />
      </div>
    </div>
  );
}

export default FilterBox;
