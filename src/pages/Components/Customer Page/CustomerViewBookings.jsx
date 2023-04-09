import React, { useState } from "react";
import NavigationBar from "../Navigation Bar/NavigationBar";
import Title from "../Bookings/Title";
import styles from "../Styles/Customer Page Styles/CustomerViewBookings.module.css";
import Booking from "../Bookings/Booking";

function CustomerViewBookings(props) {
  const [customerName, setCustomerName] = useState(props.customerName);
  const [customerID, setCustomerID] = useState(props.customerID);

  return (
    <div className={styles.pageContainer}>
      <NavigationBar
        loggedIn={true}
        name={customerName}
        customer={true}
        employee={false}
      ></NavigationBar>
      <div className={styles.titleContainer}>
        <Title titleText="Your Bookings" size={"large"} rating={-1} />
      </div>
      <div className={styles.resultsContainer}>
        <Booking
          isCustomerViewBookings={true}
          name="John Doe"
          numberOfPeople={3}
          isCheckedIn={true}
          titleText="Room #192"
          rating={4}
          city="Ottawa"
          numberOfNights={2}
          price={350}
          checkInDate="07-09-2023"
          checkOutDate="09-09-2023"
          roomNumber={1}
          amenities={[
            { id: 1, text: "Wifi" },
            { id: 2, text: "Pool" },
            { id: 3, text: "Oven" },
          ]}
        />
        <Booking
          isCustomerViewBookings={true}
          name="John Doe"
          numberOfPeople={3}
          isCheckedIn={true}
          titleText="Room #245"
          rating={3}
          city="Ottawa"
          numberOfNights={2}
          price={350}
          checkInDate="07-09-2023"
          checkOutDate="09-09-2023"
          roomNumber={2}
          amenities={[
            { id: 4, text: "TV" },
            { id: 5, text: "Refrigerator" },
            { id: 6, text: "Patio" },
          ]}
        />
        <Booking
          isCustomerViewBookings={true}
          name="John Doe"
          numberOfPeople={3}
          isCheckedIn={true}
          titleText="Room #1685"
          rating={5}
          city="Ottawa"
          numberOfNights={2}
          price={350}
          checkInDate="07-09-2023"
          checkOutDate="09-09-2023"
          roomNumber={3}
          amenities={[
            { id: 7, text: "Hammock" },
            { id: 9, text: "Stove" },
            { id: 10, text: "Jacuzzi" },
          ]}
        />
        <Booking
          isCustomerViewBookings={true}
          name="John Doe"
          numberOfPeople={3}
          isCheckedIn={true}
          titleText="Room #2365"
          rating={2}
          city="Ottawa"
          numberOfNights={2}
          price={350}
          checkInDate="07-09-2023"
          checkOutDate="09-09-2023"
          roomNumber={4}
          amenities={[
            { id: 4, text: "TV" },
            { id: 5, text: "Refrigerator" },
            { id: 9, text: "Stove" },
          ]}
        />
      </div>
    </div>
  );
}

export default CustomerViewBookings;
