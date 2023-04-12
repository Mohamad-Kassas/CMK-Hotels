import React, { useEffect, useState } from "react"
import NavigationBar from "../Navigation Bar/NavigationBar"
import CardGroup from "../Card Group/CardGroup"
import Title from "../Bookings/Title"
import styles from "../Styles/Landing Page Styles/LandingPage.module.css"
import Popup from "../Popup/Popup"

function LandingPage() {
  const [seen, setSeen] = useState(false)
  const [login, setLogin] = useState(false)
  const [signUp, setSignUp] = useState(false)

  const [testData, setTestData] = useState([])

  const [customerData, setCustomerData] = useState(null);
  const [employeeData, setEmployeeData] = useState(null);

  // useEffect(() => {

  //   const getData = async (url) => {
  //     const res = await fetch(url)
  //     const results = await res.json();
  //     console.log(results);
    
  //   }

  //   getData("http://localhost:3000/api/SelectData/SelectAllHotelChainsContactInfo")

  // }, [])

  const closePopup = () => {
    setSeen(!seen);
    setLogin(false);
    setSignUp(false);


  };

  const toggleLoginPopup = () => {
    setSeen(!seen);
    setLogin(!login);
    setSignUp(false);

  };

  const toggleSignUpPopup = () => {
    setSeen(!seen);
    setSignUp(!signUp);
    setLogin(false);

  };

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
          />
        ) : null}
      </div>
    </>
  )
}

export default LandingPage
