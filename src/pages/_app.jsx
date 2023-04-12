import "@/styles/globals.css";
import LandingPage from "./Components/Landing Page/LandingPage";
import Booking from "./Components/Bookings/Booking";
import FilterBox from "./Components/Filter Box/FilterBox";
import EmployeePage from "./Components/Employee Page/EmployeePage";
import CustomerViewBookings from "./Components/Customer Page/CustomerViewBookings";
import MakeBookingPopup from "./Components/Employee Page/MakeBookingPopup";

export default function App({ Component, pageProps }) {
  return (
    <EmployeePage
      employeeName={"John Doe"}
      employeeHotelChain={"Hyatt Hotel"}
    />
  );
}
