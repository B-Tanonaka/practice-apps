require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const { getAll, create } = require("./models")

const PORT = process.env.PORT || 2413;

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  // getAll()
  // .then(() => {
  //   res.end('get request successful')
  // })
})

app.post('/', (req, res) => {
  create()
  .then(response => {
  })
  res.send('POST request successful')
})

app.use(express.static(path.join(__dirname, "../client/dist")));


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
