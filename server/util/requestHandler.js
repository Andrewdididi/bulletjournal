const dbh = require('../../database/db_helpers');

module.exports.storeEntry = (req, res) => {
  console.log('req.body is===', req.body);

  const data = {
    date: new Date('June 11, 2017'),
    gratitude: {
      text: 'Im thankful for holy spirit',
    },
    plan: {
      entryType: 'event',
      text: 'plan 5 year plan',
      complete: false,
      description: '',
      tags: ['goal'],
    },
    lessons: {
      text: 'Be on mom side, be on myside',
    },
    wins: {
      text: 'I worked out today',
    },
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

module.exports.fetchSingleEntry = (req, res) => (
  dbh.fetchSingleEntry(req.params.id)
  .then(result => res.send(result))
  .catch(err => res.status(500).send(err))
);
module.exports.patchSingleEntry = (req, res) => (
  dbh.patchSingleEntry(req.params.id, req.body)
  .then(result => res.send(result))
  .catch(err => res.status(500).send(err))
);

