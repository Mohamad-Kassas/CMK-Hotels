import React, { useEffect, useState } from "react"
import NavigationBar from "../Navigation Bar/NavigationBar"
import SearchBar from "../Search Bar/SearchBar"
import FilterBox from "../Filter Box/FilterBox"
import Booking from "../Bookings/Booking"
import { addDays } from "date-fns"

import styles from "../Styles/Customer Page Styles/CustomerPage.module.css"

function CustomerPage(props) {
  const [name, setName] = useState(props.name)
  const [customerID, setCustomerID] = useState(props.customerID)

  const [city, setCity] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(addDays(new Date(), 7))
  const [numberOfPeople, setNumberOfPeople] = useState(0)

  const [formattedStartDate, setFormattedStartDate] = useState("")
  const [formattedEndDate, setFormattedEndDate] = useState("")

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

  const [rooms, setRooms] = useState({})
  const [filteredRooms, setFilteredRooms] = useState([])

  useEffect(() => {
    const getData = async (url) => {
      const res = await fetch(url)
      const results = await res.json()

      setRooms(results.result)
    }

    getData(
      `${process.env.NEXT_PUBLIC_API_URL}/api//SelectData/SelectHotelRoomsToBook`
    )
  }, [])

  const formatDate = (dateString) => {
    const [datePart] = dateString.split("T")
    return datePart
  }

  const formatDate2 = (dateString) => {
    const [datePart] = dateString.split(",")
    return datePart
  }

  useEffect(() => {
    setFormattedStartDate(formatDate2(startDate.toLocaleString()))
    setFormattedEndDate(formatDate2(endDate.toLocaleString()))
    console.log("HEHEHEHEHEHEHEHEHEHHEHEHEH")
  }, [startDate, endDate])

  useEffect(() => {
    // setFilteredRooms(
    //   filteredRooms.map((room) => {
    //     if (
    //       room.rating >= rating &&
    //       //rooms[i].nameOfChain == employeeHotelChain &&
    //       room.pricePerNight >= minPrice &&
    //       room.pricePerNight <= maxPrice &&
    //       room.numberOfRooms >= minRooms &&
    //       room.numberOfRooms <= maxRooms &&
    //       room.capacity >= numberOfPeople
    //     ) {
    //       return room
    //     }
    //   })
    // )

    let parsedInputtedCityName = city.split(",")[0]
    console.log(parsedInputtedCityName)

    setFilteredRooms(
      (() => {
        const elements = []
        for (let i = 0; i < rooms.length; i++) {
          let roomAddress = rooms[i].addressOfHotel.split(" ")
          roomAddress.push("")

          if (
            roomAddress.includes(parsedInputtedCityName) &&
            rooms[i].rating >= rating &&
            hotelChains.includes(rooms[i].nameOfChain) &&
            rooms[i].pricePerNight >= minPrice &&
            rooms[i].pricePerNight <= maxPrice &&
            rooms[i].numberOfRooms >= minRooms &&
            rooms[i].numberOfRooms <= maxRooms &&
            rooms[i].capacity >= numberOfPeople
          ) {
            elements.push(rooms[i])
          }
        }
        console.log(elements)
        return elements
      })()
    )
  }, [
    city,
    startDate,
    endDate,
    numberOfPeople,
    minPrice,
    maxPrice,
    minRooms,
    maxRooms,
    rating,
    hotelChains,
    rooms,
  ])

  const calculateDateDifferenceString = (dateString1, dateString2) => {
    const date1 = new Date(dateString1)
    const date2 = new Date(dateString2)

    const timeDifference = date2 - date1

    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

    return daysDifference
  }

  const calculateDateDifferenceDate = (date1, date2) => {
    const timeDifference = date2 - date1

    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

    return daysDifference
  }

  const getLastCharacterAsInt = (str) => {
    const lastChar = str.slice(-1)
    const lastCharAsInt = parseInt(lastChar, 10)
    return lastCharAsInt
  }

  const handleBooking = async (
    hotelRoomID,
    customerID,
    dateCheckIn,
    dateCheckOut
  ) => {
    const bookingID = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/SelectCount/SelectBookingCount`
    )
      .then((res) => res.json())
      .then((data) => {
        return data.newBookingID
      })

    const insertBooking = async (url) => {
      const res = await fetch(url)
      const results = await res.json()
      console.log(results)
    }

    console.log(bookingID)
    console.log(customerID)
    console.log(hotelRoomID)

    const dateCheckInString = `${dateCheckIn.getFullYear()}-${(
      dateCheckIn.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${dateCheckIn.getDate().toString().padStart(2, "0")}`
    const dateCheckOutString = `${dateCheckOut.getFullYear()}-${(
      dateCheckOut.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${dateCheckOut.getDate().toString().padStart(2, "0")}`

    console.log(dateCheckInString)
    console.log(dateCheckOutString)

    insertBooking(
      `http://localhost:3000/api/Insert/InsertBooking?bookingID=${bookingID}&customerID=${customerID}&hotelRoomID=${hotelRoomID}&dateCheckIn=${dateCheckInString}&dateCheckOut=${dateCheckOutString}&totalPrice=300.00&currentStatus=Confirmed`
    ).then(alert("Booking successful"))
  }

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
          {filteredRooms?.map((currentRoom) => {
            return (
              <div>
                <div className={styles.singleBookingContainer}>
                  <Booking
                    key={currentRoom.hotelRoomID}
                    isCustomer={true}
                    roomNumber={getLastCharacterAsInt(currentRoom.hotelRoomID)}
                    titleText={currentRoom.nameOfChain}
                    rating={Math.ceil(parseInt(currentRoom.rating))}
                    city={currentRoom.addressOfHotel.split(" ")[3]}
                    numberOfNights={calculateDateDifferenceDate(
                      startDate,
                      endDate
                    )}
                    price={currentRoom.pricePerNight}
                    checkInDate={formattedStartDate}
                    checkOutDate={formattedEndDate}
                    amenities={[
                      {
                        id: 1,
                        text: currentRoom.firstAmenity,
                      },
                      {
                        id: 2,
                        text: currentRoom.secondAmenity,
                      },
                      {
                        id: 3,
                        text: currentRoom.thirdAmenity,
                      },
                    ]}
                    onClickFunction={() => {
                      handleBooking(
                        currentRoom.hotelRoomID,
                        customerID,
                        startDate,
                        endDate
                      )
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CustomerPage
