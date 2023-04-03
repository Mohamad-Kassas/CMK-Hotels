import React, { useState } from "react"
import NavigationBar from "../Navigation Bar/NavigationBar"
import SearchBar from "../Search Bar/SearchBar"

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
        <SearchBar
          bookRoomsSearchBar={true}
          searchOnClick={handleSearchButtonClicked}
        />
      </div>
      <div className={styles.filterBookingsContainer}>
        <div className={styles.filterContainer}></div>
        <div className={styles.bookingsContainer}></div>
      </div>
    </>
  )
}

export default CustomerPage
