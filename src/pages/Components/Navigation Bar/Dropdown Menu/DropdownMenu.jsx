import React, { useState } from "react"
import styles from "../../Styles/Navigation Bar Styles/Dropdown Styles/DropdownMenu.module.css"
import DropdownItem from "./DropdownItem"

function DropdownMenu(props) {
  const [customer, setCustomer] = useState(props.customer)
  const [employee, setEmployee] = useState(props.employee)

  const customerProfileOnClick = () => {
    console.log("Customer Profile clicked")
    props.showCustomerBookingsFunction(false)
    props.showCustomerProfileFunction(true)
    props.showCustomerMainPageFunction(false)
  }

  const customerBookingsOnClick = () => {
    console.log("Customer Bookings clicked")
    props.showCustomerBookingsFunction(true)
    props.showCustomerProfileFunction(false)
    props.showCustomerMainPageFunction(false)
  }

  const customerBookRoomOnClick = () => {
    console.log("Customer Book Room clicked")
    props.showCustomerBookingsFunction(false)
    props.showCustomerProfileFunction(false)
    props.showCustomerMainPageFunction(true)
  }

  const customerLogOutOnClick = () => {
    console.log("Customer Log Out clicked")
    window.location.reload()
  }

  const employeeSearchRoomsOnClick = () => {
    console.log("Employee Search Rooms clicked")
  }

  const employeeLogOutOnClick = () => {
    console.log("Employee Log Out clicked")
    window.location.reload()
  }

  return (
    <div className={styles.dropdownMenu}>
      {customer ? (
        <div className={styles.dropdownCustomerMenu}>
          <DropdownItem
            text={"My Profile"}
            onClickFunction={customerProfileOnClick}
          />
          <DropdownItem
            text={"My Bookings"}
            onClickFunction={customerBookingsOnClick}
          />
          <DropdownItem
            text={"Book a room"}
            onClickFunction={customerBookRoomOnClick}
          />
          <DropdownItem
            text={"Log Out"}
            onClickFunction={customerLogOutOnClick}
          />
        </div>
      ) : null}
      {employee ? (
        <div className={styles.dropdownEmployeeMenu}>
          <DropdownItem
            text={"Search rooms"}
            onClickFunction={employeeSearchRoomsOnClick}
          />
          <DropdownItem
            text={"Log Out"}
            onClickFunction={employeeLogOutOnClick}
          />
        </div>
      ) : null}
    </div>
  )
}

export default DropdownMenu
