import mysql from 'mysql2/promise'
require('dotenv').config()

//Done
//Delete a booking given a booking ID
//http://localhost:3000/api/Delete/DeleteBooking?bookingID=B0003

export default async function handler (req, res) {

    const connection = await mysql.createConnection(process.env.DATABASE_URL)
    const bookingID  = req.query.bookingID ;

    try {
        const query = 'Delete From Booking Where bookingID = ?'
        
        const values = [bookingID]

        const [results] = await (await connection).execute(query,values)
        connection.end()

        res.status(200).json({results})

    } catch(error) {
        res.status(500).json({error: error.message})
    }
}