const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const router = require('./routes/route')
require("dotenv").config()

app.use(express.json())
app.use('/auth', router)


// Connect to MongoDB
mongoose.connect(process.env.BASE_URL);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});

// Define a Mongoose Schema


app.listen(port, () => { console.log(`server is runnign on ${port}`) })