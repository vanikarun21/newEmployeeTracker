const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '3115_mysql',
      database: 'empTracker'
    },
    console.log('Connected to the empTracker database.')
);

module.exports = db;