const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

// connect database with sql

const db = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    database: 'employeeList_db',
    password: 'password',
},
console.log('Connected to the employeeList_db database.')
);

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.listen(" ", (req, res) => {
connection.query('SELECT * FROM table_name', (err, rows, fields) => {
    if (err) {
        return res.status(400).json(err);
    }
    console.log('print stuff here')
    console.log('rows')
    res.json(rows);
});

});

app.listen(PORT, () => console.log('success!!!'))


// let connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//   }).promise();
// } else {
//   connection = mysql.createConnection({
//     host: 'localhost',
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: 'employeeTracker_db',
//   }).promise();
// }


// module.exports = connection;