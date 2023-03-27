import "@/styles/globals.css";
import LandingPage from "./Components/Landing Page/LandingPage";
import UserProfile from "./Components/Navigation Bar/Dropdown Menu/UserProfile";
import UserDropdown from "./Components/Navigation Bar/Dropdown Menu/UserDropdown";
import Booking from "./Components/Bookings/Booking";
import NavigationBar from "./Components/Navigation Bar/NavigationBar";

export default function App({ Component, pageProps }) {
  return (
  // <UserDropdown name={"Anjali"} customer={true} employee={false}/>
  // <NavigationBar name={"Anjali"} loggedIn={true}/>
  // <LandingPage/>
  <Booking isCustomer={true} isEmployeeBookedRoom={false} isEmployeeEmptyRoom={false} titleText="Paradise Hotels" rating={3} city="Ottawa" numberOfNights={2} price={350} checkInDate="07-09-2023" checkOutDate="09-09-2023" roomNumber={1}/>
  );
}

