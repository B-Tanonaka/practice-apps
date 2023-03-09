const { save } = require('./db');
const axios = require('axios');

const server = 'http://localhost:2413'

module.exports = {

  getAll: () =>  {
    return Repo.find()
  },

  create: (wordObj) => {
    return axios.get(server)
    .then(response => {
      console.log('in create')
    }).catch(() => {
      console.log('Error')
    })
  }
}