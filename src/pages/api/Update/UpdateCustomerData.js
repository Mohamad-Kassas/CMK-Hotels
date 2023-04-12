import mysql from 'mysql2/promise'
require('dotenv').config()

//Sample Call 
//http://localhost:3000/api/Update/UpdateCustomerData?customerID=C0001&userName=johndoe15&userPassword=passwordp&firstName=John&lastName=Doe&address=123MainSt&city=Gatineau&country=Canada&postalCode=12345&ssn=123456789

export default async function handler (req, res) {
  const customerID = req.query.customerID
  const userName = req.query.userName
  const userPassword = req.query.userPassword
  const firstName = req.query.firstName
  const lastName = req.query.lastName
  const address = req.query.address
  const city = req.query.city
  const country = req.query.country
  const postalCode = req.query.postalCode
  const ssn = req.query.ssn


  const connection = await mysql.createConnection(process.env.DATABASE_URL)

  try {

    // update the customer data
    const updateQuery = `UPDATE Customer SET
      userName = ?,
      userPassword = ?,
      firstName = ?,
      lastName = ?,
      address = ?,
      city = ?,
      country = ?,
      postalCode = ?,
      ssn = ?
      WHERE customerID = ?`
    const updateValues = [
      userName,
      userPassword,
      firstName,
      lastName,
      address,
      city,
      country,
      postalCode,
      ssn,
      customerID
    ]
    const [updateResults] = await connection.execute(updateQuery, updateValues)

    console.log(updateResults)

    connection.end()

    res.status(200).json({ message: `Customer with ID ${customerID} updated successfully` })
  } catch(error) {
    res.status(500).json({ error: error.message })
  }
}