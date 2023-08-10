const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    isСompleted: {
        type: Boolean,
        default: false
    }
})

module.exports = model('task', schema)