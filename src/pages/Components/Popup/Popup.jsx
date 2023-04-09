import React, { useState, useEffect } from "react";
import styles from "../Styles/Popup/Popup.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import PopupInput from "./PopupInput";



function Popup(props) {
  const [login, setLogin] = useState(props.login);
  const [signUp, setSignUp] = useState(props.signUp);
  const [employeePopup, setEmployeePopup] = useState(props.employeePopup);

  const [customerData, setCustomerData] = useState(null);
  const [shouldFetchCustomerData, setShouldFetchCustomerData] = useState(false);

  const [employeeData, setEmployeeData] = useState(null);
  const [shouldFetchEmployeeData, setShouldFetchEmployeeData] = useState(false);

  const [shouldInsertACustomerData, setShouldInsertACustomerData] = useState(false);

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [addressInput, setAddressInput] = useState('');
  const [cityInput, setCityInput] = useState('');
  const [countryInput, setCountryInput] = useState('');
  const [postalCodeInput, setPostalCodeInput] = useState('');

  useEffect(() => {
    setLogin(props.login);
    setSignUp(props.signUp);
    setEmployeePopup(props.employeePopup);
  }, []);

    useEffect(() => {

      if (shouldFetchCustomerData) {
        const getData = async (url) => {
          const res = await fetch(url)
          const results = await res.json();

          //If the length is 1, then there is 1 user who exists
          //
          if (results.result.length == 1) {
            console.log(results.result[0].userName);
            console.log(results.result[0].userPassword);
            setCustomerData(results.result[0])
            console.log(customerData)
          }

          //User not found
          else {
            console.log("Error: No results found.");
          }


        }
    
        getData("http://localhost:3000/api/SelectData/SelectAllCustomerInfoIfTheyExist?userName=" + emailInput + "&userPassword=" + passwordInput)

        //getData("http://localhost:3000/api/SelectData/SelectAllCustomerInfoIfTheyExist?userName=tbaker&userPassword=password")
      }

      setShouldFetchCustomerData(false);
  
    }, [shouldFetchCustomerData,emailInput,passwordInput])

    useEffect(() => {

      if (shouldFetchEmployeeData) {
        const getData = async (url) => {
          const res = await fetch(url)
          const results = await res.json();

          //If the length is 1, then there is 1 user who exists
          //
          if (results.result.length == 1) {
            console.log(results.result[0].userName);
            console.log(results.result[0].userPassword);
            setEmployeeData(results.result[0])
            console.log(employeeData)
          }

          //User not found
          else {
            console.log("Error: No results found.");
          }


        }
    
        getData("http://localhost:3000/api/SelectData/SelectAllEmployeeInfoIfTheyExist?userName=" + emailInput + "&userPassword=" + passwordInput)

        //http://localhost:3000/api/SelectData/SelectAllEmployeeInfoIfTheyExist?userName=johndoe&userPassword=pass123
      }

      setShouldFetchEmployeeData(false);
  
    }, [shouldFetchEmployeeData,emailInput,passwordInput])


    useEffect(() => {

      if (shouldInsertACustomerData) {
        const getData = async (url) => {
          const res = await fetch(url)
          const results = await res.json();      

        }
    
        getData("http://localhost:3000/api/Insert/InsertCustomer?customerID="+ + "&username="+ +"&userPassword="+ +"&firstName="+ + "&lastName=" + +"&street=" + +"&city="+ + "&country=Canada&postalCode="+ +"&ssn=123456789")

        //http://localhost:3000/api/Insert/InsertCustomer?customerID=12346&username=johndoe&userPassword=password&firstName=John&lastName=Doe&street=123%20Main%20St&city=New%20York&country=USA&postalCode=10001&ssn=123456789
}

      setShouldInsertACustomerData(false);
  
    }, [setShouldInsertACustomerData,emailInput,passwordInput,firstNameInput,lastNameInput,addressInput,cityInput,countryInput,postalCodeInput])
  
  //On submit button
  const handleMainButtonClick = () => {
    const emailInputField = document.getElementById("emailInput");
    const passwordInputField = document.getElementById("passwordInput");

    const emailInput = emailInputField.value;
    const passwordInput = passwordInputField.value;

    setEmailInput(emailInputField.value);
    setPasswordInput(passwordInputField.value);

    const errorMessages = document.getElementById("errorMessages");
    const errorMessagesDiv = document.getElementById("errorMessagesDiv");

    let errorStatus = false;

    // Default values
    errorMessagesDiv.style.display = "none";

    if (signUp) {
      const firstNameInputField = document.getElementById("first NameInput");
      const lastNameInputField = document.getElementById("last NameInput");
      const addressInputField = document.getElementById("addressInput");
      const cityInputField = document.getElementById("cityInput");
      const countryInputField = document.getElementById("countryInput");
      const postalCodeInputField = document.getElementById("postal CodeInput");

      const firstNameInput = firstNameInputField.value;
      const lastNameInput = lastNameInputField.value;
      const addressInput = addressInputField.value;
      const cityInput = cityInputField.value;
      const countryInput = countryInputField.value;
      const postalCodeInput = postalCodeInputField.value;

      setFirstNameInput(firstNameInputField.value);
      setLastNameInput(lastNameInputField.value);
      setAddressInput(firstNameInputField.value);
      setCityInput(firstNameInputField.value);
      setCountryInput(firstNameInputField.value);
      setPostalCodeInput(firstNameInputField.value);



      if (firstNameInput === "") {
        errorMessages.innerText = "First name cannot be empty";
        errorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }

      if (lastNameInput === "") {
        errorMessages.innerText = "Last name cannot be empty";
        errorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }

      if (addressInput === "") {
        errorMessages.innerText = "Address cannot be empty";
        errorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }

      if (cityInput === "") {
        errorMessages.innerText = "City cannot be empty";
        errorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }

      if (countryInput === "") {
        errorMessages.innerText = "Country cannot be empty";
        errorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }

      if (postalCodeInput === "") {
        errorMessages.innerText = "Postal code cannot be empty";
        errorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }

      if (postalCodeInput.length < 5 || postalCodeInput.length > 10) {
        errorMessages.innerText = "Invalid postal code";
        errorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }

      //sign up is legit
      //sign up is legit
      
    }

    if (passwordInput.length < 6 || passwordInput.length > 20) {
      errorMessages.innerText = "Password must be between 6 and 20 characters";
      errorMessagesDiv.style.display = "flex";
      errorStatus = true;
    }

    if (passwordInput === "") {
      errorMessages.innerText = "Password cannot be empty";
      errorMessagesDiv.style.display = "flex";
      errorStatus = true;

      if (emailInput.length < 4 || emailInput.length > 30) {
        errorMessages.innerText = "email must be between 4 and 30 characters";
        errorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }

      if (emailInput === "") {
        errorMessages.innerText = "email cannot be empty";
        errorMessagesDiv.style.display = "flex";
        errorStatus = true;
      }
    } else {
      // authentication database code, check that email and password are in db and the user checks out
      //---------------------------------------------------------------------------------
      //---------------------------------------------------------------------------------
      //---------------------------------------------------------------------------------
      //---------------------------------------------------------------------------------
      //---------------------------------------------------------------------------------
      //---------------------------------------------------------------------------------
      //---------------------------------------------------------------------------------
      //---------------------------------------------------------------------------------
      //---------------------------------------------------------------------------------
      //---------------------------------------------------------------------------------

      if (employeePopup) {
        setShouldFetchEmployeeData(true);
      }

      //Customer Login 
      else {
        setShouldFetchCustomerData(true)
      }

    }

    if (!errorStatus) {
      // authentication database code
    }
  };

  //Login or Sign Up Toggle
  const handleChangeAuthenticationMethodButtonClick = (numButton) => {
    if (numButton === 1) {
      if (login || signUp) {
        setLogin(!login);
        setSignUp(!signUp);
      } else {
        setLogin(true);
        setSignUp(false);
        setEmployeePopup(false);
      }

      const employeeBottomMessage = document.getElementById(
        "employeeBottomMessage"
      );
      employeeBottomMessage.style.display = "block";
    }

    if (numButton === 2) {
      setLogin(false);
      setSignUp(false);
      setEmployeePopup(true);

      const employeeBottomMessage = document.getElementById(
        "employeeBottomMessage"
      );
      employeeBottomMessage.style.display = "none";
    }

    const errorMessagesDiv = document.getElementById("errorMessagesDiv");

    errorMessagesDiv.style.display = "none";
  };

  //closes the popup
  const handleExitButtonClick = () => {
    props.closePopup();
  };

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupWindow}>
        <div
          className={styles.closeButtonDiv}
          onClick={() => handleExitButtonClick()}
        >
          <AiOutlineClose className={styles.closeButton} />
        </div>
        <h1 className={styles.header}>
          {login ? "Login" : ""}
          {signUp ? "Sign Up" : ""}
          {employeePopup ? "Employee Access" : ""}
        </h1>

        <PopupInput inputType="email" />
        <PopupInput inputType="password" />

        {signUp ? <PopupInput inputType="first Name" /> : null}

        {signUp ? <PopupInput inputType="last Name" /> : null}

        {signUp ? <PopupInput inputType="address" /> : null}

        {signUp ? <PopupInput inputType="city" /> : null}

        {signUp ? <PopupInput inputType="country" /> : null}

        {signUp ? <PopupInput inputType="postal Code" /> : null}

        <div className={styles.errorMessagesDiv} id="errorMessagesDiv">
          <RiErrorWarningFill className={styles.errorIcon} />
          <p className={styles.errorMessages} id="errorMessages">
            {" "}
            Hello world
          </p>
        </div>

        <button
          className={styles.mainButton}
          onClick={() => handleMainButtonClick()}
        >
          {login ? "Login" : ""}
          {signUp ? "Sign Up" : ""}
          {employeePopup ? "Gain Access" : ""}
        </button>

        <hr className={styles.lineBreak}></hr>
        <div>
          <p className={styles.popupBottomMessages}>
            {login ? "Don't have an account? " : "Already a customer? "}{" "}
            <button
              className={styles.ChangeAuthenticationMethodButton}
              onClick={() => handleChangeAuthenticationMethodButtonClick(1)}
            >
              <u>{login ? "Sign Up" : "Login"}</u>
            </button>
          </p>
          <p className={styles.popupBottomMessages} id="employeeBottomMessage">
            Employee?
            <button
              className={styles.ChangeAuthenticationMethodButton}
              onClick={() => handleChangeAuthenticationMethodButtonClick(2)}
            >
              <u>Gain Access</u>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Popup;
