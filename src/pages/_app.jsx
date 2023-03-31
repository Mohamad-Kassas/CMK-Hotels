import "@/styles/globals.css";
import LandingPage from "./Components/Landing Page/LandingPage";
import UserDropdown from "./Components/Navigation Bar/Dropdown Menu/UserDropdown";
import Booking from "./Components/Bookings/Booking";
import NavigationBar from "./Components/Navigation Bar/NavigationBar";

export default function App({ Component, pageProps }) {
  return (
    // <UserDropdown name={"Anjali"} customer={true} employee={false}/>
    // <NavigationBar name={"Anjali"} loggedIn={true}/>
    //<LandingPage/>
    <Booking
      isEmployeeEmptyRoom={true}
      name="John Doe"
      numberOfPeople={3}
      isCheckedIn={true}
      titleText="Room #2172"
      rating={3}
      city="Ottawa"
      numberOfNights={2}
      price={350}
      checkInDate="07-09-2023"
      checkOutDate="09-09-2023"
      roomNumber={1}
      amenities={[
        { id: 1, text: "Wifi" },
        { id: 2, text: "Pool" },
        { id: 3, text: "Oven" },
        { id: 4, text: "TV" },
        { id: 5, text: "Refrigerator" },
        { id: 6, text: "Patio" },
        { id: 7, text: "Hammock" },
        { id: 8, text: "Office" },
        { id: 9, text: "Stove" },
        { id: 10, text: "Jacuzzi" },
      ]}
    />
  );
}
