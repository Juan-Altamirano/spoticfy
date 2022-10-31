const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "spoticfy"
});

connection.connect((err) => {
    if (err) {
        console.log("Error connecting to Db");
        return;
    }
    console.log("Connection established");
});

module.exports = connection;