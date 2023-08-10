const express = require('express')
const mongoose = require('mongoose')
const {PORT, DB} = require('./config')

const app = express()

const start = async () => {
    try {
        await mongoose.connect(DB, {})
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
    } catch (e) {   
        console.log(e)
    }
}

start()
