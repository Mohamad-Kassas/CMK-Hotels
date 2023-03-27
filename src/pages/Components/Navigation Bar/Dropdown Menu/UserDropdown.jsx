import React, { useState } from "react";
import styles from "../../Styles/Navigation Bar Styles/Dropdown Styles/UserDropdown.module.css";
import UserProfile from "./UserProfile";
import DropdownItem from "./DropdownItem";

function UserDropdown(props) {

  const [customer, setCustomer] = useState(props.customer);
  const [employee, setEmployee] = useState(props.employee);
  const [name, setName] = useState(props.name);

  return (
    <div className={styles.userDropdownContainer}>
      <div className={styles.dropdownTrigger}>
        <UserProfile name={name} />
      </div>

      <div className={styles.dropdownMenu}>
        {customer ? (
          <ul>
          <DropdownItem text={"My Profile"} />
          <DropdownItem text={"My Bookings"} />
          <DropdownItem text={"Book a room"} />
          <DropdownItem text={"Log Out"} />
        </ul>) : null}
        {/** Put employee stuff instead of null above */}
      </div>
    </div>
  );
}

export default UserDropdown;
