import React, { useEffect, useState } from "react";
import NavigationBar from "../Navigation Bar/NavigationBar";
import CardGroup from "../Card Group/CardGroup";
import Title from "../Bookings/Title";
import styles from "../Styles/Landing Page Styles/LandingPage.module.css";
import Popup from "../Popup/Popup";

export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}

function LandingPage() {

  const [seen, setSeen] = useState(false);
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);

  //Side effect
  //Called each time the application is rendered
  useEffect(() => {

    const getData = async (url) => {
      const res = await fetch(url)
      const results = await res.json();
      console.log(results);
    
    }
    getData("api/SelectCount/SelectCustomerCount")
    //Everytime the data in the [] square brackers are rendered, the useEffect Hook is called
  }, [])

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
      <CardGroup />
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
          />
        ) : null}
      </div>

    </>
  );
}

export default LandingPage;
