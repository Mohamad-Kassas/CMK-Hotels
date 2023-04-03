import mysql from 'mysql2/promise'
require('dotenv').config()

//Done 
//Returns all userNames /Email Address and Passwords for all Employees,
//http://localhost:3000/api/SelectEmployeeToLogin
export default async function handler (req, res) {

    const connection = await mysql.createConnection(process.env.DATABASE_URL)

    try {
        const query = "SELECT userName,userPassword FROM Employee"
        
        const values = []

        const [results] = await (await connection).execute(query,values)

        connection.end()

        res.status(200).json({result: results})

    } catch(error) {
        res.status(500).json({error: error.message})
    }
}

