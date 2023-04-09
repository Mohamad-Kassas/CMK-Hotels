import mysql from 'mysql2/promise'
require('dotenv').config()

//Returns all bookings associated with a room
//Call with some bookings
//http://localhost:3000/api/SelectData/SelectRoomsBooking?hotelRoomID=HR101
// Call with no bookings 
//http://localhost:3000/api/SelectData/SelectRoomsBooking?hotelRoomID=HR105
export default async function handler (req, res) {

    const hotelRoomID = req.query.hotelRoomID;

    const connection = await mysql.createConnection(process.env.DATABASE_URL)

    try {
        const query = "SELECT * FROM Booking Where Booking.hotelRoomID = ?";

        const values = [hotelRoomID]

        const [results] = await (await connection).execute(query,values)

        connection.end()

        res.status(200).json({result: results})

    } catch(error) {
        res.status(500).json({error: error.message})
    }
}