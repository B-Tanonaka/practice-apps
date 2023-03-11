require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const { create, retrieve, remove } = require("./models")

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

app.use(express.json());

app.use(cors());

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/checkout', (req, res) => {
  retrieve()
  // .then((info) => {console.log('info: ', info[0])})
  .then(info => {
    res.status(200).send(info[0]);
  }).catch((err) => {
    res.status(404).send(err);
  })
})

app.post('/checkout', (req, res) => {
  create(req.body)
  .then(() => {
    res.send()
  }).catch(err => {
    res.status(404).send(err)
  })
})

app.delete('/checkout', (req, res) => {
  console.log('req.body: ', req.body);
  remove(req.body)
  .then(() => {
    res.status(200).send('delete successful')
  }).catch(err => {
    res.status(404).send(err)
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
