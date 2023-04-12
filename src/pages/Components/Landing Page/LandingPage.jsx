import React, { useEffect, useState } from "react"
import NavigationBar from "../Navigation Bar/NavigationBar"
import CardGroup from "../Card Group/CardGroup"
import Title from "../Bookings/Title"
import styles from "../Styles/Landing Page Styles/LandingPage.module.css"
import Popup from "../Popup/Popup"

function LandingPage(props) {
  const [seen, setSeen] = useState(false)
  const [login, setLogin] = useState(false)
  const [signUp, setSignUp] = useState(false)

  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(false)
  const [isEmployeeLoggedIn, setIsEmployeeLoggedIn] = useState(false)

  const [customerData, setCustomerData] = useState(null)
  const [employeeData, setEmployeeData] = useState(null)

  useEffect(() => {
    props.setIsCustomerLoggedIn(isCustomerLoggedIn)
    props.setIsEmployeeLoggedIn(isEmployeeLoggedIn)
  }, [isCustomerLoggedIn, isEmployeeLoggedIn])

  useEffect(() => {
    props.setCustomerData(customerData)
    props.setEmployeeData(employeeData)
  }, [customerData, employeeData])

  const closePopup = () => {
    setSeen(!seen)
    setLogin(false)
    setSignUp(false)
  }

  const toggleLoginPopup = () => {
    setSeen(!seen)
    setLogin(!login)
    setSignUp(false)
  }

  const toggleSignUpPopup = () => {
    setSeen(!seen)
    setSignUp(!signUp)
    setLogin(false)
  }

  return (
    <>
      <NavigationBar
        toggleLoginPopup={toggleLoginPopup}
        toggleSignUpPopup={toggleSignUpPopup}
      />
      <div className={styles.cardGroupContainer}>
        <CardGroup />
      </div>
      <div className={styles.titleContainer}>
        <Title size="large" rating={-1} titleText="Our Brands"></Title>
      </div>
      <div>
        {seen ? (
          <Popup
            login={login}
            signUp={signUp}
            employeePopup={false}
            closePopup={closePopup}
            customerDataFunction={setCustomerData}
            employeeDataFunction={setEmployeeData}
            isCustomerLoggedInFunction={setIsCustomerLoggedIn}
            isEmployeeLoggedInFunction={setIsEmployeeLoggedIn}
          />
        ) : null}
      </div>
    </>
  )
}

export default LandingPage
