require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB = process.env.DB;

module.exports = {PORT, DB}