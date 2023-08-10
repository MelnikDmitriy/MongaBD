const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    iscompleted: {
        type: Boolean,
        default: false
    }
})

module.exports = model('task', schema)