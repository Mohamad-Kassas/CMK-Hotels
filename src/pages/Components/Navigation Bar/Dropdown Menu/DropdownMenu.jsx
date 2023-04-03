import React, { useState } from "react";
import styles from "../../Styles/Navigation Bar Styles/Dropdown Styles/DropdownMenu.module.css";
import DropdownItem from "./DropdownItem";

function DropdownMenu(props) {
  const [customer, setCustomer] = useState(props.customer);
  const [employee, setEmployee] = useState(props.employee);

  const customerProfileOnClick = () => {
    console.log("Customer Profile clicked");
  };

  const customerBookingsOnClick = () => {
    console.log("Customer Bookings clicked");
  };

  const customerBookRoomOnClick = () => {
    console.log("Customer Book Room clicked");
  };
  
  const customerLogOutOnClick = () => {
    console.log("Customer Log Out clicked");
  };

  return (
    <div className={styles.dropdownMenu}>
      {customer ? (
        <div className={styles.dropdownCustomerMenu}>
          <DropdownItem text={"My Profile"} onClickFunction={customerProfileOnClick} />
          <DropdownItem text={"My Bookings"} onClickFunction={customerBookingsOnClick} />
          <DropdownItem text={"Book a room"} onClickFunction={customerBookRoomOnClick} />
          <DropdownItem text={"Log Out"} onClickFunction={customerLogOutOnClick} />
        </div>
      ) : null}
      {/** Put employee stuff instead of null above */}
    </div>
  );
}

export default DropdownMenu;
