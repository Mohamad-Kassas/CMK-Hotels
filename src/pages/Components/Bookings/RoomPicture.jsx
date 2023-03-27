import React, { useState } from "react";
import Image from "next/image";
import room0 from "../../../images/CMK Hotels Rooms/room_0.jpeg";
import room1 from "../../../images/CMK Hotels Rooms/room_1.jpeg";
import room2 from "../../../images/CMK Hotels Rooms/room_2.jpeg";
import room3 from "../../../images/CMK Hotels Rooms/room_3.jpeg";
import room4 from "../../../images/CMK Hotels Rooms/room_4.jpeg";
import room6 from "../../../images/CMK Hotels Rooms/room_6.jpeg";
import room7 from "../../../images/CMK Hotels Rooms/room_7.jpeg";
import room8 from "../../../images/CMK Hotels Rooms/room_8.jpeg";
import room9 from "../../../images/CMK Hotels Rooms/room_9.jpeg";
import styles from "../Styles/ Bookings Styles/RoomPicture.module.css";

function RoomPicture(props) {
  const [roomNumber] = useState(props.roomNumber);

  const getImage = (roomNumber) => {
    switch (roomNumber) {
      case 0:
        return room0;
      case 1:
        return room1;
      case 2:
        return room2;
      case 3:
        return room3;
      case 4:
        return room4;
      case 5:
        return room5;
      case 6:
        return room6;
      case 7:
        return room7;
      case 8:
        return room8;
      case 9:
        return room9;
    }
  }

  return (
    <Image
      src={getImage(roomNumber)}
      alt="Room Picture"
      className={styles.roomPicture}
    ></Image>
  );
}

export default RoomPicture;
