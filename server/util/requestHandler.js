const dbh = require('../../database/db_helpers');

module.exports.storeEntry = (req, res) => {
  console.log('req.body is===', req.body);

  const data = {
    type: 'event',
    text: '9AM movies with jamie',
    complete: false,
    description: '',
    tags: ['personal'],
    date: new Date ('October 10, 2017'),
  };

  dbh.storeEntry(data)
  .then(result => res.send(result))
  .catch(err => res.status(500).send(err));
};

module.exports.fetchEntry = (req, res) => (
  dbh.fetchEntry()
  .then(result => res.send(result))
  .catch(err => res.status(500).send(err))
);

