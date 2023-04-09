import mysql from 'mysql2/promise'
require('dotenv').config()

//Done
//Will return a RentingID for the Most Recent Addition
//Can only contain 10 9 Bookings (Feature to enable more Bookings to be added)
//http://localhost:3000/api/SelectCount/SelectRentingCount

export default async function handler (req, res) {

    const connection = await mysql.createConnection(process.env.DATABASE_URL)

    try {
        const query = "SELECT Count(*) FROM Renting"
        
        const values = []

        const [results] = await (await connection).execute(query,values)

        const recentRentingID = results[0]['count(*)'] + 1

        const  newRentingID = "R000" + recentRentingID;

        connection.end()

        res.status(200).json({newRentingID})

    } catch(error) {
        res.status(500).json({error: error.message})
    }
}