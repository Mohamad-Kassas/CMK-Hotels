import React, { useEffect, useState } from "react"
import NavigationBar from "../Navigation Bar/NavigationBar"
import SearchBar from "../Search Bar/SearchBar"
import FilterBox from "../Filter Box/FilterBox"
import Booking from "../Bookings/Booking"
import { addDays } from "date-fns"

import styles from "../Styles/Customer Page Styles/CustomerPage.module.css"

function CustomerPage({ fetchedRooms, ...props }) {
  const [name, setName] = useState(props.name)

  const [city, setCity] = useState([""])
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(addDays(new Date(), 7))
  const [numberOfPeople, setNumberOfPeople] = useState(0)

  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(1000000)
  const [minRooms, setMinRooms] = useState(0)
  const [maxRooms, setMaxRooms] = useState(1000000)
  const [hotelChains, setHotelChains] = useState([
    "Paradise Hotels",
    "Hyatt Hotel",
    "Elite Hotels",
    "Hotel Grandeur",
    "Capital Hotels",
  ])
  const [rating, setRating] = useState(0)

  const [rooms, setRooms] = useState(fetchedRooms)
  const [filteredRooms, setFilteredRooms] = useState(fetchedRooms)

  useEffect(() => {
    console.log("city: " + city)
    console.log("start date: " + startDate)
    console.log("end date: " + endDate)
    console.log("number of people: " + numberOfPeople)
    console.log("min price: " + minPrice)
    console.log("max price: " + maxPrice)
    console.log("min rooms: " + minRooms)
    console.log("max rooms: " + maxRooms)
    console.log("hotel chains: " + hotelChains)
    console.log("rating: " + rating)
  }, [
    city,
    startDate,
    endDate,
    numberOfPeople,
    minPrice,
    maxPrice,
    minRooms,
    maxRooms,
    hotelChains,
    rating,
    rooms,
  ])

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
          setCity={setCity}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setNumberOfPeople={setNumberOfPeople}
        />
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

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/getRooms")

  const result = await res.json()
  const fetchedRooms = result.results
  console.log(fetchedRooms)
  return {
    props: {
      rooms: fetchedRooms,
    },
  }
}
