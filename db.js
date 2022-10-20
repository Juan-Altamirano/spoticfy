const mysql = require("mysql2");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "spoticfy.sql"
});

con.connect((err) => {
    if (err) {
        console.log("Error connecting to Db");
        return;
    }
    console.log("Connection established");
});

module.exports = con, QueryIn;
