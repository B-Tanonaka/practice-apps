const { save } = require('./db');
const axios = require('axios');

const dataURL = 'http://localhost:glossary'

module.exports = {

  getAll: () =>  {
    return Repo.find({})
  },

  create: (wordObj) => {
    return save(wordObj)
    .then(response => {
      console.log('in create')
    }).catch(() => {
      console.log('Error')
    })
  }
}