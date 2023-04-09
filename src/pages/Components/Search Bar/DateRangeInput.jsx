import { useEffect, useState } from "react";

import format from "date-fns/format";

import styles from "../Styles/Search Bar Styles/DateRangeInput.module.css";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function DateRangeInput(props) {
  const [range, setRange] = useState(props.range);

  const middleOfSearchBar = props.middleOfSearchBar;
  const leftOfSearchBar = props.leftOfSearchBar;

  function getDateRangeInputStyle() {
    if (middleOfSearchBar) {
      return styles.DateRangeInputMiddle;
    } else if (leftOfSearchBar) {
      return styles.DateRangeInputLeft;
    }
  };

  useEffect(() => {
    setRange(props.range);
  }, [props.range]);

  return (
    <>
      <input
        value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
          range[0].endDate,
          "MM/dd/yyyy"
        )}`}
        readOnly
        className={getDateRangeInputStyle()}
        onClick={() => props.setOpenFunction((open) => !open)}
        list="places"
        type="text"
        id="dateRange"
        name="dateRange"
      />
    </>
  );
}

export default DateRangeInput;
