const mysql = require("mysql2");

const PoolCon = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "spoticfy.sql"
});

const QueryIn = (string, params) => {
    return new Promise((resolve, reject) => {
        PoolCon.query(string, params, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports = PoolCon;
