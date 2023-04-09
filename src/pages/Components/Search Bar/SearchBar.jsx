import React, { useState, useRef, useEffect } from "react";
import CityInput from "./CityInput";
import DateRangeInput from "./DateRangeInput";
import NumberOfPeopleInput from "./NumberOfPeopleInput";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";

import styles from "../Styles/Search Bar Styles/SearchBar.module.css";

function SearchBar(props) {
  const [bookRoomsSearchBar] = useState(props.bookRoomsSearchBar);
  const [emptyRoomsSearchBar] = useState(props.emptyRoomsSearchBar);
  const [occupiedRoomsSearchBar] = useState(props.occupiedRoomsSearchBar);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [city, setCity] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  const [open, setOpen] = useState(false);

  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const toggleOpen = () => {
    setOpen((open) => !open);
  };

  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const handleSearchButtonClick = () => {
    console.log("city: " + city);
    console.log("number of people: " + numberOfPeople);
    console.log("start date: " + range[0].startDate);
    console.log("end date: " + range[0].endDate);
  };

  const getInputsStyle = () => {
    if (bookRoomsSearchBar) {
      return styles.inputsWithButtonContainerBookRooms;
    } else if (emptyRoomsSearchBar) {
      return styles.inputsWithButtonContainerEmptyRooms;
    } else if (occupiedRoomsSearchBar) {
      return styles.inputsWithButtonContainerOccupiedRooms;
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      <div className={getInputsStyle()}>
        <form id="searchBarFormID" className={styles.inputsContainer}>
          {bookRoomsSearchBar ? (
            <>
              <CityInput updateCity={(e) => setCity(e)} />{" "}
              <DateRangeInput
                middleOfSearchBar={true}
                range={range}
                setOpenFunction={() => toggleOpen()}
              />
              <NumberOfPeopleInput
                handleOnChange={(e) => {
                  setNumberOfPeople(e);
                  props.updateNumberOfPeople();
                }}
                rightOfSearchBar={true}
              />
            </>
          ) : null}
          {emptyRoomsSearchBar ? (
            <>
              <DateRangeInput
                leftOfSearchBar={true}
                range={range}
                setOpenFunction={() => toggleOpen()}
              />
              <NumberOfPeopleInput
                handleOnChange={(e) => setNumberOfPeople(e)}
                rightOfSearchBar={true}
              />
            </>
          ) : null}

          {occupiedRoomsSearchBar ? (
            <>
              <NumberOfPeopleInput
                handleOnChange={(e) => {
                  setNumberOfPeople(e);
                  props.updateRoomNumber(e);
                }}
                allOfSearchBar={true}
              />
            </>
          ) : null}
        </form>
        <button
          className={styles.searchButton}
          onClick={() => handleSearchButtonClick()}
        >
          Search
        </button>
      </div>
      <div className={styles.DateRangeContainer}>
        <div ref={refOne}>
          {open && (
            <DateRange
              onChange={(item) => {
                setRange([item.selection]);
                props.setDateRange(item.selection);
              }}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={range}
              months={2}
              direction="horizontal"
              className="calendarElement"
              minDate={addDays(new Date(), 0)}
              maxDate={addDays(new Date(), 2700)}
              rangeColors={["#D3756B", "#D3756B", "#D3756B"]}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
