const router = require('express').Router();

const {
  getAllTasks,
  createNewTask,
  deleteOneTask,
  editOneTask,
  changeCheckboxTask,
} = require('../controllers/task-controller');

router.get('/tasks', getAllTasks);
router.post('/tasks', createNewTask);
router.delete('/tasks/:id', deleteOneTask);
router.patch('/tasks/:id', editOneTask);
router.patch('/tasks/something/:id', changeCheckboxTask);

module.exports = router;
