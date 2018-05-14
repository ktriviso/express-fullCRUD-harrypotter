const db = require('../models/sqlDB.js');

module.exports = {

  index(req, res, next) {
    db.findAll()
      .then((data) => {
        res.locals.students = data;
        next();
      })
      .catch(err => next(err));
  },

  indexHouses(req, res, next) {
      db.showHouses()
      .then((data) => {
        res.locals.houses = data;
        next();
      })
      .catch(err => next(err));
  },

  getOne(req, res, next) {
    db.findById(req.params.id)
      .then((data) => {
        res.locals.student = data;
        next();
      })
      .catch(err => next(err));
  },

  getOneHouse(req, res, next) {
    db.findByIdHouses(req.params.id)
      .then((data) => {
        res.locals.house = data;
        next();
      })
      .catch(err => next(err));
  },

  create(req, res, next) {
    db.save(req.body)
      .then((data) => {
        res.locals.student = data;
        next();
      })
      .catch(err => next(err));
  },

  update(req, res, next) {
    req.body.id = req.params.id
    db.update(req.body)
      .then((data) => {
        res.locals.student = data;
        next();
      })
      .catch(err => next(err));
  },

  destroy(req, res, next) {
    db.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },

};
