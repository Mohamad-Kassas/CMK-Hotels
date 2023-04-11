import React, { useState, useEffect } from "react";
import NavigationBar from "../Navigation Bar/NavigationBar";
import Title from "../Bookings/Title";
import styles from "../Styles/Customer Page Styles/CustomerViewBookings.module.css";
import Booking from "../Bookings/Booking";

function CustomerViewBookings(props) {
  const [customerName, setCustomerName] = useState(props.customerName);
  const [customerID, setCustomerID] = useState(props.customerID);
  const [bookings, setBookings] = useState({});

  useEffect(() => {
    const getData = async (url) => {
      const res = await fetch(url);
      const results = await res.json();
      setBookings(results.result);
    };

    getData(
      "http://localhost:3000/api/SelectData/SelectCustomerBookings?customerID=" +
        customerID
    );
  }, []);

  useEffect(() => {
    console.log(bookings);
  }, [bookings]);

  const formatDate = (dateString) => {
    const [datePart] = dateString.split("T");
    return datePart;
  };

  const calculateDateDifference = (dateString1, dateString2) => {
    const date1 = new Date(dateString1);
    const date2 = new Date(dateString2);

    const timeDifference = date2 - date1;

    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
  };

  const getLastCharacterAsInt = (str) => {
    const lastChar = str.slice(-1);
    const lastCharAsInt = parseInt(lastChar, 10);
    return lastCharAsInt;
  };

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
        {(() => {
          const elements = [];
          for (let i = 0; i < bookings.length; i++) {
            elements.push(
              <Booking
                key={bookings[i].bookingID}
                isCustomerViewBookings={true}
                name={customerName}
                titleText={bookings[i].nameOfChain}
                rating={bookings[i].rating}
                city={bookings[i].city}
                numberOfNights={calculateDateDifference(
                  bookings[i].dateCheckIn,
                  bookings[i].dateCheckOut
                )}
                price={bookings[i].totalPrice}
                checkInDate={formatDate(bookings[i].dateCheckIn)}
                checkOutDate={formatDate(bookings[i].dateCheckOut)}
                roomNumber={getLastCharacterAsInt(bookings[i].hotelRoomID)}
                status={bookings[i].currentStatus}
                amenities={[
                  { id: 1, text: bookings[i].firstAmenity },
                  { id: 2, text: bookings[i].secondAmenity },
                  { id: 3, text: bookings[i].thirdAmenity },
                ]}
              />
            );
          }

          return elements;
        })()}
      </div>
    </div>
  );
}

export default CustomerViewBookings;
