const mysql = require('mysql2');
const dotenv = require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.USER,
    password: process.env.KEY,
    database: 'employee_db'
});

module.exports = connection;