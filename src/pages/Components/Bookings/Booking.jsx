import React, { useState } from "react"
import Date from "./Date"
import BookingButton from "./BookingButton"
import RoomPicture from "./RoomPicture"
import Subtitle from "./Subtitle"
import Title from "./Title"
import Name from "./Name"
import NumberOfPeople from "./NumberOfPeople"
import Status from "./Status"
import styles from "../Styles/Bookings Styles/Booking.module.css"
import Amenities from "./Amenities"

function Booking(props) {

  const [isCustomer, setIsCustomer] = useState(props.isCustomer);
  const [isCustomerViewBookings, setIsCustomerViewBookings] = useState(
    props.isCustomerViewBookings
  );
  const [isCustomerViewRentings, setIsCustomerViewRentings] = useState(
    props.isCustomerViewRentings
  );

  const [isEmployeeEmptyRoom, setIsEmployeeEmptyRoom] = useState(
    props.isEmployeeEmptyRoom
  )
  const [isEmployeeBookedRoom, setIsEmployeeBookedRoom] = useState(
    props.isEmployeeBookedRoom

  );
  const [isEmployeeBookedRoomRenting, setIsEmployeeBookedRoomRenting] =
    useState(props.isEmployeeBookedRoomRenting);
  const [titleText, setTitleText] = useState(props.titleText);
  const [rating, setRating] = useState(props.rating);
  const [city, setCity] = useState(props.city);
  const [numberOfNights, setNumberOfNights] = useState(props.numberOfNights);
  const [price, setPrice] = useState(props.price);
  const [checkInDate, setCheckInDate] = useState(props.checkInDate);
  const [checkOutDate, setCheckOutDate] = useState(props.checkOutDate);
  const [roomNumber, setRoomNumber] = useState(props.roomNumber);
  const [amenities, setAmenities] = useState(props.amenities);

  const [name, setName] = useState(props.name);
  const [numberOfPeople, setNumberOfPeople] = useState(props.numberOfPeople);
  const [status, setStatus] = useState(props.status);


  return isCustomer ? (
    <div className={styles.bookingContainer}>
      <RoomPicture roomNumber={roomNumber} />
      <div className={styles.textContainer}>
        <Title titleText={titleText} size="medium" rating={rating} />
        <Subtitle city={city} numberOfNights={numberOfNights} price={price} />
        <Date
          isCheckIn={true}
          isEditable={false}
          dateText={props.checkInDate}
        />
        <Date
          isCheckIn={false}
          isEditable={false}
          dateText={props.checkOutDate}
        />
        <Amenities list={amenities} />
        <div className={styles.button}>
          <BookingButton
            buttonText="Book Now"
            onClickFunction={props.onClickFunction}
          />
        </div>
      </div>
    </div>

  ) : isCustomerViewBookings ? (
    <div className={styles.customerViewBookingsContainer}>
      <RoomPicture roomNumber={roomNumber} />
      <div className={styles.textContainer}>
        <Title titleText={titleText} size="medium" rating={rating} />
        <Subtitle city={city} numberOfNights={numberOfNights} price={price} />
        <Date isCheckIn={true} isEditable={false} dateText={checkInDate} />
        <Date isCheckIn={false} isEditable={false} dateText={checkOutDate} />
        <Status status={status} isEditable={false} />
        <Amenities list={amenities} />
        <div className={styles.button}>
          <BookingButton
            buttonText="Cancel Booking"
            onClickFunction={props.onClickFunction}
          />
        </div>
      </div>
    </div>
  ) : isCustomerViewRentings ? (
    <div className={styles.customerViewBookingsContainer}>
      <RoomPicture roomNumber={roomNumber} />
      <div className={styles.textContainer}>
        <Title titleText={titleText} size="medium" rating={rating} />
        <Subtitle city={city} numberOfNights={numberOfNights} price={price} />
        <Date isCheckIn={false} isEditable={false} dateText={checkOutDate} />
        <Status status={status} isEditable={false} />
        <Amenities list={amenities} />
      </div>
    </div>
  ) : isEmployeeBookedRoom ? (
    <div className={styles.bookedRoomBookingContainer}>
      <div className={styles.textContainer}>
        <Title titleText={titleText} size="medium" rating={-1} />
        <Subtitle city={city} numberOfNights={numberOfNights} price={price} />
        <Name name={name} />
        <NumberOfPeople number={numberOfPeople} />
        <Date isCheckIn={true} isEditable={true} dateText={checkInDate} />
        <Date isCheckIn={false} isEditable={false} dateText={checkOutDate} />
        <Status status={status} isEditable={false} />
        <Amenities list={amenities} />
        <div className={styles.button}>
          <BookingButton
            buttonText="Convert to Renting"
            onClickFunction={props.onClickFunction}
          />
        </div>
        <div className={styles.button}>
          <BookingButton
            buttonText="Cancel"
            onClickFunction={props.onClickFunction2}
          />
        </div>
      </div>
    </div>
  ) : isEmployeeEmptyRoom ? (
    <div className={styles.emptyRoomBookingContainer}>
      <div className={styles.textContainer}>
        <Title titleText={titleText} size="medium" rating={-1} />
        <Subtitle city={city} numberOfNights={numberOfNights} price={price} />
        <Date
          isCheckIn={true}
          isEditable={false}
          dateText={props.checkInDate}
        />
        <Date
          isCheckIn={false}
          isEditable={false}
          dateText={props.checkOutDate}
        />
        <Amenities list={amenities} />
        <div className={styles.button}>
          <BookingButton
            buttonText="Make Booking"
            onClickFunction={() => props.toggleFunction()}
          />
        </div>
      </div>
    </div>
  ) : isEmployeeBookedRoomRenting ? (
    <div className={styles.bookedRoomBookingContainer}>
      <div className={styles.textContainer}>
        <Title titleText={titleText} size="medium" rating={-1} />
        <Subtitle city={city} numberOfNights={numberOfNights} price={price} />
        <Name name={name} />
        <NumberOfPeople number={numberOfPeople} />
        <Date isCheckIn={false} isEditable={false} dateText={checkOutDate} />
        <Status status={status} isEditable={false} />
        <Amenities list={amenities} />
      </div>
    </div>
  ) : null;

}

export default Booking
