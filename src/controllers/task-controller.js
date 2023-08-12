const {
  getTasks,
  createTask,
  deleteTask,
  editTask,
  changeCheckbox,
} = require('../services/task-service');

const getAllTasks = async (req, res) => {
  try {
    const getedTasks = await getTasks();

    res.status(200).send(getedTasks);
  } catch (e) {
    res.status(400).send('Error - get tasks');
  }
};

const createNewTask = async (req, res) => {
  try {
    const { title } = req.body;
    const newTask = await createTask(title);

    res.status(200).send(newTask);
  } catch (e) {
    res.status(400).send('Error - create task');
  }
};

const deleteOneTask = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTask = await deleteTask(id);

    res.status(200).send(deletedTask);
  } catch (e) {
    res.status(400).send('Error - delete task');
  }
};

const editOneTask = async (req, res) => {
  try {
    const id = req.params.id;
    const { title } = req.body;
    const editedTask = await editTask(id, title);

    res.status(200).send(editedTask);
  } catch (e) {
    res.status(400).send('Error - edit task');
  }
};

const changeCheckboxTask = async (req, res) => {
  try {
    const id = req.params.id;
    const { statusCheckbox } = req.body;
    const changedCheckbox = await changeCheckbox(id, statusCheckbox);

    res.status(200).send(changedCheckbox);
  } catch (e) {
    res.status(400).send('Error - change checkbox');
  }
};

module.exports = {
  getAllTasks,
  createNewTask,
  deleteOneTask,
  editOneTask,
  changeCheckboxTask,
};
