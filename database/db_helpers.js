const mongoose = require('mongoose');
const Entry = require('./models/entry');

module.exports.storeEntry = entry => (
  Entry(entry).save()
  .then(result => console.log('SUCCESS STORING INTO DB:', result))
  .error(err => console.log('ERROR STORING INTO DB:', err))
);

module.exports.fetchEntry = () => (
  Entry.find()
  .then(result => result)
  .error(err => console.log('ERROR FETCHING DB:', err))
);

