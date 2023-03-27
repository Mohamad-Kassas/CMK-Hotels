import "@/styles/globals.css";
import LandingPage from "./Components/Landing Page/LandingPage";
import UserProfile from "./Components/Navigation Bar/Dropdown Menu/UserProfile";

import UserDropdown from "./Components/Navigation Bar/Dropdown Menu/UserDropdown";

import NavigationBar from "./Components/Navigation Bar/NavigationBar";

export default function App({ Component, pageProps }) {
  return (
  <UserDropdown name={"Anjali"} customer={true} employee={false}/>
  // <NavigationBar name={"Anjali"} loggedIn={true}/>
  // <LandingPage/>
  );
}
