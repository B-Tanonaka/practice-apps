require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const { getAll, create, edit } = require("./db");

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
  .catch(() => {
    res.status(404).send();
  })
})

app.get('/words', (req, res) => {
  getAll()
  .then(data => {
    res.status(200).send(data);
  })
})

app.put('/words', (req, res) => {
  edit(req.body)
  .then(response => {
    // console.log('response: ', response)
    res.status(200).send(response);
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
