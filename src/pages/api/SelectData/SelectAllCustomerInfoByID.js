import mysql from 'mysql2/promise'
require('dotenv').config()

//Done 
//Returns all bookings associated with a customer
//Call with some bookings
//http://localhost:3000/api/SelectData/SelectAllCustomerInfoByID?customerID=C0005
// Call with no bookings 
//http://localhost:3000/api/SelectData/SelectAllCustomerInfoByID?customerID=C0009
export default async function handler (req, res) {

    const customerID = req.query.customerID;

    const connection = await mysql.createConnection(process.env.DATABASE_URL)

    try {
        const query = "SELECT * FROM Customer WHERE customerID = ?;"

        const values = [customerID]

        const [results] = await (await connection).execute(query,values)

        connection.end()

        res.status(200).json({result: results})

    } catch(error) {
        res.status(500).json({error: error.message})
    }
}