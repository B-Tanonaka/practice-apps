const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

// DROP DATABASE IF EXISTS checkout

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS responses (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        session_id CHAR(50),
        name CHAR(100),
        email CHAR(50),
        password CHAR(20),
        address_1 CHAR(30),
        address_2 CHAR(30),
        city CHAR(40),
        state CHAR(40),
        zipcode CHAR(10),
        credit_card CHAR(25),
        expiry_date DATE,
        cvv INT(4),
        billing_zip INT(6),
        UNIQUE KEY (session_id)
        )`
    )
  ).catch((err) => console.log(err));

module.exports = db;
