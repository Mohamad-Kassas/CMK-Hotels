import mysql from 'mysql2/promise'
require('dotenv').config()

//Done
//Will return aBookingId for the Most Recent Addition
//Can only contain 10 9 Bookings
//http://localhost:3000/api/SelectCount/SelectBookingCount

export default async function handler (req, res) {

    const connection = await mysql.createConnection(process.env.DATABASE_URL)

    try {
        const query = "SELECT Count(*) FROM Booking"
        
        const values = []

        const [results] = await (await connection).execute(query,values)

        const recentBookingID = results[0]['count(*)'] + 1

        const  newBookingID = "B000" + recentBookingID;

        connection.end()

        res.status(200).json({newBookingID})

    } catch(error) {
        res.status(500).json({error: error.message})
    }
}
