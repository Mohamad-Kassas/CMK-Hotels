import mysql from 'mysql2/promise'
require('dotenv').config()

//Done 
//Returns all data for a customer if the username and password are in the database
//Good Call
//http://localhost:3000/api/SelectData/SelectCustomerIDFromUsername?userName=tbaker
//Bad Call
//http://localhost:3000/api/SelectData/SelectCustomerIDFromUsername?userName=tbake
export default async function handler (req, res) {

    const userName = req.query.userName;

    const connection = await mysql.createConnection(process.env.DATABASE_URL)

    try {
        const query = "SELECT customerID FROM Customer WHERE userName = ?"

        const values = [userName]

        const [results] = await (await connection).execute(query,values)

        connection.end()

        res.status(200).json({result: results})

    } catch(error) {
        res.status(500).json({error: error.message})
    }
}
