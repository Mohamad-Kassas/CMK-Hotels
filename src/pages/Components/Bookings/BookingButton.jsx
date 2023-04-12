import React, { useState } from "react"
import styles from "../Styles/Bookings Styles/BookingButton.module.css"

function BookingButton(props) {
  const [styling] = useState(styles)
  const [buttonText] = useState(props.buttonText)

  return (
    <button className={styling.bookingButton} onClick={props.onClickFunction}>
      {buttonText}
    </button>
  )
}

export default BookingButton
