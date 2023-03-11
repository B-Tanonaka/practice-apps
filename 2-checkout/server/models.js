const db = require('./db')


module.exports = {

  retrieve: () => {
    return db.queryAsync(
      'SELECT * FROM responses'
    )
  },

  remove: ({email}) => {
    return db.queryAsync(
      `DELETE FROM responses WHERE email = "${email}"`
    ).catch(err => console.log(err))
  },

  change: (entry) => {
    console.log(entry)
    return db.connectAsync(
      `UPDATE responses SET ${entry} WHERE email = "${entry.email}`,
    ).catch(err => {console.log(err)});
  },

  create: (entry) => {
      return db.queryAsync(
        'INSERT INTO responses (name, email, password, address_1, address_2, city, state, zipcode, credit_card, expiry_date, cvv, billing_zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [entry.name,
        entry.email,
        entry.password,
        entry.address_1,
        entry.address_2,
        entry.city,
        entry.state,
        entry.zipcode,
        entry.credit_card,
        entry.expiry_date,
        entry.cvv,
        entry.billing_zip]
      ).catch(err => console.log(err))
    }
  }

