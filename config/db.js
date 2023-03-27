//Create Connection to the database
//don't touch
const { createPool } = require("mysql");
const pool = createPool({

    host: "localhost",
    user: "root",
    password: "Ishwinner776",
    port:3306,
    database: "CMKHotels",
});


pool.getConnection((err) => {
if (err) {
console.log("Error conntecting to db");
}

console.log("Connected to db....");

});

module.exports = pool;

const executeQuery = (query, arraParms) => {
    return new Promise((resolve, reject) => {
    try {
        pool.query(query, arraParms, (err, data) => {
        if (err) {
            console. log("error in executing the query");
            reject(err);
        }
        resolve(data);
    });
    } catch (err) {
        reject(err);
    }
});
};
    
module.exports = { executeQuery };
    