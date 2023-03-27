import React, { useState } from "react";
import styles from "../../Styles/Navigation Bar Styles/Dropdown Styles/DropdownItem.module.css";
import { BsPerson } from "react-icons/bs";
import { BiBed, BiLogOut } from "react-icons/bi";
import {AiOutlineFileSearch} from "react-icons/ai";

function DropdownItem(props) {

  const [text] = useState(props.text);

  const getIcon = (text) => {
    switch (text) {
      case "My Profile":
        return <BsPerson className={styles.DropdownItemIcon} />;
      case "My Bookings":
        return <BiBed className={styles.DropdownItemIcon} />;
      case "Book a room":
        return <AiOutlineFileSearch className={styles.DropdownItemIcon} />;
      case "Log Out":
        return <BiLogOut className={styles.DropdownItemIcon} />;
      default:
        return <BsPerson className={styles.DropdownItemIcon} />;
    }
  }
  return (
    <li className={styles.DropdownItem}>
      {getIcon(text)}
      <span className={styles.DropdownItemText}>{text}</span>
    </li>
  );
}

export default DropdownItem;
