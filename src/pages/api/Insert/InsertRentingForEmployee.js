import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
//Done
//Sample Insertation
//http://localhost:3000/api/Insert/InsertRentingForEmployee?bookingID=12345&customerID=67890&rentingID=12345&hotelRoomID=456&paid=1&dateCheckOut=2023-04-03&currentStatus=Checked%20Out
//Note, Paid should be provivded as a 1 or a 0
//
export default async function handler(req, res) {

  const rentingID = req.query.rentingID;
  const bookingID = req.query.bookingID;
  const customerID = req.query.customerID;
  const hotelRoomID = req.query.hotelRoomID;
  const paid = req.query.paid;
  const dateCheckOut  = req.query.dateCheckOut;
  const currentStatus = req.query.currentStatus;

  const connection = await mysql.createConnection(process.env.DATABASE_URL);

  try {

    // Insert the new customer
    const insertQuery = "INSERT INTO Renting (bookingID, customerID, rentingID, hotelRoomID, paid, dateCheckOut, currentStatus)  VALUES (?, ?, ?, ?, ?, ?, ?)";
    const insertValues = [bookingID, customerID, rentingID, hotelRoomID, paid, dateCheckOut, currentStatus];
    await connection.execute(insertQuery, insertValues);



    res.status(200).json({ result: rentingID });
  } catch(error) {
    res.status(500).json({ error: error.message });
  }


}