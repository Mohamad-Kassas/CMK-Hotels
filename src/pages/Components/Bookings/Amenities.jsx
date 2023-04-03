import styles from "../Styles/Bookings Styles/Amenities.module.css";

function Amenities(props) {
  const amenities = props.list;

  const listItems = amenities.map((item) => (
    <div className={styles.listText} key={item.id}>
      {item.text + (item.id != amenities.length ? " | " : " ")}
    </div>
  ));

  return (
    <div className={styles.amenitiesContainer}>
      <div className={styles.textBold}>{"Amenities:  "}</div>
      <div className={styles.listContainer}>{listItems}</div>
    </div>
  );
}
export default Amenities;
