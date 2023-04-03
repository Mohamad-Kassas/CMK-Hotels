// import { Client } from 'planetscale';

// const client = new Client({
//     apikey: process.env['y9pm432q5ves'],
//     organization: process.env['mkass090'],
// });

// const database = client.database('cmk-hotel');

// export async function query(q, values) {
//   try {
//     const result = await database.query(q, values);
//     return result;
//   } catch (error) {
//     console.error(`Error executing query: ${q}`);
//     console.error(error);
//     throw error;
//   }
// }

// // Sample query function to fetch all users from a 'users' table
// export async function getAllUsers() {
//   const query = `SELECT * FROM HotelChain`;
//   const result = await database.query(query);
//   return result;
// }