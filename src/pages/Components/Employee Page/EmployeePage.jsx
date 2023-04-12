import NavigationBar from "../Navigation Bar/NavigationBar";

import { useState, useEffect } from "react";

import SearchBar from "../Search Bar/SearchBar";
import styles from "../Styles/Employee Page Styles/EmployeePage.module.css";
import Title from "../Bookings/Title";
import HotelChainLogo from "./HotelChainLogo";
import FilterBox from "../Filter Box/FilterBox";
import Booking from "../Bookings/Booking";

import { addDays } from "date-fns";
import MakeBookingPopup from "./MakeBookingPopup";

function EmployeePage(props) {
  const [showPopup, setShowPopup] = useState(false);


  const [employeeName, setEmployeeName] = useState(props.employeeName);
  const [employeeHotelChain, setEmployeeHotelChain] = useState(
    props.employeeHotelChain
  );

  const [emptyRoomBookings, setEmptyRoomBookings] = useState({});
  const [filteredEmptyRoomBookings, setFilteredEmptyRoomBookings] = useState(
    []
  );
  const [occupiedRoomBookings, setOccupiedRoomBookings] = useState({});
  const [occupiedRoomRentings, setOccupiedRoomRentings] = useState({});

  const [emptyRoomNumberOfPeople, setEmptyRoomNumberOfPeople] = useState(0);
  const [occupiedRoomNumber, setOccupiedRoomNumber] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 7));

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [minRooms, setMinRooms] = useState(0);
  const [maxRooms, setMaxRooms] = useState(1000000);
  const [rating, setRating] = useState(1);

  const [hotelChains, setHotelChains] = useState([
    "Paradise Hotels",
    "Hyatt Hotel",
    "Elite Hotels",
    "Hotel Grandeur",
    "Capital Hotels",
  ]);


  const togglePopup = () => {
    setShowPopup(!showPopup);
    console.log("showPopup: " + showPopup);
  };

  const [rentingID, setRentingID] = useState("");

  useEffect(() => {
    const getData = async (url) => {
      const res = await fetch(url);
      const results = await res.json();
      setEmptyRoomBookings(results.result);
      console.log(results.result);
    };

    getData("http://localhost:3000/api//SelectData/SelectHotelRoomsToBook");
  }, []);

  useEffect(() => {
    const getData = async (url) => {
      const res = await fetch(url);
      const results = await res.json();
      setOccupiedRoomBookings(results.result);
    };

    getData(
      "http://localhost:3000/api/SelectData/SelectRoomsBooking?hotelRoomID=HR" +
        occupiedRoomNumber
    );
  }, [occupiedRoomNumber]);

  useEffect(() => {
    const getData2 = async (url) => {
      const res = await fetch(url);
      const results = await res.json();
      setOccupiedRoomRentings(results.result);
    };

    getData2(
      "http://localhost:3000/api/SelectData/SelectRoomsRenting?hotelRoomID=HR" +
        occupiedRoomNumber
    );
  }, [occupiedRoomNumber]);

  useEffect(() => {
    setFilteredEmptyRoomBookings(
      (() => {
        const elements = [];
        for (let i = 0; i < emptyRoomBookings.length; i++) {
          if (
            emptyRoomBookings[i].rating >= rating &&
            emptyRoomBookings[i].nameOfChain == employeeHotelChain &&
            emptyRoomBookings[i].pricePerNight >= minPrice &&
            emptyRoomBookings[i].pricePerNight <= maxPrice &&
            emptyRoomBookings[i].numberOfRooms >= minRooms &&
            emptyRoomBookings[i].numberOfRooms <= maxRooms &&
            emptyRoomBookings[i].capacity >= emptyRoomNumberOfPeople
          ) {
            elements.push(emptyRoomBookings[i]);
          }
        }
        return elements;
      })()
    );
  }, [
    startDate,
    endDate,
    emptyRoomNumberOfPeople,
    minPrice,
    maxPrice,
    minRooms,
    maxRooms,
    rating,
    hotelChains,
    emptyRoomBookings,
  ]);

  useEffect(() => {
    console.log("filteredEmptyRoomBookings: ");
    console.log(filteredEmptyRoomBookings);
  }, [filteredEmptyRoomBookings]);

  const calculateDateDifferenceDate = (date1, date2) => {
    const timeDifference = date2 - date1;

    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
  };

  const calculateDateDifference = (dateString1, dateString2) => {
    const date1 = new Date(dateString1);
    const date2 = new Date(dateString2);

    const timeDifference = date2 - date1;

    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
  };

  const formatDate = (dateString) => {
    const [datePart] = dateString.split("T");
    return datePart;
  };

  const formatDate2 = (dateString) => {
    const [datePart] = dateString.split(",");
    return datePart;
  };

  const convertToRenting = async (
    bookingID,
    customerID,
    hotelRoomID,
    dateCheckOut
  ) => {
    const rentingID = await fetch(
      "http://localhost:3000/api/SelectCount/SelectRentingCount"
    )
      .then((res) => res.json())
      .then((data) => {
        return data.newRentingID;
      });

    const insertRenting = async (url) => {
      const res = await fetch(url);
      const results = await res.json();
      console.log(results);
    };

    const dateCheckOutString = `${dateCheckOut.getFullYear()}-${(
      dateCheckOut.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${dateCheckOut.getDate().toString().padStart(2, "0")}`;

    console.log(bookingID);
    console.log(customerID);
    console.log(rentingID);
    console.log(hotelRoomID);
    console.log(dateCheckOutString);

    insertRenting(
      `http://localhost:3000/api/Insert/InsertRentingForEmployee?bookingID=${bookingID}&customerID=${customerID}&rentingID=${rentingID}&hotelRoomID=${hotelRoomID}&paid=1&dateCheckOut=${dateCheckOutString}&currentStatus=Checked%20In`
    ).then(alert("Room has been checked in!"));
  };

  const cancelBooking = (bookingID) => {
    const deleteBooking = async (url) => {
      const res = await fetch(url);
      const results = await res.json();
      console.log(results);
    };

    console.log(bookingID);

    deleteBooking(
      "http://localhost:3000/api/Delete/DeleteBooking?bookingID=" + bookingID
    ).then(alert("Booking has been cancelled!"));

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

          <FilterBox
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            setMinRooms={setMinRooms}
            setMaxRooms={setMaxRooms}
            setRating={setRating}
            setHotelChains={setHotelChains}
          />

        </div>
        <div className={styles.searchAndResultsContainer}>
          <div className={styles.titleContainer}>
            <Title titleText={"Empty Rooms"} size={"large"} rating={-1} />
          </div>
          <div className={styles.searchBarContainer}>
            <SearchBar
              emptyRoomsSearchBar={true}
              updateNumberOfPeople={setEmptyRoomNumberOfPeople}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </div>

          <div className={styles.resultsContainer}>
            {(() => {
              const elements = [];
              for (let i = 0; i < filteredEmptyRoomBookings.length; i++) {
                elements.push(
                  <>
                    {" "}
                    <Booking
                      key={i}
                      isEmployeeEmptyRoom={true}
                      titleText={
                        "Room #" + filteredEmptyRoomBookings[i].roomNumber
                      }
                      rating={-1}
                      city={
                        filteredEmptyRoomBookings[i].addressOfHotel.split(
                          " "
                        )[3]
                      }
                      numberOfNights={calculateDateDifferenceDate(
                        startDate,
                        endDate
                      )}
                      price={filteredEmptyRoomBookings[i].pricePerNight}
                      checkInDate={formatDate2(startDate.toLocaleString())}
                      checkOutDate={formatDate2(endDate.toLocaleString())}
                      amenities={[
                        {
                          id: 1,
                          text: filteredEmptyRoomBookings[i].firstAmenity,
                        },
                        {
                          id: 2,
                          text: filteredEmptyRoomBookings[i].secondAmenity,
                        },
                        {
                          id: 3,
                          text: filteredEmptyRoomBookings[i].thirdAmenity,
                        },
                      ]}
                      toggleFunction={() => togglePopup()}
                    />
                    {showPopup ? (
                      <MakeBookingPopup
                        closePopup={togglePopup}
                        hotelRoomID={filteredEmptyRoomBookings[i].hotelRoomID}
                        startDate={startDate}
                        endDate={endDate}
                      />
                    ) : null}
                  </>
                );
              }

              return elements;
            })()}
          </div>

        </div>
        <div className={styles.searchAndResultsContainer}>
          <div className={styles.titleContainer}>
            <Title titleText={"Booked Rooms"} size={"large"} rating={-1} />
          </div>
          <div className={styles.searchBarContainer}>
            <SearchBar
              occupiedRoomsSearchBar={true}
              updateRoomNumber={setOccupiedRoomNumber}
            />
          </div>
          <div className={styles.resultsContainer}>
            {(() => {
              const elements = [];
              for (let i = 0; i < occupiedRoomBookings.length; i++) {
                elements.push(
                  <Booking
                    key={i}
                    isEmployeeBookedRoom={true}
                    titleText={"Room #" + occupiedRoomNumber}
                    rating={-1}
                    city={occupiedRoomBookings[i].city}
                    numberOfNights={calculateDateDifference(
                      occupiedRoomBookings[i].dateCheckIn,
                      occupiedRoomBookings[i].dateCheckOut
                    )}
                    price={occupiedRoomBookings[i].totalPrice}
                    name={occupiedRoomBookings[i].name}
                    numberOfPeople={occupiedRoomBookings[i].capacity}
                    checkInDate={formatDate(
                      occupiedRoomBookings[i].dateCheckIn
                    )}
                    checkOutDate={formatDate(
                      occupiedRoomBookings[i].dateCheckOut
                    )}
                    status={occupiedRoomBookings[i].currentStatus}
                    amenities={[
                      { id: 1, text: occupiedRoomBookings[i].firstAmenity },
                      { id: 2, text: occupiedRoomBookings[i].secondAmenity },
                      { id: 3, text: occupiedRoomBookings[i].thirdAmenity },
                    ]}
                    onClickFunction={() => {
                      convertToRenting(
                        occupiedRoomBookings[i].bookingID,
                        occupiedRoomBookings[i].customerID,
                        occupiedRoomBookings[i].hotelRoomID,
                        new Date(occupiedRoomBookings[i].dateCheckOut)
                      );
                      cancelBooking(occupiedRoomBookings[i].bookingID);
                      window.location.reload();
                    }}
                    onClickFunction2={() => {
                      cancelBooking(occupiedRoomBookings[i].bookingID);
                      window.location.reload();
                    }}
                  />
                );
              }
              return elements;
            })()}
            {(() => {
              const elements = [];
              for (let i = 0; i < occupiedRoomRentings.length; i++) {
                elements.push(
                  <Booking
                    key={i}
                    isEmployeeBookedRoomRenting={true}
                    titleText={"Room #" + occupiedRoomNumber}
                    rating={-1}
                    city={occupiedRoomRentings[i].city}
                    numberOfNights={3}
                    price={occupiedRoomRentings[i].pricePerNight * 3}
                    name={occupiedRoomRentings[i].name}
                    numberOfPeople={occupiedRoomRentings[i].capacity}
                    checkOutDate={formatDate(
                      occupiedRoomRentings[i].dateCheckOut
                    )}
                    status={occupiedRoomRentings[i].currentStatus}
                    amenities={[
                      { id: 1, text: occupiedRoomRentings[i].firstAmenity },
                      { id: 2, text: occupiedRoomRentings[i].secondAmenity },
                      { id: 3, text: occupiedRoomRentings[i].thirdAmenity },
                    ]}
                  />
                );
              }
              return elements;
            })()}
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeePage;
