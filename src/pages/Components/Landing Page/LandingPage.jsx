import React, { Component } from "react";
import NavigationBar from "../Navigation Bar/NavigationBar";
import CardGroup from "../Card Group/CardGroup";
import Title from "../Bookings/Title";
import styles from "../Styles/Landing Page Styles/LandingPage.module.css";
import Popup from "../Popup/Popup";

class LandingPage extends Component {
  state = {
    seen: false,
    login: false,
    signUp: false,
  };

  closePopup = () => {
    this.setState({
      seen: !this.state.seen,
      login: false,
      signUp: false,
    });
  };

  toggleLoginPopup = () => {
    console.log("Login button clicked");
    this.setState({
      seen: !this.state.seen,
      login: !this.state.login,
      signUp: false,
    });
  };

  toggleSignUpPopup = () => {
    console.log("Sign Up button clicked");
    this.setState({
      seen: !this.state.seen,
      signUp: !this.state.signUp,
      login: false,
    });
  };

  render() {
    return (
      <>
        <NavigationBar
          toggleLoginPopup={this.toggleLoginPopup}
          toggleSignUpPopup={this.toggleSignUpPopup}
        />
        <CardGroup />
        <div className={styles.titleContainer}>
          <Title size="large" rating={-1} titleText="Our Brands"></Title>
        </div>
        <div>
          {this.state.seen ? (
            <Popup
              login={this.state.login}
              signUp={this.state.signUp}
              employeePopup={false}
              closePopup={this.closePopup}
            />
          ) : null}
        </div>
      </>
    );
  }
}

export default LandingPage;
