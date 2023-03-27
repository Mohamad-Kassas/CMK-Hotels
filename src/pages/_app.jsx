import "@/styles/globals.css";
import NavigationBar from "./Components/Landing Page/navigationBar";
import Booking from "./Components/Bookings/Booking";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavigationBar />
      <Booking
        isCustomer={true}
        titleText="Paradise Hotels"
        rating={3}
        city="Ottawa"
        numberOfNights={2}
        price={350}
        checkInDate="7/09/2023"
        checkOutDate="9/09/2023"
        roomNumber={1}
      />
    </div>
  );
}
