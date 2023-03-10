const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/glossary');

const wordSchema = new mongoose.Schema({
  word: { type: String, unique: true },
  description: String
})

const Word = mongoose.model('Word', wordSchema);

module.exports = {

  create: (wordData) => {
    let newWord = new Word(wordData);
    return newWord.save()
  },

  getAll: () => {
    return Word.find({});
  },

  edit: (newWord) => {
    console.log('newWord: ', newWord._id);
    return Word.findByIdAndUpdate(newWord._id, newWord);
  }
}


// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
