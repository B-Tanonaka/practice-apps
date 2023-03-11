const db = require('./db')


module.exports = {

  retrieve: () => {
    return db.queryAsync(
      'SELECT * FROM responses'
    )
  },

  create: (data) => {
      return db.queryAsync(
        'INSERT INTO responses (name, email, password, address_1, address_2, city, state, zipcode, credit_card, expiry_date, cvv, billing_zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [data.name,
        data.email,
        data.password,
        data.address_1,
        data.address_2,
        data.city,
        data.state,
        data.zipcode,
        data.credit_card,
        data.expiry_date,
        data.cvv,
        data.billing_zip]
      ).then(console.log('success creating'))
        .catch(err => {console.log(err)})
    }
  }

