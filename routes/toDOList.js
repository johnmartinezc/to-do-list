const { v4: uuidv4 } = require("uuid");
var express = require("express");
var router = express.Router();


const tasksController = require('../controllers/TasksController');

router.get('/all', tasksController.getAllTasks);
router.post("/create-one", tasksController.createOneTask);
router.post("/create-many", tasksController.createManyTasks);
router.delete("/delete-one/:id", tasksController.deleteOneTask);
router.delete("/delete-one-by-name/:name", tasksController.deleteOneTaskByName);
router.delete("/delete-many", tasksController.deleteManyTasks);
router.delete("/delete-many-by-name", tasksController.deleteManyTasksByName);
router.get("/get-one/:id", tasksController.getOneTask);
router.get("/get-one-by-name/:name", tasksController.getOneTaskByName);
router.put("/update-one/:id", tasksController.updateOneTask);
router.put("/update-one-by-name/:name", tasksController.updateOneTaskByName);

module.exports = router;