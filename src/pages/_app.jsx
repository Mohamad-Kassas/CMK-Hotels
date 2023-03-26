import "@/styles/globals.css";
import LandingPage from "./Components/Landing Page/landingPage";
import Popup from "./Components/Popup/popup";

export default function App({ Component, pageProps }) {
  return (
  // <Popup login={false} signUp={false} employeePopup={true}/>
  <LandingPage />);
}