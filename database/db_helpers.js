const mongoose = require('mongoose');
const DailyEntry = require('./models/dailyEntry');

module.exports.storeEntry = (entry) => {
  const query = { date: entry.date };
  const update = { $push: { gratitude: entry.gratitude, plan: entry.plan, lessons: entry.lessons, wins: entry.wins } };
  const options = { upsert: true, new: true, setDefaultsOnInsert: true };

  return DailyEntry.update(query, update, options)
  .then(result => console.log('SUCCESS STORING INTO DB:', result))
  .error(err => console.log('ERROR STORING INTO DB:', err))
};

module.exports.fetchEntry = () => (
  DailyEntry.find()
  .then(result => result)
  .error(err => console.log('ERROR FETCHING DB:', err))
);

module.exports.fetchSingleEntry = (id) => (
  DailyEntry.find({ _id: id })
  .then(result => result)
  .error(err => console.log('ERROR FETCHING DB:', err))
);

module.exports.patchSingleEntry = (id, entry) => {
  const query = { _id: id };
  const options = { upsert: true };
  return DailyEntry.findOneAndUpdate(query, entry, options)
  .then(result => result)
  .error(err => console.log('ERROR FETCHING DB:', err));
};

