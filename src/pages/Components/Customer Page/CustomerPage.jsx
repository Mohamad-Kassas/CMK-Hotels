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

    try {
      rooms.forEach((room) => {
        // We need to check the following:
        // 1. City inputted is equal to the city of the room
        // 2. The room is available for the dates inputted
        // 3. The room is available for the number of people inputted
        // Note: We need to add the number of people and extend amount to check true capacity
        // 4. The room price is within the price range inputted
        // 5. The number of rooms in the hotel location is within the range inputted
        // 6. The hotel chain is within the hotel chains inputted
        // 7. The rating of the hotel is within the rating inputted

        roomStatus = true

        // Checking city
        if (city.length > 0) {
          cityName = city.split(",")[0]
          if (!room.addressOfHotel.contains(cityName)) {
            roomStatus = false
          }
        }

        // Checking dates
        // TODO: Check if room is available for dates inputted

        // Checking number of people
        if (room.extendable === 1) {
          if (room.capacity + room.extendAmount < numberOfPeople) {
            roomStatus = false
          }
        } else {
          if (room.capacity < numberOfPeople) {
            roomStatus = false
          }
        }

        // Checking price
        if (room.pricePerNight < minPrice || room.pricePerNight > maxPrice) {
          roomStatus = false
        }

        // Checking number of rooms
        if (room.numberOfRooms < minRooms || room.numberOfRooms > maxRooms) {
          roomStatus = false
        }

        // Checking hotel chains
        if (!hotelChains.includes(room.nameOfChain)) {
          roomStatus = false
        }

        // Checking rating
        if (room.rating < rating) {
          roomStatus = false
        }

        if (roomStatus) {
          filteredRooms.push(room)
        }
      })
    } catch (error) {
      console.log(error)
    }
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
          <FilterBox
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            setMinRooms={setMinRooms}
            setMaxRooms={setMaxRooms}
            setHotelChains={setHotelChains}
            setRating={setRating}
          />
        </div>
        <div className={styles.bookingsContainer}>
          {filteredRooms.map((room) => (
            <Booking
              isCustomer={true}
              titleText={room.nameOfChain}
              rating={room.rating}
              city={city.split(",")[0]}
              numberOfNights={endDate - startDate}
              price={room.pricePerNight}
              checkInDate={startDate}
              checkOutDate={endDate}
              amenities={[
                room.firstAmenity,
                room.secondAmenity,
                room.thirdAmenity,
              ]}
              isCheckedin={false}
            />
          ))}
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
