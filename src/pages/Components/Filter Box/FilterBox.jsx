import React, { useEffect, useState } from "react"
import Cost from "./Cost"
import NumberOfRooms from "./NumberOfRooms"
import HotelChainSelector from "./HotelChainSelector"
import Rating from "./Rating"
import BookingButton from "../Bookings/BookingButton"
import styles from "../Styles/Filter Box Styles/FilterBox.module.css"
import { parse } from "date-fns"

function FilterBox(props) {
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

  useEffect(() => {
    props.setMinPrice(minPrice)
    props.setMaxPrice(maxPrice)
    props.setMinRooms(minRooms)
    props.setMaxRooms(maxRooms)
    props.setHotelChains(hotelChains)
    props.setRating(rating)
  }, [minPrice, maxPrice, minRooms, maxRooms, hotelChains, rating])

  const parseHotelChains = (rawHotelChains) => {
    let parsedHotelChains = []
    if (rawHotelChains.length > 0) {
      for (let i = 0; i < rawHotelChains.length; i++) {
        parsedHotelChains.push(rawHotelChains[i].label)
      }
    } else {
      parsedHotelChains = [
        "Paradise Hotels",
        "Hyatt Hotel",
        "Elite Hotels",
        "Hotel Grandeur",
        "Capital Hotels",
      ]
    }
    setHotelChains(parsedHotelChains)
  }

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
        setFilterHotelChains={parseHotelChains}
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
  )
}

export default FilterBox
