const mysql = require('mysql2');
require('dotenv').config();

// define connection to db
const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    port: 3306,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
},
// add a comment in README about changing user and pw
console.log('Connected to the employeeList_db database.')
);

// actually connecting to db
connection.connect(err => {
    if(err) {
        console.log(err);
    }
});

module.exports = connection;