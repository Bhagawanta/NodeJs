// Headers 
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv/config')
const userRoute = require('./routes/user');
const cors = require('cors');
const port = 3000;
const hostname = '0.0.0.0';
// Middleware 
app.use(cors());
app.use(bodyParser.json());
app.use('/user',userRoute);

// Database Connection 
mongoose.connect(process.env.mongoUrl,{ useNewUrlParser : true, useUnifiedTopology: true },()=>{
 console.log("Connected to DB!");
})

// Server Running on Specific Port  
app.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})