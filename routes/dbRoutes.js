const express = require('express');
const controller = require('../controllers/dbController.js');
const views = require('../controllers/viewController');

const dbRouter = express.Router();

dbRouter.get('/students/:id/edit', controller.getOne, views.showEditForm, views.show404);

dbRouter.get('/students/new', views.showAddForm);

dbRouter.route('/students/:id')
  .get(controller.getOne, views.showOne, views.show404)
  .put(controller.update, views.handleUpdate, views.show406)
  .delete(controller.destroy, views.handleDelete, views.show404)

dbRouter.route('/houses/:id')
  .get(controller.getOneHouse, views.showOneHouse, views.show404)

dbRouter.route('/houses')
  .get(controller.indexHouses, views.showHouses, views.show404)

dbRouter.route('/students')
  .get(controller.index, views.showStudents, views.show404)
  .post(controller.create, views.handleCreate, views.show406)

module.exports = dbRouter;
