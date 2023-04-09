import mysql from 'mysql2/promise'
require('dotenv').config()

//Done 
//Returns all data for a customer if the username and password are in the database
//Good Call
//http://localhost:3000/api/SelectData/SelectAllCustomerInfoIfTheyExist?userName=tbaker&userPassword=password
//Bad Call
//http://localhost:3000/api/SelectData/SelectAllCustomerInfoIfTheyExist?userName=tbake&userPassword=password
export default async function handler (req, res) {

    const userName = req.query.userName;
    const userPassword = req.query.userPassword;

    const connection = await mysql.createConnection(process.env.DATABASE_URL)

    try {
        const query = "SELECT * FROM Customer WHERE userName = ? AND userPassword = ?"

        const values = [userName, userPassword]

        const [results] = await (await connection).execute(query,values)

        connection.end()

        res.status(200).json({result: results})

    } catch(error) {
        res.status(500).json({error: error.message})
    }
}
