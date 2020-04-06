const db = require("../models");

// Defining methods for the newsController
module.exports = {
  findAll: function(req, res) {
    db.News
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.News.findAll({ where: { id: req.params.id } }).then(function(response) {
        return res.json(response);
    })
    },
  create: function(req, res) {
    db.News.create({ where: { id: req.params.id } }).then(function(response) {
        return res.json(response);
    })
  },
  update: function(req, res) {
    db.News
      .findOneAndUpdate({ where: { id: req.params.id } }).then(function(response) {
        return res.json(response);
    })
  },
  remove: function(req, res) {
    db.News
      .findById({ where: { id: req.params.id } }).then(function(response) {
        return res.json(response);
      })
    }
}

