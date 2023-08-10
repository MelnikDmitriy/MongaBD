const Task = require('../models/tasks')

const getTasks = async () => {
    const tasks = Task.find();

    return tasks
}

const createTask = async ( title ) => {
    const newTask = new Task({ title })
    const saveTask = await newTask.save()

    return saveTask
}

const deleteTask = async (id) => {
    const deletedTask = await Task.findOneAndDelete({_id: id})

    return deletedTask
}

module.exports = {
    getTasks,
    createTask,
    deleteTask
}