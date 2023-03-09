require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  if (err) {
    res.statusCode(404);
    res.end('GET request failed')
  }
  res.end('get request successful')
})

app.post('/', (req, res) => {
  res.send('POST request successful')
})

app.use(express.static(path.join(__dirname, "../client/dist")));


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
