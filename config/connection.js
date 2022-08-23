const mysql = require('mysql2');
const dotenv = require('dotenv').config();

const pool = mysql.createPool({
    host: 'localhost',
    user: process.env.USER,
    password: process.env.KEY,
    database: 'employee_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;