import mysql from 'mysql2/promise'
require('dotenv').config()

//Returns all bookings associated with a room
//Call with some bookings
//http://localhost:3000/api/SelectData/SelectCustomerRenting?customerID=C0001
// Call with no bookings 
//http://localhost:3000/api/SelectData/SelectCustomerRenting?customerID=C0010
export default async function handler (req, res) {

    const customerID = req.query.customerID;

    const connection = await mysql.createConnection(process.env.DATABASE_URL)

    try {
        const query = 'SELECT Customer.firstName, Customer.lastName, HotelRoom.capacity, Renting.dateCheckOut, Renting.currentStatus, Amenity.firstAmenity, Amenity.secondAmenity, Amenity.thirdAmenity, HotelLocation.city, HotelRoom.pricePerNight, HotelChain.nameOfChain FROM Renting JOIN HotelRoom ON Renting.hotelRoomID = HotelRoom.hotelRoomID JOIN HotelLocation ON HotelRoom.hotelLocationID = HotelLocation.hotelLocationID JOIN HotelChain ON HotelLocation.hotelChainID = HotelChain.hotelChainID JOIN Amenity ON HotelRoom.hotelRoomID = Amenity.hotelRoomID JOIN Customer ON Renting.customerID = Customer.customerID WHERE Renting.customerID = ?';

        const values = [customerID]

        const [results] = await (await connection).execute(query,values)

        connection.end()

        res.status(200).json({result: results})

    } catch(error) {
        res.status(500).json({error: error.message})
    }
}