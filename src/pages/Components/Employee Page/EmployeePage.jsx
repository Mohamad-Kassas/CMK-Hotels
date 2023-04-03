import NavigationBar from "../Navigation Bar/NavigationBar";
import { useState } from "react";
import SearchBar from "../Search Bar/SearchBar";
import styles from "../Styles/Employee Page Styles/EmployeePage.module.css";
import Title from "../Bookings/Title";
import HotelChainLogo from "./HotelChainLogo";
import FilterBox from "../Filter Box/FilterBox";
import Booking from "../Bookings/Booking";

function EmployeePage(props) {
  const [name, setName] = useState(props.name);
  const [hotelChain, setHotelChain] = useState(props.hotelChain);
  const [noInput, setNoInput] = useState(false);
  const [emptyRoomSearch, setEmptyRoomSearch] = useState(true);
  const [occupiedRoomSearch, setOccupiedRoomSearch] = useState(false);

  const emptyRoomSearchClick = () => {
    // if (numberOfPeople() != 0) {
    //   setEmptyRoomSearch(true);
    //   setOccupiedRoomSearch(false);
    //   setNoInput(false);
    // } else {
    //   setNoInput(true);
    // }
  };

  const occupiedRoomSearchClick = () => {
    // Should be room number not number of poeple
    // if (numberOfPeople() != 0) {
    //   setEmptyRoomSearch(false);
    //   setOccupiedRoomSearch(true);
    //   setNoInput(false);
    // } else {
    //   setNoInput(true);
    // }
  };

  return (
    <>
      <NavigationBar
        loggedIn={true}
        name={name}
        customer={false}
        employee={true}
      ></NavigationBar>
      <div className={styles.hotelNameContainer}>
        <HotelChainLogo hotelChain={hotelChain} />
        <div
          className={
            hotelChain == "Paradise Hotels"
              ? styles.hotelNameParadise
              : hotelChain == "Hyatt Hotel"
              ? styles.hotelNameHyatt
              : hotelChain == "Hotel Grandeur"
              ? styles.hotelNameGrandeur
              : hotelChain == "Elite Hotels"
              ? styles.hotelNameElite
              : hotelChain == "Capital Hotels"
              ? styles.hotelNameCapital
              : null
          }
        >
          {hotelChain}
        </div>
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.searchAndResultsContainer}>
          <div className={styles.titleContainer}>
            <Title titleText={"Empty Rooms"} size={"large"} rating={-1} />
          </div>
          <div className={styles.searchBarContainer}>
            <SearchBar
              emptyRoomsSearchBar={true}
              searchOnClick={emptyRoomSearchClick}
            />
          </div>
          {emptyRoomSearch ? (
            <div className={styles.resultsContainer}>
              <Booking
                isEmployeeEmptyRoom={true}
                name="John Doe"
                numberOfPeople={3}
                isCheckedIn={true}
                titleText="Room #2172"
                rating={3}
                city="Ottawa"
                numberOfNights={2}
                price={350}
                checkInDate="07-09-2023"
                checkOutDate="09-09-2023"
                roomNumber={8}
                amenities={[
                  { id: 1, text: "Wifi" },
                  { id: 2, text: "Pool" },
                  { id: 3, text: "Oven" },
                  { id: 4, text: "TV" },
                  { id: 5, text: "Refrigerator" },
                  { id: 6, text: "Patio" },
                  { id: 7, text: "Hammock" },
                  { id: 8, text: "Office" },
                  { id: 9, text: "Stove" },
                  { id: 10, text: "Jacuzzi" },
                ]}
              />
              <Booking
                isEmployeeEmptyRoom={true}
                name="John Doe"
                numberOfPeople={3}
                isCheckedIn={true}
                titleText="Room #2172"
                rating={3}
                city="Ottawa"
                numberOfNights={2}
                price={350}
                checkInDate="07-09-2023"
                checkOutDate="09-09-2023"
                roomNumber={8}
                amenities={[
                  { id: 1, text: "Wifi" },
                  { id: 2, text: "Pool" },
                  { id: 3, text: "Oven" },
                  { id: 4, text: "TV" },
                  { id: 5, text: "Refrigerator" },
                  { id: 6, text: "Patio" },
                  { id: 7, text: "Hammock" },
                  { id: 8, text: "Office" },
                  { id: 9, text: "Stove" },
                  { id: 10, text: "Jacuzzi" },
                ]}
              />
              <Booking
                isEmployeeEmptyRoom={true}
                name="John Doe"
                numberOfPeople={3}
                isCheckedIn={true}
                titleText="Room #2172"
                rating={3}
                city="Ottawa"
                numberOfNights={2}
                price={350}
                checkInDate="07-09-2023"
                checkOutDate="09-09-2023"
                roomNumber={8}
                amenities={[
                  { id: 1, text: "Wifi" },
                  { id: 2, text: "Pool" },
                  { id: 3, text: "Oven" },
                  { id: 4, text: "TV" },
                  { id: 5, text: "Refrigerator" },
                  { id: 6, text: "Patio" },
                  { id: 7, text: "Hammock" },
                  { id: 8, text: "Office" },
                  { id: 9, text: "Stove" },
                  { id: 10, text: "Jacuzzi" },
                ]}
              />
            </div>
          ) : null}
        </div>
        <div className={styles.searchAndResultsContainer}>
          <div className={styles.titleContainer}>
            <Title titleText={"Booked Rooms"} size={"large"} rating={-1} />
          </div>
          <div className={styles.searchBarContainer}>
            <SearchBar
              occupiedRoomsSearchBar={true}
              searchOnClick={occupiedRoomSearchClick}
            />
          </div>

          {emptyRoomSearch ? (
            <div className={styles.resultsContainer}>
              <Booking
                isEmployeeBookedRoom={true}
                name="John Doe"
                numberOfPeople={3}
                isCheckedIn={true}
                titleText="Room #2172"
                rating={3}
                city="Ottawa"
                numberOfNights={2}
                price={350}
                checkInDate="07-09-2023"
                checkOutDate="09-09-2023"
                roomNumber={8}
                amenities={[
                  { id: 1, text: "Wifi" },
                  { id: 2, text: "Pool" },
                  { id: 3, text: "Oven" },
                  { id: 4, text: "TV" },
                  { id: 5, text: "Refrigerator" },
                  { id: 6, text: "Patio" },
                  { id: 7, text: "Hammock" },
                  { id: 8, text: "Office" },
                  { id: 9, text: "Stove" },
                  { id: 10, text: "Jacuzzi" },
                ]}
              />
              <Booking
                isEmployeeBookedRoom={true}
                name="John Doe"
                numberOfPeople={3}
                isCheckedIn={true}
                titleText="Room #2172"
                rating={3}
                city="Ottawa"
                numberOfNights={2}
                price={350}
                checkInDate="07-09-2023"
                checkOutDate="09-09-2023"
                roomNumber={8}
                amenities={[
                  { id: 1, text: "Wifi" },
                  { id: 2, text: "Pool" },
                  { id: 3, text: "Oven" },
                  { id: 4, text: "TV" },
                  { id: 5, text: "Refrigerator" },
                  { id: 6, text: "Patio" },
                  { id: 7, text: "Hammock" },
                  { id: 8, text: "Office" },
                  { id: 9, text: "Stove" },
                  { id: 10, text: "Jacuzzi" },
                ]}
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default EmployeePage;
