import React, { useState, useEffect } from "react"
import LandingPage from "../Landing Page/LandingPage"
import CustomerPage from "../Customer Page/CustomerPage"
import EmployeePage from "../Employee Page/EmployeePage"
import CustomerViewBookings from "../Customer Page/CustomerViewBookings"
import CustomerProfile from "../Customer Page/CustomerProfile"

function Application() {
  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(false)
  const [isEmployeeLoggedIn, setIsEmployeeLoggedIn] = useState(false)

  const [customerData, setCustomerData] = useState(null)
  const [employeeData, setEmployeeData] = useState(null)

  useEffect(() => {
    console.log("Customer Logged In: ", isCustomerLoggedIn)
    console.log("Employee Logged In: ", isEmployeeLoggedIn)
  }, [isCustomerLoggedIn, isEmployeeLoggedIn])

  useEffect(() => {
    console.log("Customer Data: ", customerData)
    console.log("Employee Data: ", employeeData)
  }, [customerData, employeeData])

  return (
    <>
      {!isCustomerLoggedIn && !isEmployeeLoggedIn && (
        <LandingPage
          setIsCustomerLoggedIn={setIsCustomerLoggedIn}
          setIsEmployeeLoggedIn={setIsEmployeeLoggedIn}
          setCustomerData={setCustomerData}
          setEmployeeData={setEmployeeData}
        />
      )}
      {isCustomerLoggedIn && !isEmployeeLoggedIn && (
        <CustomerPage
          customerID={customerData.customerID}
          name={customerData.firstName + " " + customerData.lastName}
        />
      )}
      {!isCustomerLoggedIn && isEmployeeLoggedIn && <EmployeePage employeeName={employeeData.firstName + " " + employeeData.lastName} employeeHotelChain={employeeData.hotelChainName} />}
    </>
  )
}

export default Application
