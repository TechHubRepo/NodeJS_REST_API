var mysql = require('mysql');

var hostIP = "localhost";
var userName = "root";
var passWord = "root";
var databaseName = "my_test";

var insert = (sqlQuery) => {
    return new Promise((resolve, reject) => {
        var connection = mysql.createConnection({
            host: hostIP,
            user: userName,
            password: passWord,
            database: databaseName
        });

        connection.connect();
        connection.query(sqlQuery, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        }).end();
    });
}

module.exports = {
    insert: insert
}