const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { PORT, DB } = require('./config');
const routes = require('./src/routes/tasks-routing');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', routes);

const start = async () => {
  try {
    await mongoose.connect(DB, {});
    app.listen(PORT, () => {
      console.log('Server has been started...');
    });
  } catch (e) {
    console.log(e);
  }
};

start();
