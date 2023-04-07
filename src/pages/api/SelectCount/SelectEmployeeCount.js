import mysql from 'mysql2/promise'
require('dotenv').config()

//Done
//Will return anEmployeeID for the Most Recent Addition
//Can only contain 10 9 Employees
//http://localhost:3000/api/SelectCount/SelectEmployeeCount

export default async function handler (req, res) {

    const connection = await mysql.createConnection(process.env.DATABASE_URL)

    try {
        const query = "SELECT Count(*) FROM Employee"
        
        const values = []

        const [results] = await (await connection).execute(query,values)

        const recentEmployeeID = results[0]['count(*)'] + 1

        const  newEmployeeID = "E000" + recentEmployeeID;

        connection.end()

        res.status(200).json({newEmployeeID})

    } catch(error) {
        res.status(500).json({error: error.message})
    }
}