const router = require('express').Router()

const {
    getAllTasks,
    createNewTask,
    deleteOneTask
} = require('../controllers/task-controller')

router.get('/tasks', getAllTasks)
router.post('/tasks', createNewTask)
router.delete('/tasks/:id', deleteOneTask)

module.exports = router;