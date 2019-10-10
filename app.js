const express = require('express');
const app = express();
const db = require('./db');
const { Thing } = db.models;


app.get('/', (req, res, next)=> {
  Thing.findOne({ where: { name: 'foo'}})
    .then( thing => res.send(thing))
    .catch(next);
});

module.exports = app;
