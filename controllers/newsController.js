const db = require("../models");

// Defining methods for the NewsController
module.exports = {
  findAll: function(req, res) {
    db.News.find(req.query)
      .then(dbNews => res.json(dbNews))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.News.findById(req.params.id)
      .then(dbNews => res.json(dbNews))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.News.create(req.body)
      .then(dbNews => res.json(dbNews))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.News.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbNews => res.json(dbNews))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.News.remove()
      .then(dbNews => res.json(dbNews))
      .catch(err => res.status(422).json(err));
  }
};
