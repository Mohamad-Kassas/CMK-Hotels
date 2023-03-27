import React, { useState } from "react";
import Date from "./date";
import BookingButton from "./BookingButton";
import RoomPicture from "./RoomPicture";
import Subtitle from "./subtitle";
import Title from "./title";
import styles from "../Styles/ Bookings Styles/Booking.module.css";

function Booking(props) {
  const [isCustomer, setIsCustomer] = useState(props.isCustomer);
  const [isEmployeeEmptyRoom, setIsEmployeeEmptyRoom] = useState(
    props.isEmployeeEmptyRoom
  );
  const [isEmployeeBookedRoom, setIsEmployeeBookedRoom] = useState(
    props.isEmployeeBookedRoom
  );
  const [titleText, setTitleText] = useState(props.titleText);
  const [rating, setRating] = useState(props.rating);
  const [city, setCity] = useState(props.city);
  const [numberOfNights, setNumberOfNights] = useState(props.numberOfNights);
  const [price, setPrice] = useState(props.price);
  const [checkInDate, setCheckInDate] = useState(props.checkInDate);
  const [checkOutDate, setCheckOutDate] = useState(props.checkOutDate);
  const [OnClickFunction, setOnClickFunction] = useState(props.OnClickFunction);
  const [roomNumber, setRoomNumber] = useState(props.roomNumber);

  const [name, setName] = useState(props.name);
  const [numberOfPeople, setNumberOfPeople] = useState(props.numberOfPeople);
  const [status, setStatus] = useState(props.status);

  if (isCustomer == true) {
    return (
      <div className={styles.bookingContainer}>
        <RoomPicture roomNumber={roomNumber} />
        <div className={styles.textContainer}>
          <Title titleText={titleText} rating={rating} />
          <Subtitle city={city} numberOfNights={numberOfNights} price={price} />
          <Date isCheckIn={true} isEditable={false} dateText={checkInDate} />
          <Date isCheckIn={false} isEditable={false} dateText={checkOutDate} />
          <div className={styles.button}>
            <BookingButton buttonText="Book Now" />
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
