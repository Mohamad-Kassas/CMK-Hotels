import React, { useState, useEffect } from "react";
import FetchCity from "./FetchCity";
import styles from "../Styles/Search Bar Styles/CityInput.module.css";

function CityInput(props) {
  const [city, setCity] = useState("");
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState("");

  const handleCityChange = async (e) => {
    props.updateCity(e.target.value);
    setCity(e.target.value);
    if (!city) return;

    const res = await FetchCity(city);
    !autocompleteCities.includes(e.target.value) &&
      res.features &&
      setAutocompleteCities(res.features.map((place) => place.place_name));
    res.error ? setAutocompleteErr(res.error) : setAutocompleteErr("");
  };

  return (
    <>
      <label htmlFor="city" className="label">
        {autocompleteErr && (
          <span className="inputError">{autocompleteErr}</span>
        )}
      </label>
      <input
        className={styles.citySearchBar}
        placeholder="Search for your city"
        list="places"
        type="text"
        id="city"
        name="city"
        onChange={handleCityChange}
        value={city}
        required
        pattern={autocompleteCities.join("|")}
        autoComplete="off"
      />
      <datalist id="places">
        {autocompleteCities.map((city, i) => (
          <option key={i}>{city}</option>
        ))}
      </datalist>
    </>
  );
}

export default CityInput;