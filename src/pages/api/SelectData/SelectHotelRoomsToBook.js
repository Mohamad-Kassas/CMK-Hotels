import mysql from 'mysql2/promise'
require('dotenv').config()

//Done
//http://localhost:3000/api//SelectData/SelectHotelRoomsToBook

export default async function handler (req, res) {

    const connection = await mysql.createConnection(process.env.DATABASE_URL)

    try {
        const query = "SELECT HotelRoom.*, Amenity.firstAmenity, Amenity.secondAmenity, Amenity.thirdAmenity, HotelLocation.addressOfHotel, HotelLocation.rating, HotelLocation.numberOfRooms, HotelChain.nameOfChain FROM HotelRoom JOIN Amenity ON HotelRoom.hotelRoomID = Amenity.hotelRoomID  JOIN HotelLocation ON HotelRoom.hotelLocationID = HotelLocation.hotelLocationID JOIN HotelChain ON HotelLocation.hotelChainID = HotelChain.hotelChainID";
        
        const values = []

        const [results] = await (await connection).execute(query,values)

        connection.end()

        res.status(200).json({result: results})

    } catch(error) {
        res.status(500).json({error: error.message})
    }
}