import React, { useState, useEffect } from "react"
import CustomerPage from "../Customer Page/CustomerPage"
import CustomerViewBookings from "../Customer Page/CustomerViewBookings"
import CustomerProfile from "../Customer Page/CustomerProfile"

function CustomerApplication(props) {
  const [showCustomerBookings, setShowCustomerBookings] = useState(false)
  const [showCustomerProfile, setShowCustomerProfile] = useState(false)
  const [showCustomerMainPage, setShowCustomerMainPage] = useState(true)

  const [customerData, setCustomerData] = useState(props.customerData)

  return (
    <>
      {showCustomerMainPage &&
        !showCustomerBookings &&
        !showCustomerProfile && (
          <CustomerPage
            customerID={customerData.customerID}
            name={customerData.firstName + " " + customerData.lastName}
            showCustomerBookingsFunction={setShowCustomerBookings}
            showCustomerProfileFunction={setShowCustomerProfile}
            showCustomerMainPageFunction={setShowCustomerMainPage}
          />
        )}

      {showCustomerBookings &&
        !showCustomerProfile &&
        !showCustomerMainPage && (
          <CustomerViewBookings
            customerID={customerData.customerID}
            customerName={customerData.firstName + " " + customerData.lastName}
            showCustomerBookingsFunction={setShowCustomerBookings}
            showCustomerProfileFunction={setShowCustomerProfile}
            showCustomerMainPageFunction={setShowCustomerMainPage}
          />
        )}

      {showCustomerProfile &&
        !showCustomerBookings &&
        !showCustomerMainPage && (
          <CustomerProfile
            customerID={customerData.customerID}
            showCustomerBookingsFunction={setShowCustomerBookings}
            showCustomerProfileFunction={setShowCustomerProfile}
            showCustomerMainPageFunction={setShowCustomerMainPage}
          />
        )}
    </>
  )
}

export default CustomerApplication
