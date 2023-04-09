import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

//Sample Insertation
//http://localhost:3000/api/Insert/InsertBooking?bookingID=B0009customerID=C0006&hotelRoomID=HR146&dateCheckIn=2023-05-01&dateCheckOut=2023-05-05&totalPrice=1200.00&currentStatus=Confirmed

//Done
export default async function handler(req, res) {

    const bookingID  = req.query.bookingID ;
    const customerID = req.query.customerID;
    const hotelRoomID  = req.query.hotelRoomID;
    const dateCheckIn  = req.query.dateCheckIn;
    const dateCheckOut  = req.query.dateCheckOut;
    const totalPrice  = req.query.totalPrice;
    const currentStatus  = req.query.currentStatus;

  const connection = await mysql.createConnection(process.env.DATABASE_URL);

  try {

    // Insert the new customer
    const insertQuery = "INSERT INTO Booking (bookingID, customerID, hotelRoomID, dateCheckIn, dateCheckOut, totalPrice, currentStatus) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const insertValues = [bookingID, customerID, hotelRoomID, dateCheckIn, dateCheckOut, totalPrice, currentStatus];
    await connection.execute(insertQuery, insertValues);

    res.status(200).json({ result: bookingID });
  } catch(error) {
    res.status(500).json({ error: error.message });
  }


}