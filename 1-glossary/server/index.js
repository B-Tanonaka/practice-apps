require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const { getAll, create } = require("./db")

const PORT = process.env.PORT || 2413;

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, "../client/dist")));

app.post('/words', (req, res) => {
  create(req.body)
  .then(response => {
    res.status(201).send(response);
  })
})

app.get('/words', (req, res) => {
  getAll()
  .then(data => {
    // console.log('responseGet: ', data)
    res.send(data);
  })
  // .catch(() => {
  //   console.log('Error in app.get')
  // })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
