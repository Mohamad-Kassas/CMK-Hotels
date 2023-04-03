import React, { useState } from "react"
import NavigationBar from "../Navigation Bar/NavigationBar"
import SearchBar from "../Search Bar/SearchBar"
import FilterBox from "../Filter Box/FilterBox"
import Booking from "../Bookings/Booking"

import styles from "../Styles/Customer Page Styles/CustomerPage.module.css"

function CustomerPage(props) {
  const [name, setName] = useState(props.name)

  return (
    <>
      <NavigationBar
        loggedIn={true}
        name={name}
        customer={true}
        employee={false}
      />
      <div className={styles.searchBarContainer}>
        <SearchBar bookRoomsSearchBar={true} />
      </div>
      <div className={styles.filterBookingsContainer}>
        <div className={styles.filterContainer}>
          <FilterBox />
        </div>
        <div className={styles.bookingsContainer}>
          <div className={styles.singleBookingContainer}>
            <Booking
              isCustomer={true}
              titleText="Test Room"
              rating={5}
              city="Ottawa"
              numberOfNights={5}
              price={300}
              checkInDate="11/11/2011"
              checkOutDate="11/12/2011"
              roomNumber={1}
              amenities={["Bed", "TV", "Wifi"]}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerPage
