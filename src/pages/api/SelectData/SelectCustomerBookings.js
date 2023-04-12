import mysql from 'mysql2/promise'
require('dotenv').config()

//Done 
//Returns all bookings associated with a customer
//Call with some bookings
//http://localhost:3000/api/SelectData/SelectCustomerBookings?customerID=C0005
// Call with no bookings 
//http://localhost:3000/api/SelectData/SelectCustomerBookings?customerID=C0009
export default async function handler (req, res) {

    const customerID = req.query.customerID;

    const connection = await mysql.createConnection(process.env.DATABASE_URL)

    try {
        const query = "SELECT Booking.*, HotelChain.nameOfChain, HotelLocation.city, HotelLocation.rating, Amenity.firstAmenity, Amenity.secondAmenity, Amenity.thirdAmenity FROM Booking JOIN HotelRoom ON Booking.hotelRoomID = HotelRoom.hotelRoomID  JOIN HotelLocation ON HotelRoom.hotelLocationID = HotelLocation.hotelLocationID  JOIN HotelChain ON HotelLocation.hotelChainID = HotelChain.hotelChainID  LEFT JOIN Amenity ON HotelRoom.hotelRoomID = Amenity.hotelRoomID WHERE Booking.customerID = ?";

        const values = [customerID]

        const [results] = await (await connection).execute(query,values)

        connection.end()

        res.status(200).json({result: results})

    } catch(error) {
        res.status(500).json({error: error.message})
    }
}
