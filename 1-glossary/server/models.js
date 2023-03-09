const { save } = require('./db');

const dataURL = 'http://localhost:glossary'

// module.exports = {

//   getAll: () =>  {
//     return Word.find({})
//   },

//   create: (wordObj) => {
//     return save(wordObj)
//     .then(() => {
//       console.log('Saves to database')
//     }).catch(() => {
//       console.log('Error saving to database')
//     })
//   }
// }