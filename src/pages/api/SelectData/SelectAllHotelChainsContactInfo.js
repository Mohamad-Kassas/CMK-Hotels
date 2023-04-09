import mysql from 'mysql2/promise'
require('dotenv').config()

//Done
//http://localhost:3000/api//SelectData/SelectAllHotelChainsContactInfo

export default async function handler (req, res) {

    const connection = await mysql.createConnection(process.env.DATABASE_URL)

    try {
        const query = "SELECT nameOfChain,addressOfCentralOffices,numberOfHotels FROM HotelChain"
        
        const values = []

        const [results] = await (await connection).execute(query,values)

        connection.end()

        res.status(200).json({result: results})

    } catch(error) {
        res.status(500).json({error: error.message})
    }
}

