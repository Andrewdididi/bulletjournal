const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const db = require('../database/db_config');
const rh = require('./util/requestHandler.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '../public')));

app.post('/entry', rh.storePost);
app.get('/entry', rh.fetchPost);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/../public/index.html')));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Bullet Journal is listenting on PORT ${process.env.port || 3000}`);
});
