const router = require('express').Router();

const {
  getAllTasks,
  createNewTask,
  deleteOneTask,
  editOneTask,
  changeCheckboxTask,
} = require('../controllers/task-controller');

const {
  validateTitle,
  validateCheckbox,
} = require('../middlewares/validation-task');

router.get('/tasks', getAllTasks);
router.post('/tasks', validateTitle, createNewTask);
router.delete('/tasks/:id', deleteOneTask);
router.patch('/tasks/:id', validateTitle, editOneTask);
router.patch('/tasks/change-chackbox/:id', validateCheckbox, changeCheckboxTask);

module.exports = router;
