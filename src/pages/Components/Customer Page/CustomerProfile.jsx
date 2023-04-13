import React, { useState, useEffect, use } from "react"
import NavigationBar from "../Navigation Bar/NavigationBar"
import Title from "../Bookings/Title"
import CustomerProfileInput from "./CustomerProfileInput"
import styles from "../Styles/Customer Page Styles/CustomerProfile.module.css"
import BookingButton from "../Bookings/BookingButton"

function CustomerProfile(props) {
  const [customerID, setCustomerID] = useState(props.customerID)
  const [customerInfo, setCustomerInfo] = useState({})
  const [update, setUpdate] = useState(false)

  const [fullName, setFullName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [ssn, setSsn] = useState("")

  const [fullName1, setFullName1] = useState("")
  const [firstName1, setFirstName1] = useState("")
  const [lastName1, setLastName1] = useState("")
  const [userName1, setUserName1] = useState("")
  const [password1, setPassword1] = useState("")
  const [street1, setStreet1] = useState("")
  const [city1, setCity1] = useState("")
  const [country1, setCountry1] = useState("")
  const [postalCode1, setPostalCode1] = useState("")
  const [ssn1, setSsn1] = useState("")

  useEffect(() => {
    const getData = async (url) => {
      const res = await fetch(url)
      const results = await res.json()
      setCustomerInfo(results.result[0])
      console.log(results.result[0])
    }

    getData(
      "http://localhost:3000/api/SelectData/SelectAllCustomerInfoByID?customerID=" +
        customerID
    )
  }, [])

  useEffect(() => {
    setFullName(customerInfo.name)
    setFirstName(customerInfo.firstName)
    setLastName(customerInfo.lastName)
    setUserName(customerInfo.userName)
    setPassword(customerInfo.userPassword)
    setStreet(customerInfo.street)
    setCity(customerInfo.city)
    setCountry(customerInfo.country)
    setPostalCode(customerInfo.postalCode)
    setSsn(customerInfo.ssn)

    setFirstName1(customerInfo.firstName)
    setLastName1(customerInfo.lastName)
    setUserName1(customerInfo.userName)
    setPassword1(customerInfo.userPassword)
    setStreet1(customerInfo.street)
    setCity1(customerInfo.city)
    setCountry1(customerInfo.country)
    setPostalCode1(customerInfo.postalCode)
    setSsn1(customerInfo.ssn)
  }, [customerInfo])

  useEffect(() => {
    console.log(fullName)
  }, [fullName])

  const handleMainButtonClick = () => {
    setUpdate(true)
  }

  useEffect(() => {
    if (update) {
      const getData = async (url) => {
        const res = await fetch(url)
        const results = await res.json()
        console.log(results)
      }

      console.log(customerID)
      console.log(userName1)
      console.log(password1)
      console.log(firstName1)
      console.log(lastName1)
      console.log(street1)
      console.log(city1)
      console.log(country1)
      console.log(postalCode1)
      console.log(ssn1)

      getData(
        `http://localhost:3000/api/Update/UpdateCustomerInfo?customerID=${customerID}&userName=${userName1}&userPassword=${password1}&firstName=${firstName1}&lastName=${lastName1}&street=${street1}&city=${city1}&country=${country1}&postalCode=${postalCode1}&ssn=${ssn1}`
      ).then(alert("Profile Updated"))
    }
    setUpdate(false)
  }, [update])

  return (
    <div className={styles.pageContainer}>
      <NavigationBar
        key={fullName}
        loggedIn={true}
        name={fullName}
        customer={true}
        employee={false}
        showCustomerBookingsFunction={props.showCustomerBookingsFunction}
        showCustomerProfileFunction={props.showCustomerProfileFunction}
        showCustomerMainPageFunction={props.showCustomerMainPageFunction}
      />
      <div className={styles.titleContainer}>
        <Title titleText="Your Profile" size={"large"} rating={-1} />
      </div>
      <div className={styles.inputContainer}>
        <CustomerProfileInput
          inputType="first Name"
          value={firstName}
          key={firstName + "1"}
          onChangeFunction={(e) => setFirstName1(e)}
        />
        <CustomerProfileInput
          inputType="last Name"
          value={lastName}
          key={lastName + "2"}
          onChangeFunction={setLastName1}
        />
        <CustomerProfileInput
          inputType="SSN"
          value={ssn}
          key={ssn + "3"}
          onChangeFunction={setSsn1}
        />
        <CustomerProfileInput
          inputType="Username"
          value={userName}
          key={userName + "4"}
          onChangeFunction={setUserName1}
        />
        <CustomerProfileInput
          inputType="password"
          value={password}
          key={password + "5"}
          onChangeFunction={setPassword1}
        />
        <CustomerProfileInput
          inputType="street"
          value={street}
          key={street + "6"}
          onChangeFunction={setStreet1}
        />
        <CustomerProfileInput
          inputType="city"
          value={city}
          key={city + "7"}
          onChangeFunction={setCity1}
        />
        <CustomerProfileInput
          inputType="country"
          value={country}
          key={country + "8"}
          onChangeFunction={setCountry1}
        />
        <CustomerProfileInput
          inputType="postal Code"
          value={postalCode}
          key={postalCode + "9"}
          onChangeFunction={setPostalCode1}
        />
      </div>
      <BookingButton
        buttonText="SUBMIT"
        onClickFunction={handleMainButtonClick}
      />
    </div>
  )
}

export default CustomerProfile
