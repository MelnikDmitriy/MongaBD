const {
    getTasks,
    createTask,
    deleteTask
} = require('../services/task-service')


const getAllTasks = async (req, res) => {
    try {
        const getedTasks = await getTasks()

        res.status(200).send(getedTasks)
    } catch (e) {
        res.status(400).send('Error - get tasks')
    }
}

const createNewTask = async (req, res) => {
    try {
        const { title } = req.body
        const newTask = await createTask(title)

        res.status(200).send(newTask)
        console.log('dfsafsdfsd')
    } catch (e) {
        res.status(400).send('Error - create task')
        console.log('dfasfsdf213')
    }
}

const deleteOneTask = async (req, res) => {
    try {
        const id = req.params.id
        const deletedTask = await deleteTask(id)

        res.status(200).send(deletedTask)
    } catch (e) {
        res.status(400).send('Error - delete task')
    }
}

module.exports = {
    getAllTasks,
    createNewTask,
    deleteOneTask
}