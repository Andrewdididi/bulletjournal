const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Entryschema = mongoose.Schema({
  title: String,
  text: String,
  complete: Boolean,
  description: String,
  tags: [String],
  date: Date,
});

const Entry = mongoose.model('Entry', Entryschema);

module.exports = Entry;
