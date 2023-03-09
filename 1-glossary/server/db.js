const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:3000');

const wordSchema = new mongoose.Schema({
  word: string,
  description: string
})

const Word = mongoose.model('Word', wordSchema);

module.exports.save = (wordData) => {
  let newWord = new Word(wordData);
  return newWord.save();
}


// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
