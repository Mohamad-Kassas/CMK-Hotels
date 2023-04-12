import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
//Sample Insertation
//http://localhost:3000/api/Insert/InsertCustomer?customerID=12346&username=johndoe&userPassword=password&firstName=John&lastName=Doe&street=123%20Main%20St&city=New%20York&country=USA&postalCode=10001&ssn=123456789

//Done
export default async function handler(req, res) {

  const date = new Date();
  //userName/Email address can't be over 20 characters long
  const customerID = req.query.customerID;
  const userName = req.query.username;
  const userPassword = req.query.userPassword;
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  const street  = req.query.street ;
  const city = req.query.userPassword;
  const country  = req.query.country ;
  const postalCode = req.query.postalCode;
  const ssn  = req.query.ssn;
  const currentDate = date.toISOString().substring(0, 10);

  const connection = await mysql.createConnection(process.env.DATABASE_URL);

  try {

    // Insert the new customer
    const insertQuery = "INSERT INTO Customer (customerID, userName, userPassword, firstName, lastName, street, city, country, postalCode, ssn, dateOfRegistration ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const insertValues = [customerID, userName, userPassword, firstName, lastName, street, city, country, postalCode, ssn, currentDate];
    await connection.execute(insertQuery, insertValues);



    res.status(200).json({ result: customerID });
  } catch(error) {
    res.status(500).json({ error: error.message });
  }


}