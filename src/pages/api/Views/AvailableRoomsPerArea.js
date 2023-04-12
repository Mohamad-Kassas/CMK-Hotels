//SELECT * FROM availableroomsperarea;

import mysql from 'mysql2/promise'
require('dotenv').config()

//Done
//Will return a view for viewing all availableroomsperarea 
//http://localhost:3000/api/Views/AvailableRoomsPerArea

export default async function handler (req, res) {

    const connection = await mysql.createConnection(process.env.DATABASE_URL)

    try {
        const query = "SELECT * FROM availableroomsperarea"
        
        const values = []

        const [results] = await (await connection).execute(query,values)

        connection.end()

        res.status(200).json({results})

    } catch(error) {
        res.status(500).json({error: error.message})
    }
}