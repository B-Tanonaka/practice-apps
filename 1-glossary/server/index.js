require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const { getAll, create } = require("./models")

const PORT = process.env.PORT || 2413;

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, "../client/dist")));

app.post('/words', (req, res) => {
  create(req.body)
  .then(response => {
    res.status(201).end(response);
  })
})

app.get('/words', (req, res) => {
  // getAll()
  // .then((response) => {
  //   res.send(response);
  // }).catch(() => {
  //   console.log('Error in app.get')
  // })
  console.log('got gitten')
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
