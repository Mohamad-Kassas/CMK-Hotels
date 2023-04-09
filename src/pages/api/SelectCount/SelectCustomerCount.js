import mysql from 'mysql2/promise'
require('dotenv').config()

//Done
//Will return aBookingId for the Most Recent Addition
//Can only contain 10 9 Customers
//http://localhost:3000/api/SelectCount/SelectCustomerCount

export default async function handler (req, res) {

    const connection = await mysql.createConnection(process.env.DATABASE_URL)

    try {
        const query = "SELECT Count(*) FROM Customer"
        
        const values = []

        const [results] = await (await connection).execute(query,values)
        
        const recentCustomerID = results[0]['count(*)'] + 1

        const  newCustomerID = "B000" + recentCustomerID;

        connection.end()

        res.status(200).json({newCustomerID})

    } catch(error) {
        res.status(500).json({error: error.message})
    }
}
