import React, { useState, useEffect } from "react"
import styles from "../Styles/Popup/MakeBookingPopup.module.css"
import { AiOutlineClose } from "react-icons/ai"
import { RiErrorWarningFill } from "react-icons/ri"
import MakeBookingPopupInput from "./MakeBookingPopupInput"

function MakeBookingPopup(props) {
  const [message, setMessage] = useState("")

  const [renderError, setRenderError] = useState(false)

  const [emailInput, setEmailInput] = useState("")

  const [runFetchUseEffect, setRunFetchUseEffect] = useState(false)

  const [customerID, setCustomerID] = useState("")

  const [runFetchBookingID, setRunFetchBookingID] = useState(false)

  const [bookingID, setBookingID] = useState("")

  const [hotelRoomID, setHotelRoomID] = useState(props.hotelRoomID)

  const [dateCheckIn, setDateCheckIn] = useState(props.startDate)
  const [dateCheckOut, setDateCheckOut] = useState(props.endDate)

  const [runInsertBooking, setRunInsertBooking] = useState(false)

  const handleMainButtonClick = () => {
    setRenderError(false)
    // Default values
    if (emailInput === "") {
      setRenderError(true)
      setMessage("Error: Please enter an email address.")
    } else {
      // authentication database code, check that email and password are in db and the user checks out
      setRunFetchUseEffect(true)
    }
  }

  useEffect(() => {
    if (runFetchUseEffect) {
      const getData = async (url) => {
        const res = await fetch(url)
        const results = await res.json()
        setCustomerID(results.result[0].customerID)

        console.log("Customer ID: " + customerID)
      }

      getData(
        "http://localhost:3000/api/SelectData/SelectCustomerIDFromUsername?userName=" +
          emailInput
      ).then(alert("Booking Successful!"))

      setRunFetchBookingID(true)

      setRunFetchUseEffect(false)
    }
  }, [runFetchUseEffect])

  useEffect(() => {
    if (runFetchBookingID) {
      const getData = async (url) => {
        const res = await fetch(url)
        const results = await res.json()
        console.log(results.newBookingID)

        setBookingID(results.newBookingID)
      }

      getData("http://localhost:3000/api/SelectCount/SelectBookingCount")

      setRunInsertBooking(true)

      setRunFetchBookingID(false)
    }
  }, [runFetchBookingID])

  useEffect(() => {
    if (runInsertBooking && !customerID == "" && !bookingID == "") {
      const getData = async (url) => {
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
        .padStart(2, "0")}-${dateCheckOut
        .getDate()
        .toString()
        .padStart(2, "0")}`

      console.log(dateCheckInString)
      console.log(dateCheckOutString)

      getData(
        `http://localhost:3000/api/Insert/InsertBooking?bookingID=${bookingID}&customerID=${customerID}&hotelRoomID=${hotelRoomID}&dateCheckIn=${dateCheckInString}&dateCheckOut=${dateCheckOutString}&totalPrice=300.00&currentStatus=Confirmed`
      )

      setCustomerID("")
      setBookingID("")

      setRunInsertBooking(false)
    } else {
      setMessage("Error: Could not make booking. Try again.")
    }
  }, [
    runInsertBooking,
    bookingID,
    customerID,
    hotelRoomID,
    dateCheckIn,
    dateCheckOut,
  ])

  const handleExitButtonClick = () => {
    props.closePopup()
  }

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupWindow}>
        <div
          className={styles.closeButtonDiv}
          onClick={() => handleExitButtonClick()}
        >
          <AiOutlineClose className={styles.closeButton} />
        </div>
        <h1 className={styles.header}>Book Room</h1>

        <MakeBookingPopupInput
          inputType="email"
          onChangeFunction={setEmailInput}
        />

        {renderError && (
          <div className={styles.errorMessagesDiv} id="errorMessagesDivBooking">
            <RiErrorWarningFill className={styles.errorIcon} />
            <p className={styles.errorMessages} id="errorMessagesBooking">
              {" "}
              {message}
            </p>
          </div>
        )}

        <hr></hr>
        <button
          className={styles.mainButton}
          onClick={() => handleMainButtonClick()}
        >
          Make Booking
        </button>
      </div>
    </div>
  )
}

export default MakeBookingPopup
