const mysql = require("mysql2");
module.exports = function() {
    return mysql.createConnection({
        host: '192.168.80.105',
        port: 3307,
        user: "webdb",
        password: "webdb",
        database: "webdb"
    });
}
