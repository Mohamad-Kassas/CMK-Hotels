import NavigationBar from "../Navigation Bar/NavigationBar";
import { useState } from "react";
import SearchBar from "../Search Bar/SearchBar";
import styles from "../Styles/Employee Page Styles/EmployeePage.module.css";
import Title from "../Bookings/Title";
import HotelChainLogo from "./HotelChainLogo";
import FilterBox from "../Filter Box/FilterBox";
import Booking from "../Bookings/Booking";

function EmployeePage(props) {
  const [employeeName, setEmployeeName] = useState(props.employeeName);
  const [employeeHotelChain, setEmployeeHotelChain] = useState(
    props.employeeHotelChain
  );

  const [noInput, setNoInput] = useState(false);
  const [emptyRoomSearch, setEmptyRoomSearch] = useState(false);
  const [occupiedRoomSearch, setOccupiedRoomSearch] = useState(false);

  const [emptyRoomNumberOfPeople, setEmptyRoomNumberOfPeople] = useState(0);
  const [occupiedRoomNumber, setOccupiedRoomNumber] = useState(0);

  const [emptyRoomDateRange, setEmptyRoomDateRange] = useState("00/00/0000");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [minRooms, setMinRooms] = useState(0);
  const [maxRooms, setMaxRooms] = useState(1000000);
  const [rating, setRating] = useState(0);
  const [hotelChains, setHotelChains] = useState([
    "Paradise Hotels",
    "Hyatt Hotel",
    "Elite Hotels",
    "Hotel Grandeur",
    "Capital Hotels",
  ]);

  const emptyRoomSearchClick = () => {
    if (emptyRoomNumberOfPeople > 0) {
      setEmptyRoomSearch(true);
      setOccupiedRoomSearch(false);
      setNoInput(false);
    } else {
      setNoInput(true);
    }
  };

  const occupiedRoomSearchClick = () => {
    if (occupiedRoomNumber > 0) {
      setEmptyRoomSearch(false);
      setOccupiedRoomSearch(true);
      setNoInput(false);
    } else {
      setNoInput(true);
    }
  };

  return (
    <>
      <NavigationBar
        loggedIn={true}
        name={employeeName}
        customer={false}
        employee={true}
      ></NavigationBar>
      <div className={styles.hotelNameContainer}>
        <HotelChainLogo hotelChain={employeeHotelChain} />
        <div
          className={
            employeeHotelChain == "Paradise Hotels"
              ? styles.hotelNameParadise
              : employeeHotelChain == "Hyatt Hotel"
              ? styles.hotelNameHyatt
              : employeeHotelChain == "Hotel Grandeur"
              ? styles.hotelNameGrandeur
              : employeeHotelChain == "Elite Hotels"
              ? styles.hotelNameElite
              : employeeHotelChain == "Capital Hotels"
              ? styles.hotelNameCapital
              : null
          }
        >
          {employeeHotelChain}
        </div>
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.filterBoxContainer}>
          <FilterBox />
        </div>
        <div className={styles.searchAndResultsContainer}>
          <div className={styles.titleContainer}>
            <Title titleText={"Empty Rooms"} size={"large"} rating={-1} />
          </div>
          <div className={styles.searchBarContainer}>
            <SearchBar
              emptyRoomsSearchBar={true}
              searchOnClick={emptyRoomSearchClick}
              updateNumberOfPeople={setEmptyRoomNumberOfPeople}
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
              updateRoomNumber={setOccupiedRoomNumber}
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
