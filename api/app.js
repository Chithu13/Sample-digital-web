const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = "mongodb://mongo:27017/WebSite_usedata";
mongoose.set("strictQuery", false);

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

const routes = require('./routes/routes');

app.use('/api', routes)

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})