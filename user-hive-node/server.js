const express = require('express');
// const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB=require('./config/db');
//dot env configuration
dotenv.config();



//Connect to MongoDB
connectDB();
const app = express();
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/api/auth/user',require('./routers/authRouter'));

app.get('/', (req, res) => {

     return res.status(200).send('<h1>Hello World</h1>');
});

//Port
const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));


