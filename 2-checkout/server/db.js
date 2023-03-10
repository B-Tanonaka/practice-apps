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
        name CHAR(255),
        email CHAR(255),
        password CHAR(20),
        address_1 CHAR(30),
        address_2 CHAR(30),
        city CHAR(255),
        state CHAR(255),
        zipcode CHAR(255),
        credit_card INT,
        expiry_date DATE,
        cvv INT(4),
        billing_zip INT(6)
        )`
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
