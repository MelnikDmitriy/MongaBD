const Task = require('../models/tasks');

const getTasks = async () => {
  const tasks = Task.find();

  return tasks;
};

const createTask = async (title) => {
  const newTask = new Task({ title });
  const saveTask = await newTask.save();

  return saveTask;
};

const deleteTask = async (id) => {
  const deletedTask = await Task.findOneAndDelete({ _id: id });

  return deletedTask;
};

const editTask = async (id, newTitle) => {
  const updateTask = await Task.findByIdAndUpdate(
    id,
    { title: newTitle },
    { new: true }
  );

  return updateTask;
};

const changeCheckbox = async (id, statusCheckbox) => {
  const changeChecboxTask = await Task.findByIdAndUpdate(
    id,
    { isChecked: statusCheckbox },
    { new: true }
  );

  return changeChecboxTask;
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  editTask,
  changeCheckbox,
};
