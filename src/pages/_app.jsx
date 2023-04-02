import "@/styles/globals.css";
import SearchBar from "./Components/Search Bar/SearchBar";

export default function App({ Component, pageProps }) {
  return (
  <SearchBar bookRoomsSearchBar={true} searchOnClick={() => {console.log("search button clicked")}}/>
  );
}

