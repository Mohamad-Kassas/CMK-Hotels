import { useState } from "react";
import Image from "next/image";
import paradiseImage from "../../../images/CMK Hotel Chain Logos/paradise.png";
import hyattImage from "../../../images/CMK Hotel Chain Logos/hyatt.png";
import grandeurImage from "../../../images/CMK Hotel Chain Logos/grandeur.png";
import eliteImage from "../../../images/CMK Hotel Chain Logos/elite.png";
import capitalImage from "../../../images/CMK Hotel Chain Logos/capital.png";
import styles from "../Styles/Employee Page Styles/HotelChainLogo.module.css";

function HotelChainLogo(props) {
  const [hotelChain, setHotelChain] = useState(props.hotelChain);

  return hotelChain === "Paradise Hotels" ? (
    <Image src={paradiseImage} alt="Logo" className={styles.logo}></Image>
  ) : hotelChain === "Hyatt Hotel" ? (
    <Image src={hyattImage} alt="Logo" className={styles.logo}></Image>
  ) : hotelChain === "Hotel Grandeur" ? (
    <Image src={grandeurImage} alt="Logo" className={styles.logo}></Image>
  ) : hotelChain === "Elite Hotels" ? (
    <Image src={eliteImage} alt="Logo" className={styles.logo}></Image>
  ) : hotelChain === "Capital Hotels" ? (
    <Image src={capitalImage} alt="Logo" className={styles.logo}></Image>
  ) : null;
}

export default HotelChainLogo;
