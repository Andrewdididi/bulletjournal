const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DailyEntryschema = mongoose.Schema({
  date: Date,
  gratitude: [{
    text: String,
  }],
  plan: [{
    entryType: String,
    text: String,
    complete: Boolean,
    description: String,
    tags: [String],
  }],
  lessons: [{
    text: String,
  }],
  wins: [{
    text: String,
  }],
});

const DailyEntry = mongoose.model('DailyEntry', DailyEntryschema);

module.exports = DailyEntry;
